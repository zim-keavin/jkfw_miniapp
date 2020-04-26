const db = wx.cloud.database();
Page({


  data: {
    id: '',
  },

  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options
    })
    let _this = this;

    db.collection("report").where({
      name: "肝功能"
    }).get({
      success: function (res) {
        console.log(res.data)
        _this.setData({
          list: res.data[0],
        })
      }
    })
  },


})