const OSS = require('ali-oss');

const client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: process.env.ak,
  accessKeySecret: process.env.sk,
  bucket: 'zw-image-temp'
});
client.put('index.txt', Buffer.from("hello world")).then((result) => {
  console.log('objects: %j', result);
  client.get('index.txt')
  .then(resp => {
    console.log('res', resp.content.toString());
  })
})
module.exports = client;
