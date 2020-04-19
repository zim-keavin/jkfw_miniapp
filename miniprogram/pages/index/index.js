//index.js
const app = getApp()

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
    }]

  },

  onLoad: function() {
   
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
   
  }
})