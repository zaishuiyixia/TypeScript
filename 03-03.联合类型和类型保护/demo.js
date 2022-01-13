"use strict";
exports.__esModule = true;
// 联合类型和类型保护：当联合类型时，语法提示不准确，此时需要类型保护进行规避语法提示问题
// 类型断言的方式来做类型保护
function trainAnial(animal) {
    if (animal.fly) {
        animal.sing();
    }
    else {
        animal["break"]();
    }
}
trainAnial({
    fly: true,
    "break": function () {
        return {};
    }
});
