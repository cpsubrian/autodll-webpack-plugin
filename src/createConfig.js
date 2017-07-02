import webpack from 'webpack';
import path from 'path';
import { cacheDir } from './paths';
import merge from 'webpack-merge';

const createConfig = ({entry, filename, config = {}}) => {
  return merge({
    resolve: {
      extensions: ['.js', '.jsx']
    },
    entry: entry,
    output: {
      path: path.join(cacheDir, 'bundles'),
      filename: filename,
      library: '[name]_[hash]'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(cacheDir, '[name].manifest.json'),
        name: '[name]_[hash]'
      })
    ]
  }, config);
};

export default createConfig;
