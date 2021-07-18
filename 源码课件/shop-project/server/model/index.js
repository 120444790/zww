const Sequelize = require('sequelize');

const UserModel = require('./User');
const ShopModel = require('./Shop');

const sequelize = new Sequelize('zw-shop', 'root', 'haohaoxuexi', {
  host: 'localhost',
  dialect: 'mysql'
});

const user = UserModel(sequelize, Sequelize.DataTypes);
const shop = ShopModel(sequelize, Sequelize.DataTypes);

// shop.sync({ force: true })
//   .then(() => {
//     shop.bulkCreate([
//       {
//         "id": 1,
//         "image": "http:\/\/img.alicdn.com\/imgextra\/i2\/446338500\/O1CN01C1gPMf2Cf3B2m9MvK-446338500.jpg",
//         "storeName": "阿迪达斯官网 Pro Bounce 2019Low BATW男子场上篮球运动鞋EG1536",
//         "cateId": "54",
//         "price": "400.00",
//         "originPrice": "800.00",
//         "sales": "188",
//         "unitName": "件",
//         "stock": 1712,
//         "vipPrice": "400.00"
//       },
//       {
//         "id": 25,
//         "image": "http:\/\/demo26.crmeb.net\/uploads\/attach\/2020\/04\/24\/339348c07523de4186437baeb7564079.jpg",
//         "storeName": "蕲珍阁 艾灸贴三伏贴艾草贴热敷温灸贴李时珍蕲艾草精油理疗艾叶 5盒 蕲艾艾灸贴",
//         "cateId": "45",
//         "price": "12.00",
//         "originPrice": "21.00",
//         "sales": "2343",
//         "unitName": "件",
//         "sort": 22,
//         "activity": [],
//         "stock": 0,
//         "checkCoupon": false,
//         "vipPrice": "12.00"
//       },
//       {
//         "id": 10,
//         "image": "http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/7dddb34ddf748bf65427b44e8f9134c0.jpg",
//         "storeName": "指思指纹鼠标J1笔记本台式电脑办公游戏家用女生可爱",
//         "cateId": "38",
//         "price": "100.00",
//         "originPrice": "120.00",
//         "sales": "901",
//         "unitName": "件",
//         "sort": 0,
//         "activity": {
//           "type": "1",
//           "id": 11,
//           "time": 1601546400
//         },
//         "stock": 9975,
//         "checkCoupon": false,
//         "vipPrice": "100.00"
//       },
//       {
//         "id": 4,
//         "image": "http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/2a21667934bd7e26c7edd02687efdd34.jpg",
//         "storeName": "莱克吉米手持无线吸尘器除螨除尘组合家用大吸力静音",
//         "cateId": "12",
//         "price": "10.00",
//         "originPrice": "20.00",
//         "sales": "6176",
//         "unitName": "件",
//         "sort": 0,
//         "activity": [],
//         "stock": 9923,
//         "checkCoupon": false,
//         "vipPrice": "10.00"
//       }
//     ])
//   })

module.exports = {
  user,
  shop,
};
