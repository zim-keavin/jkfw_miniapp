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

  /**
   * 用户点击注册后触发，如果同意则跳转到注册页面
   */
  bindGetUserInfo: function(e) {
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
        showCancel: false,
      })
    }
  },

  /**
   * 跳转页面
   */
  navigate(e) {
    if (app.globalData.isRegister) {
      const name = e.currentTarget.dataset.name;
      wx.navigateTo({
        url: '../' + name + '/' + name,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请先提交注册！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            wx.redirectTo({
              url: '../userInfo/userInfo',
            })
          }
        }
      })
    }
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