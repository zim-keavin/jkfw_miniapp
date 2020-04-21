//index.js
const app = getApp()
const db = wx.cloud.database();

Page({
  data: {
    imgUrls: [
      '/images/3.jpg',
      '/images/2.jpg',
      '/images/1.jpg',
    ],
    article: [{
      title: "这里是标题",
      content: "这里是副标题",
      photo:"../../images/1.jpg"
    }],
     list: '',  //科普文章数组
  },

  onLoad: function() {
    let _this = this;
    db.collection("gxy").get({
      success: function (res) {
        console.log(res.data)
        _this.setData({
          list: res.data,
        })
      }
    })
  },
  
  /**
   * 跳转页面
   */
  navigate(e){
    const name = e.currentTarget.dataset.name;
    if (app.globalData.isRegister){
      wx.navigateTo({
        url: '../' + name + '/' + name,
      })
    } 
    else{
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

  navigateArticle(e) {
    let index = e.currentTarget.id;
    let id = this.data.list[index]._id;
    console.log(this.data.list[index]._id);
    const page = "gxy";
    wx.navigateTo({    //传参，点了哪个页面以及云数据库的_id标识，用于定位
      url: '../article/article?page=' + page + '&id=' + id
    })
  }
})