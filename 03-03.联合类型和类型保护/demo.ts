interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  break: () => {};
}

// 联合类型和类型保护：当联合类型时，语法提示不准确，此时需要类型保护进行规避语法提示问题
// 联合类型在提示时，只会取联合的类型里共有的属性或方法；如果取了不是共有的属性或方法会报错。
//为了避免联合类型引起的报错提示，可以启用类型保护。

// 类型断言的方式来做类型保护
function trainAnial(animal: Bird | Dog) {
  if(animal.fly) {
    (animal as Bird).sing()
  } else {
    (animal as Dog).break()
  }
}

// in 语法来做类型保护
function trainAnialSecond(animal: Bird | Dog) {
  if('sing' in animal) {
    animal.sing()
  } else {
    animal.break()
  }
}

// typeof语法来做类型保护
function add(first: string | number, second: string| number) {
  // if(typeof first === 'string' || typeof second === 'string') {
  //   return `${first}${second}`
  // }
  return first + second
}

// 使用instanceof语法做类型保护
// 但是要注意数据结构是对象类型时，不要用 interface , 要用类来定义，因为只有类才能被 instancof 语法调用
class NumberObj {
  count: number
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}

export {}