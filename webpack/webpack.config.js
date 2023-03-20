const modoDev = process.env.NODE_ENV !== 'production' // se ele estiver no modo de desenvolvimento, essa variavel é diferente de produção. Essa variavel NODE_ENV estás sendo setada no package.json usando o plugin "cross-env". Se iniciarmos "npm run build" ele entrará no modo de produção e não de desenvolvimento.
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// esses dois ultimos plugins, são para minificar nossos arquivos para a aplicação.

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',

    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },

    devServer: {
        contentBase: "./public",
        port: 9000
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/, // essa expressão encontra 3 tipos de arquivos. .css.scss.sass.
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader' *desabilitado para n gerar conflito com oo MiniCss...*,
                 // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // Interpretar @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}