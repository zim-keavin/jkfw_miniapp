// pages/healthyList/healthyList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      title: "焦虑自评表(SAS)",
      src: "../../images/5.jpg",
      name: "sas",
      num: 21
    }, {
      title: "抑郁程度评估(SDS)",
      src: "../../images/6.jpg",
      name: "sds",
      num: 11
    }, {
      title: "社交回避评测(SAD)",
      src: "../../images/7.jpg",
      name: "sad",
      num: 7
    }, {
      title: "自尊量评测(SES)",
      src: "../../images/8.jpg",
      name: "ses",
      num: 18
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  navigate(e) {
    const name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../' + name + '/' + name,
    })
  }
})