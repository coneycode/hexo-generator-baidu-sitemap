var merge = require('utils-merge');
var pathFn = require('path');

var config = hexo.config.baidusitemap = merge({
  path: 'baidusitemap.xml',
  // 参见百度移动Sitemap协议: https://www.baidu.com/schemas/sitemap-mobile/1/
  // mobile: 移动网页, pc,mobile: 自适应网页, htmladapt: 代码适配, pc(或无值):PC网页
  mobiletype: 'pc,mobile'
}, hexo.config.baidusitemap);

if (!pathFn.extname(config.path)){
  config.path += '.xml';
}

hexo.extend.generator.register('baidusitemap', require('./lib/generator'));
