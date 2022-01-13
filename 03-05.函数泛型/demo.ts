// 泛型 generic 泛指的类型

function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

function anotherJoin<T>(first: T, second: T): T {
  return first;
}

// T[] 等价 Array<T>
function map<T>(params: Array<T>) {
  return params;
}

// join<number, string>(1, '1');
// map<string>(['123']);
join(1, '1');
