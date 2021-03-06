// 基础类型, boolean, number, string, void, undfined, symbol, null
let count: number;
count = 123;

// 对象类型, {}, Class, function, []
// 写法一
const func = (str: string) => {
  return parseInt(str, 10);
};

// 写法二:冒号后面跟的是类型，等号后面跟的是具体的实现
const func1: (str: string) => number = str => {
  return parseInt(str, 10);
};

const date = new Date();

// 其他的 case
interface Person {
  name: 'string';
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = '456';
