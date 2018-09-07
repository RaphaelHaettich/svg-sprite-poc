const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin('styles.css'),
        new SVGSpritemapPlugin({
            src: 'src/**/*.svg',
            filename: 'svgsprite.svg',
            svg4everybody: false,
            svgo: false
        })
    ]
};
