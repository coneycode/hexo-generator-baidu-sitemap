# Sitemap generator

 Generate sitemap.

 **使用站图的初衷是[为自己的博客添加站内搜索](http://gengbiao.me/2014/10/22/hexo%E6%B7%BB%E5%8A%A0%E7%99%BE%E5%BA%A6%E7%AB%99%E5%86%85%E6%90%9C%E7%B4%A2/),如果想更好的发挥站图的作用，建议手动提交baidusitemap给百度.**


 ## Install

 if your hexo version is 2.x.x, you should install as follow:

 ``` bash
 $ npm install hexo-generator-baidu-sitemap@0.0.8 --save
 install process ...
 ```

 if version is 3.x.x, you should install as follow:

 ``` bash
 $ npm install hexo-generator-baidu-sitemap@0.1.4 --save
 install process ...
 ```

 ## Update

 ``` bash
 $ npm remove hexo-generator-baidu-sitemap
 install process ...
 $ npm install hexo-generator-baidu-sitemap --save
 ```

 if your hexo version is 2.x.x, you can configure this plugin in `_config.yml`.
 
 baidusitemap:
     path: baidusitemap.xml
     mobiletype: 'pc,mobile'
 ```

 if version is 3.x.x, you should configure this plugin in `_config.yml`.

 ``` yaml
 baidusitemap:
      path: baidusitemap.xml
      mobiletype: 'pc,mobile'
 ```

 - **path** - Sitemap path. (Default: baidusitemap.xml)
 - **mobiletype** - [参见百度移动Sitemap协议](https://www.baidu.com/schemas/sitemap-mobile/1/) ,mobile: 移动网页, pc,mobile: 自适应网页, htmladapt: 代码适配, pc(或无值):PC网页
 ## Errors

 Maybe response is "hexo is not definded",then you should:

 ``` bash
 $ cd node_modules/hexo-generator-baidu-sitemap/
 node_modules/hexo-generator-baidu-sitemap/
 $ npm install
 ```
