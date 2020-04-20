// pages/article/article.js
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this;
    db.collection(options.page).doc(options.id).get({
      success: function (res) {
        _this.setData({
          list: res.data,
        })
      }
    })
  },

 
})