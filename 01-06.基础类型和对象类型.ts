// 基础类型 string, number, null, undefined, symbol, boolean, void
const count: number = 123;
const teacherName: string = 'Dell';

// 对象类型：对象、数组、类、函数

class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'Dell',
  age: 18
};

const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

const getTotal: () => number = () => {
  return 123;
};


export {}