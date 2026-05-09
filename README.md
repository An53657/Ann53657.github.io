# 项目结构
```bash
Neko_Blog_Project/
├── assets/                 # 静态资源
│   ├── css/
│   │   ├── main.css        # 全局样式（MD3 变量、粉色系配置）
│   │   └── components.css  # 局部组件样式（如猫咪卡片、导航栏）
│   ├── js/
│   │   └── data.js         # 模拟数据库，存放你要“写死”的文章、图片信息
|   |   |—— main,js         # 全局JS
│   ├── img/
│   │   ├── avatars/        # 头像
│   │   ├── banners/        # 封面图
│   │   └── ui/             # 装饰性图标（猫爪、铃铛等）
│   └── lib/                # 第三方库（Bootstrap 源码或本地备份）
├── components/             # 页面公共模块（虽然是静态，但逻辑上独立）
│   ├── navbar.html         # 导航栏构思
│   └── footer.html         # 页脚构思
├── pages/                  # 独立页面
│   ├── archive.html        # 归档页
│   ├── about.html          # 关于我
│   └── post-detail.html    # 文章详情页
└── index.html              # 首页入口
```
# 用的第三方库/框架插件
- Bootstrap框架
