//app.js
var utils=require('/utils/util.js')
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        wx.getUserInfo({
          success:  (res2) => {
            var data = {
              encryptedData: res2.encryptedData,
              iv: res2.iv,
              code: res.code,
              signature:res.signature
            }
            utils.sendRrquest('getuser', 1, data)
            .then((res) => {
              if(res.data.status==='200'){
                wx.setStorageSync('userInfo', res.data.data)
                app.globalData.userInfo=res.data.data
              }else{
                wx.showModal({
                  title: '温馨提示',
                  content: '获取用户信息失败，请重新打开小程序',
                })
              }
            })

          },
          fail:function(e){
            console.log(e)
          }
        })
      }
    })
  },
  globalData: {
    url:'https://recruit.zhangchaoqun.cn/api/',
    userInfo: null
  }
})