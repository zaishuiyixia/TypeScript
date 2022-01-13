// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}
// 函数重载，同一个函数名，根据传递的参数的不同，可以定义多个全局函数。
// declare function $(readyFunc: () => void): void;
// declare function $(selector: string): JqueryInstance;

// 使用interface的语法，实现函数重载
interface JQuery {
  (readyFunc: () => void): void;
  $(selector: string): JqueryInstance
}

declare var $: JQuery