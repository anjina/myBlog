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
  lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间,
  sidebarDepth: 6, // 侧边栏显示2级
  themeConfig: {
    // [以 '/' 结尾的默认指向该路径下README.md文件]
    nav: [ // 导航栏配置
      { text: '前端知识体系', link: '/fe/' },
      { text: '算法', link: '/algorithm/' },
      { text: '数据结构', link: '/dataStructure/' },
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub首页', link: 'https://github.com/Mulander-J' },
          { text: 'Island', link: 'https://mulander-j.github.io/island/code/html/index.html' },
          { text: 'TimeWaster', link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/' },
        ]
      }
    ],
    sidebar: {
      // 前端基础
      '/fe/': [
        '/fe/',
        {
          title: 'HTML',
          children: []
        },
        {
          title: 'CSS',
          children: []
        },
        {
          title: 'JS',
          children: []
        },
        {
          title: 'Node',
          children: []
        },
        // 编译原理，数据库，操作系统，网络等
        {
          title: '计算机基础',
          children: []
        },
        {
          title: '设计模式',
          children: []
        },
        {
          title: '前端工程化',
          children: [
            '/fe/前端工程化/webpack/webpack'
          ]
        },
        {
          title: '性能优化',
          children: []
        },
        {
          title: '前端安全',
          children: []
        },
        {
          title: 'Vue',
          children: [
            {
              title: '基础知识',
              children: [
                '/fe/Vue/基础知识/vue中的非响应式数据',
                '/fe/Vue/基础知识/Vue生命周期解析',
              ]
            },
            '/fe/Vue/组件进阶/注册',
            '/fe/Vue/动画/transition',
            '/fe/Vue/高级用法/mixin',
            '/fe/Vue/render/render',
          ]
        },
        {
          title: 'React',
          children: []
        },
        {
          title: 'ts',
          children: []
        },
        {
          title: 'flutter',
          children: []
        },
        // 可视化，游戏，移动端
        {
          title: '前端领域',
          children: [
            '/fe/前端工程化/webpack/webpack'
          ]
        },
        // lodash等
        {
          title: '前端工具库',
          children: []
        },
        {
          title: '开发工具',
          children: []
        },
      ],
      '/dataStructure/': [
        '/dataStructure/',
        {
          title: '链表',
          children: [
            '/dataStructure/链表/链表',
          ]
        },
        {
          title: '字符串',
          children: [
            '/dataStructure/字符串/字符串',
          ]
        },
        {
          title: '栈和队列',
          children: [
            '/dataStructure/栈和队列/栈和队列',
          ]
        },
        {
          title: '数组',
          children: [
            '/dataStructure/数组/数组',
          ]
        },
        {
          title: '二叉树',
          children: [
            '/dataStructure/二叉树/二叉树',
          ]
        },
        {
          title: '堆',
          children: [
            '/dataStructure/堆/堆',
          ]
        },
        {
          title: '哈希表',
          children: [
            '/dataStructure/哈希表/哈希表',
          ]
        },
      ],
      '/algorithm/': [
        '/algorithm/',
        {
          title: '排序',
          children: [
            '/algorithm/排序/复杂度',
            '/algorithm/排序/排序',
            '/algorithm/排序/插入排序',
            '/algorithm/排序/堆排序',
            '/algorithm/排序/归并排序',
            '/algorithm/排序/快速排序',
            '/algorithm/排序/冒泡排序',
            '/algorithm/排序/选择排序',
          ]
        },
        {
          title: '分治',
          children: [
            '/algorithm/分治/分治',
          ]
        },
        {
          title: '数学运算',
          children: [
          ]
        },
        {
          title: '查找',
          children: [
            '/algorithm/查找/查找',
          ]
        },
        {
          title: '递归和循环',
          children: [
            '/algorithm/递归和循环/递归',
          ]
        },
        {
          title: '回溯算法',
          children: [
            '/algorithm/回溯算法/回溯算法',
          ]
        },
        {
          title: '动态规划',
          children: [
            '/algorithm/动态规划/动态规划',
          ]
        },
        {
          title: '贪心算法',
          children: [
            '/algorithm/贪心算法/贪心算法',
          ]
        },
        {
          title: '原地置换',
          children: [
          ]
        },
      ],
    }, // 侧边栏配置
  }
};