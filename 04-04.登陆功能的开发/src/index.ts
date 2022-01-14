import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// cookie-session中间件用来做登录的持久存储
app.use(
  cookieSession({
    name: 'session', // 要设置的Cookie的名称
    keys: ['teacher dell'], // 用于签名和验证Cookie值的键列表。设置Cookie时始终使用签名keys[0]，验证时使用其它密钥。
    maxAge: 24 * 60 * 60 * 1000 // 设置cookie的有效时间，为毫秒数，24小时
  })
);

app.use(router);

app.listen(7001, () => {
  console.log('server is running');
});
