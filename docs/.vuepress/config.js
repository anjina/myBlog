module.exports = {
  title: 'D.W\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/myBlog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // [以 '/' 结尾的默认指向该路径下README.md文件]
    nav: [ // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '微博', link: 'https://baidu.com' },
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub首页', link: 'https://github.com/Mulander-J' },
          { text: 'Island', link: 'https://mulander-j.github.io/island/code/html/index.html' },
          { text: 'TimeWaster', link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/' },
        ]
      }
    ],
    sidebar: 'auto', // 侧边栏配置
    lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间,
    sidebarDepth: 4, // 侧边栏显示2级
  }
};