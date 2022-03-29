module.exports = {
  // mysql 连接配置
  mysqlConf: {
    host: '121.36.199.250',
    user: 'root',
    password: '123',
    port: '3305',
    database: 'lego_course',
  },

  // mongodb 连接配置
  mongodbConf: {
    host: '121.36.199.250',
    port: '27016',
    dbName: 'newdatabase',
  },

  // redis 连接配置
  redisConf: {
    port: '6378',
    host: '121.36.199.250',
    // password: 'abc123',
  },

  // jwt 过期时间
  jwtExpiresIn: '1d', // 1. 字符串，如 '1h' '2d'； 2. 数字，单位是 s

  // cors origin
  corsOrigin: '*',

  // 短信验证码缓存时间，单位 s
  msgVeriCodeTimeout: 2 * 60,
}
