//实现属性只能读取不能修改

//方法一： readonly
// class Person {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const person = new Person('Dell');
// person.name = 'hello';
// console.log(person.name);

//方法二：只写get不写set
// class Person2 {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() {
//     return this._name
//   }
// }

// const person2 = new Person2('Dell');
// person2.name = 'hello';
// console.log(person2.name);

// 抽象类，把很多共用的东西抽离出来封装成一个抽象的类型，类型里面有一些抽象的方法或者具体的属性和方法
// 在类前面加 abstract 关键字，就是抽象类
// abstract class Geom {
//   width: number;
//  //抽象类里面可以写一些具体的属性或者方法，不一定非要是抽象方法
//   getType() {
//     return 'Gemo';
//   }
//   //在方法面前加 abstract 关键字，意味着这个方法具体的实现也是抽象的。
//   //抽象的方法意味着方法的具体实现也是抽象的，是不知道具体怎么实现的，所以只能定义这个方法，不能写具体的实现。
//   abstract getArea(): number;
// }

// 抽象类只能被继承，不能被实例化，所以 new Geom() 是不可以的。
// 子类继承了抽象类，抽象类中如果有抽象方法，必须在子类中实现这个抽象方法，要不会报错

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

// class Square {}
// class Triangle {}

// 接口和抽象类很像，抽象类是把类的通用的东西抽象出来，接口是把对象或函数通用的东西抽象出来。
interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person {
  age: number;
}

interface Driver {
  name: string;
  age: number;
}

const teacher = {
  name: 'dell',
  teachingAge: 3
};

const student = {
  name: 'lee',
  age: 18
};

const getUserInfo = (user: Person) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
