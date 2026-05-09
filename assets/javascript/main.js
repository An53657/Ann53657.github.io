// // 随机事件
// function meow() {
//     const sounds = ["喵呜~", "主人，有什么事吗？", "今天的蛋糕很甜哦！"];
//     const random = sounds[Math.floor(Math.random() * sounds.length)];
//     alert(random);
// }



// ----------------------------------------------------------------

// 随机显示一条提示
// document.getElementById('tip-text').innerText = tips[Math.floor(Math.random() * tips.length)];

// 渲染函数渲染函数：将 data.js 中的数据转为 HTML
function renderPosts(data) {
    const container = document.getElementById('post-list-container');
    if (!container) return;

    const htmlContent = data.map(post => `
        <div class="post-card">
            <span class="post-tag">${post.tag}</span>
            <h3 class="mt-2">${post.title}</h3>
            <p class="text-muted">发布于 ${post.date} · 阅读(${post.views})</p>
            <p>${post.summary}</p>
            <button class="btn btn-pink" onclick="window.location.href='${post.link}'">阅读全文</button>
        </div>
    `).join('');

    container.innerHTML = htmlContent;
}


// ----------------------------------------------------------------

// 渲染公告栏
function renderNotice(data) {
    const container = document.getElementById('notice-container');
    if (!container) return;
    container.innerHTML = `
        <h5>${data.title}</h5>
        <p style="font-size: 0.9rem;">${data.content}</p>
    `;
}

// ----------------------------------------------------------------


// 渲染个人信息卡片
function renderProfile(data) {
    const container = document.getElementById('profile-container');
    if (!container) return;

    const detailsHtml = data.details.map(item => `
        <p>${item.icon} <strong>${item.label}：</strong> ${item.value}</p>
    `).join('');

    container.innerHTML = `
        <img src="${data.avatar}" class="avatar-img mb-3" alt="Avatar">
        <h4>${data.name}</h4>
        <p class="text-muted">${data.motto}</p>
        <hr>
        <div class="text-left">
            ${detailsHtml}
        </div>
    `;
}

// ----------------------------------------------------------------

window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');
    const content = document.getElementById('main-content');
    const tipElement = document.getElementById('tip-text');

    // [安全操作] 页面加载完成后再设置随机语录
    if (tipElement) {
        tipElement.innerText = tips[Math.floor(Math.random() * tips.length)];

    }

    // [动态渲染] 执行数据集渲染
    if (typeof postData !== 'undefined') {
        renderPosts(postData);
    } else {
        console.error("喵呜！找不到 postData，请确认 index.html 中引入了 data.js");
    }


    // 执行全量渲染
    if (typeof postData !== 'undefined') renderPosts(postData);
    if (typeof profileData !== 'undefined') renderProfile(profileData);
    if (typeof noticeData !== 'undefined') renderNotice(noticeData);


    // 保持加载状态至少 2 秒，让用户看清楚 MD3 动画
    setTimeout(() => {
        overlay.style.opacity = '0';

        // 判断内容是否存在
        if (content) {
            content.style.opacity = '1';
        }

        // 动画后移除遮罩层
        setTimeout(() => {
            // 动画完成后消失,不占位置
            overlay.style.display = 'none';
        }, 800);
    }, 2000);
});

// ----------------------------------------------------------------
// 主题切换
const storageKey = 'theme-preference';

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setPreference = (theme) => {
    localStorage.setItem(storageKey, theme);
    reflectPreference();
};

const reflectPreference = () => {
    const theme = getColorPreference();
    document.body.classList.toggle('dark-mode', theme === 'dark');
};

// 初始化
reflectPreference();

// 点击事件
document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    setPreference(newTheme);
});