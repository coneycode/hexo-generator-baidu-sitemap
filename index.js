var pathFn = require('path');

var config = hexo.config.baidusitemap = Object.assign({
  path: 'baidusitemap.xml'
}, hexo.config.baidusitemap);

if (!pathFn.extname(config.path)){
  config.path += '.xml';
}

hexo.extend.generator.register('baidusitemap', require('./lib/generator'));
