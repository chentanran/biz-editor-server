const { post } = require('./_server')

test('登录验证码', async () => {
  const { data, error } = await post('/api/users/genVeriCode', {
    phoneNumber: '13131313131',
    isRemoteTest: true,
  })

  console.log(data, 'data')

  expect(error).toBe(0)

  expect(data.code).not.toBeNull()
})
