// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRegister: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      isRegister: app.globalData.isRegister
    })
    console.log(this.data.isRegister)
  },

  bindGetUserInfo: function (e) {
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      app.globalData.avatarUrl = e.detail.userInfo.avatarUrl;
      wx.redirectTo({
        url: '../userInfo/userInfo',
      })
    } else {
      wx.showModal({
        title: '授权失败',
        content: '您拒绝了授权登录',
      })
    }
  },

  /**
   * 跳转页面
   */
  navigate(e) {
    const name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../' + name + '/' + name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

})