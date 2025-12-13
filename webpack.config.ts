import path from 'path';
import { buildWebpackConfig } from './config/buildWebpackConfig';
import { BuildPaths } from './config/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = "development"
const isDev = mode === "development"

export default buildWebpackConfig({
    mode: "development",
    paths,
    isDev
});
