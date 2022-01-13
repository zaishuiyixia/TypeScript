//ts 需要融入模块化的思想，即每一个模块有自己的环境，不会影响别的模块中的东西，这样不会生成过多的全局变量。
//命名空间就是用来做类似模块化的东西。如果不做模块化直接编译文件会产生全局变量。
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Header';
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Content';
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Footer';
      document.body.appendChild(elem);
    }
  }

  //需要通过命名空间暴露出去的类前面加 export , 就可以通过 Home.Page 获取到
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
