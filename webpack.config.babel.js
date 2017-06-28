import webpack from 'webpack';
import path from 'path';
import ChunksPlugin from 'webpack-split-chunks';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// configuro Paths
const PATHS = {
    index: path.join(__dirname, 'src/index'),
    build: path.join(__dirname, 'src/public'),
    src: path.join(__dirname, 'src')
};


const getDevTool = () => 'cheap-module-eval-source-map';


//configuracion de entrada
const getEntry = () => {
    const entry = [PATHS.index] // <-- requerida en el export
    
    if(isDevelopment){
        entry.push('webpack-hot-middleware/client?reload=true');
    }
    
    return entry
};


const getOutput = () => ({
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
}); // <-- objeto requerido en el export


const getPlugins = () => {
    const plugins = [ // <-- arreglo requerido en el export
    //separa el bundle en main.js y vendor.js
/*    new ChunksPlugin({ 
        to: 'vendor',
        test: /node_modules/
    })*/
    ];
    
    if(isDevelopment) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
    } else {
        plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            }
        })
        );       
    }
    
    return plugins;
};


const getLoaders = () => ({
    loaders: [
    {
            test: /\.js?$/,
            loaders: ['babel-loader'],
            include: PATHS.src
        },
        {
            test: /(\.css)$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        { 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            loader: 'url-loader?limit=100000'
        }
    ]
});


export default {
    devtool: getDevTool(),
    entry: getEntry(),
    output: getOutput(),
    plugins: getPlugins(),
    module: getLoaders()
};
