// private, protected, public 访问类型，默认public
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用
// class Person {
//   public name: string;
//   protected age = 18;
//   private weight: number;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
//   private sayABC() {
//     this.name;
//   }
// }

// class Teacher extends Person {
//   public sayBye() {
//     console.log('age ',this.age) // protected允许在继承的子类中使用
//     // console.log(this.weight) // private只允许在类内被使用
//     this.sayHi();
//   }
// }

// let object = new Teacher()
// console.log(object.sayBye())

// const person = new Person();
// person.name = 'dell';
// console.log(person.name);
// person.sayHi();

// constructor
// class Person {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   // 简化写法
//   constructor(public name: string) {}
// }
// const person = new Person('dell');
// console.log(person.name);

class Person {
  constructor(public name: string) {}
}

//只要子类中声明了构造器，不管其父类中是否显示定义构造器，都需要在子类构造器中调用父类构造器 super()，如果父类构造器需要传参还必须在调用时传递参数值，否则会报错
class Teacher extends Person {
  constructor(public age: number, public height: number) {
    super('dell');
  }
}

const teacher = new Teacher(28, 183);
console.log(teacher.age);
console.log(teacher.name);
console.log(teacher.height);

export {}
