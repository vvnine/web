const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
                
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use:{
                    loader:'file-loader',
                }},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin() 
    ],
    devServer:{
        contentBase:'./dist',
        open: true,//自动打开
        port:8080,//端口号
        hot:true,
        hotOnly: true,
    },

    mode:'development',
    resolve:{//解决runtime-only的template问题
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}