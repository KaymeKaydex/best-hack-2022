const path = require('path');
const r = path.resolve;
// Пути к директориям
const rootPath = r(__dirname);
const srcPath = r(rootPath, 'src');
const componentsPath = r(srcPath, 'components');
const stylesPath = r(srcPath, 'styles');

const storesPath = r(srcPath, 'stores');
const domainPath = r(storesPath, 'domain');
const viewPath = r(storesPath, 'view');

const utilsPath = r(srcPath, 'utils');
const hooksPath = r(utilsPath, 'hooks');
const requestsPath = r(utilsPath, 'requests');

module.exports = {
    webpack: {
        alias: {
            '@components': componentsPath,
            '@styles': stylesPath,
            '@domain': domainPath,
            '@view': viewPath,
            '@hooks': hooksPath,
            '@requests': requestsPath
        }
    }
}