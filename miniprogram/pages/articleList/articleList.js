// pages/article/article.js
const db = wx.cloud.database();

Page({

  data: {
    list: '',
    page: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this;
    db.collection(options.page).get({
      success: function(res) {
        _this.setData({
          list: res.data,
          page: options.page
        })
      }
    })
  },

/**
 * 跳转页面，传参
 */
  navigate(e) {
    let index = e.currentTarget.id;
    let id = this.data.list[index]._id;
    let page = this.data.page;
    wx.navigateTo({    //传参，点了哪个页面以及云数据库的_id标识，用于定位
      url: '../article/article?page=' + page+'&id='+id
    })
  }


})