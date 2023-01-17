module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        //在rules中添加自定义规则
        //关闭组件命名规则
        //"vue/multi-word-component-names": "off",
        //添加组件命名忽略规则
        "vue/multi-word-component-names":[
            "error",{
                "ignores":["School","Student"]   //需要忽略的组件名
            }
        ]
    },
    overrides: [
        //关闭某文件命名规则校验
        {
            files:['src/components/School.vue','src/components/Student.vue'], //匹配components下的School.vue,Student.vue
            rules:{
                'vue/multi-word-component-names':'off',   //匹配文件命名规则
            }
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}