// 数组
const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined];

// type alias 类型别名
type User = { name: string; age: number };

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28
  }
];

// 元组 tuple 当数组长度固定,数组每一项的类型固定的时候就可以用元祖来注解
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];
// csv
const teacherList: [string, string, number][] = [['dell', 'male', 19], ['sun', 'female', 26], ['jeny', 'female', 38]];
