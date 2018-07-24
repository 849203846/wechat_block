function ajax (path,data){
  return new Promise(function(resove,rej){
    wx.request({
      url: 'path', //仅为示例，并非真实的接口地址
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        resove(res)
      }
    })
  })
 
}

module.exports = {
  ajax
}
