// 文章数据，模拟从后端获取的 JSON 数据
const postData = [
    {
        tag: "置顶",
        title: "欢迎来到 kelly博客！",
        date: "2026年5月6日",
        views: 222,
        summary: "这是一个基于 Nekopara和MD3主题风格搭建的博客...",
        link: "#"
    },
    {
        tag: "开发日志",
        title: "关于 Python 3.13 与模型微调的心得",
        date: "2026年5月5日",
        views: 105,
        summary: "最近在研究数据集生成工具",
        link: "#"
    }
];

// 个人站数据，模拟从后端获取的 JSON 数据
const profileData = {
    name: "Kelly",
    avatar: "#",
    motto: "「又是是美好的一天」",
    details: [
        { icon: "🐾", label: "种族", value: "混合布丁猫" },
        { icon: "💻", label: "技能", value: "C++/Python/JS" },
        { icon: "📍", label: "坐标", value: "La Soleil 分店" }
    ]
};

// 公告栏数据
const noticeData = {
    title: "公告栏",
    content: "正在搭建中，欢迎！"
};


// 进入动画
// 随机猫娘语录
const tips = [
    "巧克力正在为您打扫房间...",
    "香草正在准备红茶...",
    "喵主子们正在排队入场...",
    "正在调整猫耳的角度...",
    "正在为您捕捉幸运代码..."
];