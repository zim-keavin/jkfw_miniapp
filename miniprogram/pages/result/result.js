// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    point: '',
    status: '',
    pointColor: '',
    statusColor: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.name)
    if (options.name == "sas") {
      let point = options.point;
      console.log(point)
      point = point * 1.25;
      console.log(point)
      let status = '';
      let pointColor = '';
      let statusColor = '';
      if (point <= 50) {
        status = "正常";
        pointColor = "text-olive";
        statusColor = "text-olive";
      } else if (point > 50 && point <= 60) {
        status = "轻度焦虑";
        pointColor = "text-yellow";
        statusColor = "text-yellow";
      } else if (point > 60 && point <= 70) {
        status = "中度焦虑";
        pointColor = "text-orange";
        statusColor = "text-orange";
      } else if (point > 70) {
        status = "重度焦虑";
        pointColor = "text-red";
        statusColor = "text-red";
      }
      this.setData({
        point: point,
        status: status,
        pointColor: pointColor,
        statusColor: statusColor
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})