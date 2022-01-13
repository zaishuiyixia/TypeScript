// Home 命名空间依赖 Components 命名空间时，可以在最上方写一个依赖声明,表明依赖关系
// 命名空间建立依赖关系：
///<reference path="components.ts" />

namespace Home {
  export namespace Dell {
    export const teacher: Components.user = {
      name: 'dell'
    };
  }
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
      new Components.Footer();
    }
  }
}
