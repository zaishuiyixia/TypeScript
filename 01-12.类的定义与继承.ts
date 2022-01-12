class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    //在子类中重写了父类的方法之后，还想要调用父类的方法时，用super来调用原来父类的方法
    return super.getName() + 'lee';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());

export {}
