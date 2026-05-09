    let vditor;
    // 自定义路径变量，方便代码中引用
    const SAVE_PATH = "/assets/js/data.js"; 

    window.onload = () => {
        vditor = new Vditor('vditor', {
            height: window.innerWidth < 768 ? 400 : 600,
            placeholder: '在此编写正文...',
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'classic',
            input: () => syncPreview(),
            after: () => syncPreview()
        });

        if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    };

    function syncPreview() {
        const title = document.getElementById('postTitle').value || "未命名文章";
        const content = vditor.getValue();
        const summary = content.replace(/[#*`>]/g, '').substring(0, 100).trim();
        
        document.getElementById('viewTitle').innerText = title;
        document.getElementById('viewSummary').innerText = summary || "等待输入内容...";
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.getElementById('theme-icon').innerText = isDark ? 'dark_mode' : 'light_mode';
        vditor.setTheme(isDark ? 'dark' : 'classic');
    }

    // 适配 MySQL 结构的 JSON 导出
    function downloadMySQLJSON() {
        const title = document.getElementById('postTitle').value || "Untitled";
        const rawContent = vditor.getValue();
        const now = new Date();
        
        const postData = {
            tag: "开发日志",
            title: title,
            date: now.toISOString().slice(0, 19).replace('T', ' '), // MySQL DATETIME 格式
            views: 0,
            summary: rawContent.replace(/[#*`>]/g, '').substring(0, 150) + "...",
            content: rawContent,
            link: "#",
        };

        const blob = new Blob([JSON.stringify(postData, null, 4)], { type: "application/json" });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `post_${now.getTime()}.json`;
        a.click();
        console.log(`数据已生成，建议存放至: ${SAVE_PATH}`);
    }

// -----------------------------------------------
// edit.js
