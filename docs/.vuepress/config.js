module.exports = {
    base: '/Daxi/',
    title: '达西UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎Star', link: 'https://github.com/Michcola/Daxi/'},
            {text: 'Github', link: 'https://github.com/Michcola'},
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ]
            },
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse'
                ]
            },
        ]
    }
}