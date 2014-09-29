var generator = hexo.extend.generator;

if (generator.register.length === 1){
  generator.register(require('./baidusitemap'));
} else {
  generator.register('baidusitemap', require('./baidusitemap'));
}
