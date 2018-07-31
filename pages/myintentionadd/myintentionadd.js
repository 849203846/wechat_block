// pages/myintentionadd/myintentionadd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArrayBegin: [
      ['2018年', '2017年', '2016年', '2015年', '2014年', '2013年', '2012年', '2011年', '2010年', '2009年', '2008年', '2007年', '2006年', '2005年', '2004年', '2003年', '2002年', '2001年', '2000年', '1999年', '1998年', '1997年', '1996年', '1995年', '1994年', '1993年', '1992年', '1991年', '1990年', '1990年以前'],
      ['12月', '11月', '10月', '9月', '8月', '7月', '6月', '5月', '4月', '3月', '2月', '1月',]
      ],


  multiArrayOver: [
      ['至今', '2018年', '2017年', '2016年', '2015年', '2014年', '2013年', '2012年', '2011年', '2010年', '2009年', '2008年', '2007年', '2006年', '2005年', '2004年', '2003年', '2002年', '2001年', '2000年', '1999年', '1998年', '1997年', '1996年', '1995年', '1994年', '1993年', '1992年', '1991年', '1990年', '1990年以前'],
      ['至今', '12月', '11月', '10月', '9月', '8月', '7月', '6月', '5月', '4月', '3月', '2月', '1月',]],
    tankuangstatus:'none',
  },


  close: function() {
  this.setData({
    tankuangstatus: 'none'
  })
},
opensetname: function() {
  this.setData({
    tankuangstatus: 'block'
  })
},

  setname: function (e) {
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  setnames: function () {
    this.setData({
      real_name: this.data.name
    })
    this.close()
  },

  opensetname: function () {
    this.setData({
      tankuangstatus: 'block',
      tankuangname: '公司名称',
      name: this.data.realname
    })
  },
  posName: function () {
    this.setData({
      tankuangstatus: 'blcok',
      tankuangname: '职位名称',
      name: this.data.posName
    })
  },
  setname: function (e) {
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  setnames: function () {
    if (this.data.tankuangname === '姓名') {
      this.setData({
        realname: this.data.name
      })
    } else {
      this.setData({
        wechartel: this.data.name
      })
    }
    this.close()
  },

})