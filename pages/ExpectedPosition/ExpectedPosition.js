var utils = require('../..//utils/util.js')
var app = getApp()
Page({
  data: {
    jobsOne:[],
    rightbox:'none',
    rightboxtwo:'none'
  },

  onShow: function () {
    var data={
      level:0,
      // level: 1,
      id:''
    }
    utils.sendRrquest('getjobs', 1, data)
    .then((res)=>{
        console.log(res.data.data)
        this.setData({
          jobsOne:res.data.data
        })
    })
  },
  click:function(e){
    console.log(e)
    var id = e.target.dataset.id
    var data = {
      level: 1,
      fid: id
    }
    utils.sendRrquest('getjobs', 1, data)
      .then((res) => {
        console.log(res)
        if(res.data.status==='200'){
          console.log(res.data.data)
          this.setData({
            rightbox:'block',
            jobstwo: res.data.data
          })
        }else{
          wx.showModal({
            title: '温馨提示',
            content: '获取失败',
          })
        }
       
      })

  },
  getrightbox:function(e){
    var id=e.target.dataset.id
    console.log(id)
    var data={
      level: 2, fid: id
    }

    utils.sendRrquest('getjobs', 1, data)
      .then((res) => {
        console.log(res)
        if (res.data.status === '200') {
          console.log(res.data.data)
          this.setData({
            rightboxtwo: 'block',
            jobsthree: res.data.data
          })
        } else {
          wx.showModal({
            title: '温馨提示',
            content: '获取失败',
          })
        }

      })
  },
  back:function(e){
    var fid = e.target.dataset.id
    console.log(fid)
    app.globalData.fid=fid
    app.globalData.fidname = e.target.dataset.fidname
    wx.navigateBack({
      delta: 1
    })
  },
  scroll:function(e){
    console.log(e)
  }
})