var utils = require('../..//utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'未登录',
    userAg0:'未设定',
    avatarUrl: "/images/my_light.png",
    loginstatus:'none',//登录态
    loginClose:'none',
    setverifysms:'发送验证码'
  },
  onLoad: function (options) {
    if (app.globalData.userInfo){
      this.setData({
        username: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        userAg0: '点击头像可登录/注册',
      })
    }
    wx.getStorage({
      key: 'userInfo',
      success: (res) =>{
        if(res.data){
          this.setData({
            username: res.data.realname,
            userAg0: (2018 - res.data.birthday.split('-')[0]) + (res.data.gender == 1 ? '岁-男-' : '岁-女-') + (2018 - res.data.workday.split('-')[0] + '年'),
          })
        }
      },
    })
  },
  setphone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  verifysms:function(){
    var data={
      phone:this.data.phone,

    }
    if (data.phone.length!=11)return 
    if (this.data.setverifysms =="重新发送"||this.data.setverifysms=='发送验证码'){
      utils.sendRrquest('sendsms', 1, data)
        .then((res) => {
          if (res.data.status === '200') {
            wx.showToast({
              title: '发送成功',
            })
            var timer = 60
            var timer = setInterval(() => {
              --timer
              this.setData({
                setverifysms: '重新发送(' + timer + ')'
              })
              if (timer == 0) {
                clearInterval(timer)
                this.setData({
                  setverifysms: '重新发送'
                })
              }
            }, 1000)
          } else {
            wx.showModal({
              title: '温馨提示',
              content: '发送验证码失败',
            })
          }
        })
    }

  },
  setname:function(e){
    this.setData({
      sendsms: e.detail.value
    })
  },
  savesendsms:function(){
    var data={
      code: this.data.sendsms,
      phone:this.data.phone
    }
    utils.sendRrquest('verifysms', 1, data)
    .then((res)=>{
      if(res.data.status==='200'){
        wx.showToast({
          title: '绑定成功',
          icon:'success'
        })
        wx.getStorage({
          key: 'userInfo',
          success: (res) => {
            var userInfo=res.data
            userInfo.phone=data.phone
            wx.setStorage({
              key: 'userInfo',
              data: userInfo,
            })
          }
          })
        this.setData({
          loginClose:'none'
        })
        wx.navigateTo({
          url: '/pages/jianli/jianli',
        })
      }else{
        wx.showModal({
          title: '温馨提示',
          content: '绑定失败',
        })
      }
    })
  },
  gotojianli:function(){
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        if(res.data.phone){
          wx.navigateTo({
            url: '/pages/jianli/jianli',
          })
        }else{
          //登录
          this.setData({
            loginClose: 'block'
          })
        }
      },
    })

  },
  loginClose:function(){
    this.setData({
      loginClose:'none'
    })
  },
  phonelogin:function(){
    wx.navigateTo({
      url: '/pages/phonelogin/phonelogin',
    })
  },
  wechatlogin:function(){
    //获取用户手机号

  },
  showModel:function(){
    wx.showModal({
      title: '温馨提示',
      content: '使用火娉企业版小程序，发布职位，招聘牛人',
      showCancel: false,
      confirmText: '知道啦',
    })
  }
})