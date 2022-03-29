const router = require('koa-router')()
const { SuccessRes } = require('../res-model/index')

// 中间件
const loginCheck = require('../middlewares/loginCheck')
const genValidator = require('../middlewares/genValidator')
const {
  phoneNumberSchema,
  phoneNumberVeriCodeSchema,
  userInfoSchema,
} = require('../validator/users')

// controller
const sendVeriCode = require('../controller/users/sendVeriCode')
const loginByPhoneNumber = require('../controller/users/loginByPhoneNumber')

router.prefix('/api/users')

// 生成短信验证码
router.post('/genVeriCode', genValidator(phoneNumberSchema), async ctx => {
  const { phoneNumber, isRemoteTest } = ctx.request.body
  // 尝试发送验证码
  const res = await sendVeriCode(phoneNumber, isRemoteTest)

  ctx.body = res
})

// 手机号登录
router.post('/loginByPhoneNumber', genValidator(phoneNumberVeriCodeSchema), async ctx => {
  const { phoneNumber, veriCode } = ctx.request.body
  const res = await loginByPhoneNumber(phoneNumber, veriCode)
  ctx.body = res
})

module.exports = router
