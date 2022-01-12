interface People {
  name: string;
  run(): string;
}

const getPeople = (people: People): void => {
  console.log(people)
}

//当以字面量的形式直接传递对象给一个变量的时候，TS 会对对象进行强校验；如果对象多传属性，会报错；
getPeople({
  name: 'dell',
  sex: 'male',
  run() {
    return 'say hello';
  }
})

let people = {
  name: 'dell',
  sex: 'male',
  run() {
    return 'say hello';
  }
}

//如果先用变量缓存对象，再传这个缓存变量的时候，TS 就不会那么严格了，只需要 person 里具备 Person 类型里该有的东西，多传属性是没有关系的。
getPeople(people);

// interface 和 type 相类似，但并不完全一致
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any; //Person类型中可能除了必有的属性，还会有一些其它不确定的属性，属性名字是字符串，属性值可以是任意类型
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

//使用除了能定义属性和方法外，接口还可以定义函数的类型声明
interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  }
};
getPersonName(person);
setPersonName(person, 'lee');
//类应用一个接口时使用implements，使用后类中就必须要有接口定义的类型的属性和方法
class User implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}

const say: SayHi = (word: string) => {
  return word;
};

export {}
