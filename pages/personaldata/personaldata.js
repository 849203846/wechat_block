// pages/personaldata/personaldata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Sex:'',
    selectorArray: ['1995', '1996', '1997', '1998', '1999'],
    DateOfNirth:[],
    multiArray: [ ['1995', '1996', '1997', '1998', '1999'], ['1', '2']],
    DateOfNirths: [],
    multiArrays: [['1995', '1996', '1997', '1998', '1999'], ['1', '2']],
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      DateOfNirth: e.detail.value
    })
  },
  bindMultiPickerChanges: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      DateOfNirths: e.detail.value
    })
  },
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Sex: e.detail.value
    })
  }
})