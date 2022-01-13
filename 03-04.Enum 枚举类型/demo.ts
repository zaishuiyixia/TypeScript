// 枚举类型，可以自定义数字,默认从0开始依次往后+1
enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED
}

// 枚举类型正向引用和反向引用都可以
console.log(Status.OFFLINE, Status[0], Status[1]);

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }

// function getResult(status) {
//   if (status === Status.OFFLINE) {
//     return 'offline';
//   } else if (status === Status.ONLINE) {
//     return 'online';
//   } else if (status === Status.DELETED) {
//     return 'deleted';
//   }
//   return 'error';
// }

// const result = getResult(1);
// console.log(result);
