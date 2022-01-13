//想要泛型 T 上要有一个 name 的属性，就需要让泛型 T 继承 一个有 name 属性的接口
//<T extends Item> 其实就是表明泛型 T 在应用时会对应一个 Item 的具体类型。
// interface Item {
//   name: string;
// }
// T要么是number要么是string类型，定义泛型 T 的具体类型范围，借助 extends 继承来进行约束
// class DataManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const data = new DataManager<number>([1]);
// data.getItem(0);

// const data = new DataManager([
//   {
//     name: 'dell'
//   }
// ]);

// interface Test {
//   name: string;
// }

// const data = new DataManager<number>([]);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params;
}

const func: <T>(param: T) => T = hello;
