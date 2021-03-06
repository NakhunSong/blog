require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

// const ssr = require('./ssr');

const mongoose = require('mongoose');

const session = require('koa-session');

const {
    PORT: port = 4000, // 값이 존재하지 않는다면 4000을 기본 값으로 사용
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(
    () => {
        console.log('conntected to mongodb');
    }
).catch((e) => {
    console.error(e);
});

const app = new Koa();

const router = new Router();

// 라우터 설정
router.use('/api', api.routes());
// router.get('/', ssr);

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// 세션/키 적용
const sessionConfig = {
    maxAge: 86400000, // 하루
    // signed: true(기본으로 설정되어 있음)
};

app.use(session(sessionConfig, app));
app.keys = [signKey];

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// app.use(ssr); // 일치하는 것이 없으면 ssr을 실행합니다.

app.listen(port, () => {
    console.log('listening to port ', port);
});