// 不使用引入 jquery 外链的方式，直接 npm 安装 jquery；
// 然后 jquery 相当于一个模块，需要被引入，且需要用 .d.ts 文件来描述 jquery 这个模块；
// 注意描述文件中最后一定要导出要用的 $ , export = $

import $ from 'jquery';

$(function() {
  $('body').html('<div>123</div>');
  new $.fn.init();
});
