const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
    // 시작점 잡기
    entry: './js/main.js',

    // 결과문의 반환하는 패스 설정
    output:{
    // path:path.resolve(__dirname,'pubilc'),
    // filename:'sample.js',
    clean:true
    },

    //module
    module:{
        rules:[
            {   //scss, css
                test:/\.s?css$/, //정규표현식
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    }, //객체
    plugins:[
        new htmlPlugin({
            template:'./index.html'
        }),
        new copyPlugin(
            {patterns:[
                {from:'static'}
            ]}
        )
    ] //배열
    //plugins
}