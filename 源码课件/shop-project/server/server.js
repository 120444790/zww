const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const ossClient = require('./utils/oss');
const productData = require('./data/productDetail');
const { user, shop } = require('./model');

app.use(cors({
  origin : "http://localhost:3000",
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', async function(req, res) {
  const { loginToken } = req.cookies;
  if (!loginToken) {
    return res.sendFile(path.resolve(__dirname, './index.html'));
  }

  const row = await user.findOne({
    where: {
      userId: loginToken,
    }
  });
  res.send(`${row.username} 您已登录`);
});

app.post('/api/login', async function(req, res) {
  const { username, password } = req.body;

  const row = await user.findOne({
    where: {
      username,
      password,
    }
  });

  if (row) {
    // 用户登录成功

    res.cookie('loginToken', row.userId, {
      maxAge: 1000 * 60 * 15,
      httpOnly: true,
      domain: 'localhost:3000'
    });

    res.json({
      status: 0,
      msg: "登录成功",
      data: row.userId,
    });
  } else {
    res.status(401).json({
      status: 401,
      msg: "登录失败",
    });
  }
});

app.post('/api/register', async function(req, res) {
  const { username, password } = req.body;
  const row = await user.findOne({
    where: {
      username,
    }
  });
  if (row) {
    res.json({
      status: 1,
      msg: "用户名重复"
    });
  } else {
    await user.create({
      username,
      password,
    });
    res.json({
      status: 0,
      msg: "注册成功",
    });
  }
});

app.get('/api/index', async function(req, res) {
  const { perPage = 10, page = 1 } = req.query;

  const offset = ((+page) - 1) * (+perPage);
  const products = await shop.findAll({ raw: true, limit: +perPage, offset });
  res.json({
    status: 0,
    data: {
      banner: [
        {
          "id": 104,
          "name": "banenr2",
          "url": "/pages/pink-list/index?id=2",
          "pic": "http://pic.616pic.com/bg_w1180/00/03/28/jhyBlXwGIb.jpg"
        },
        {
          "id": 170,
          "name": "banner2",
          "url": "#",
          "pic": "http://pic.616pic.com/bg_w1180/00/21/86/6Y688zXLcy.jpg"
        },
        {
          "id": 194,
          "name": "banner2",
          "url": "#",
          "pic": "http://pic.616pic.com/bg_w1180/00/05/68/N2XHZSbqHa.jpg"
        }
      ],
      menus: [
        {
          "id": 100,
          "name": "领优惠券",
          "pic": "http://demo26.crmeb.net/uploads/attach/2020/04/20200426/54b6898021fa40a05e1ccc928d03eb4a.png"
        },
        {
          "id": 101,
          "name": "行业资讯",
          "pic": "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9ddcec57a80.png"
        },
        {
          "id": 102,
          "name": "我要签到",
          "pic": "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9ddd570b8b3.png"
        },
        {
          "id": 105,
          "name": "我的收藏",
          "pic": "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9dddce0eac9.png"
        },
        {
          "id": 158,
          "name": "拼团活动",
          "pic": "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9dde013f63c.png"
        },
        {
          "id": 159,
          "name": "秒杀活动",
          "pic": "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9dde246ad96.png"
        },
        {
          "id": 160,
          "name": "砍价活动",
          "pic": "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9ddedbed782.png"
        },
        {
          "id": 192,
          "name": "商品分类",
          "pic": "http://demo26.crmeb.net/uploads/attach/2020/04/20200426/8d2c33030da4a265073d09152facf14d.png"
        }
      ],
      info: {
        bastList: products
      },
    }
  })
});

app.get('/product/detail/:id', async function(req, res) {
  res.json(productData);
});

app.listen(8080, function() {
  console.log('server start');
});
