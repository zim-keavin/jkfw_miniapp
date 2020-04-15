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
    standard: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.name)
    if (options.name == "sas") {
      let point = options.point;
      point = point * 1.25;
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
      const standard = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;焦虑SAS评测评分标准：正向计分题A、B、C、D按1、2、3、4分计；反向计分题（题目题号：5、9、13、17、19）按4、3、2、1计分。总分乘以1.25取整数，即得标准分。低于50分者为正常；50-60分者为轻度焦虑；61-70分者为中度焦虑，70分以上者为重度焦虑。";
      this.setData({
        point: point,
        status: status,
        pointColor: pointColor,
        statusColor: statusColor,
        standard: standard,
      })
    }
    if (options.name == "sds") {
      let point = options.point;
      point = point * 1.25;
      let status = '';
      let pointColor = '';
      let statusColor = '';
      if (point <= 50) {
        status = "正常";
        pointColor = "text-olive";
        statusColor = "text-olive";
      } else if (point > 50 && point <= 60) {
        status = "轻度抑郁";
        pointColor = "text-yellow";
        statusColor = "text-yellow";
      } else if (point > 60 && point <= 70) {
        status = "中度抑郁";
        pointColor = "text-orange";
        statusColor = "text-orange";
      } else if (point > 70) {
        status = "重度抑郁";
        pointColor = "text-red";
        statusColor = "text-red";
      }
      const standard = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抑郁SDS评测评分标准：正向计分题A、B、C、D按1、2、3、4分计；反向计分题（题号：2、5、6、11、12、14、16、17、18、20）按4、3、2、1计分。总分乘以1.25取整数，即得标准分。低于50分者为正常；50-60分者为轻度抑郁；61-70分者为中度抑郁，70分以上者为重度抑郁。";
      this.setData({
        point: point,
        status: status,
        pointColor: pointColor,
        statusColor: statusColor,
        standard: standard,
      })
    }
    if (options.name == "sad") {
      let point = options.point;
      let status = '';
      let pointColor = '';
      let statusColor = '';
      if (point < 13) {
        status = "正常";
        pointColor = "text-olive";
        statusColor = "text-olive";
      } else if (point >= 13 && point < 18) {
        status = "请向专业人士咨询";
        pointColor = "text-yellow";
        statusColor = "text-yellow";
      } else if (point >= 18) {
        status = "请向专业人士寻求帮助";
        pointColor = "text-red";
        statusColor = "text-red";
      }
      const standard = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社交回避SAD评测评分标准：在2，5，8，10，11，13，14，16，18，20，21，23，24，26回答“是”得1分；而在1，3，4，6，7，9，12，15，17，19，22，25，27，28回答“否”得1分。1、分数低于7时，表示个体表现正常，没有这方面问题；2、分数高于等于7，但低于10时，则表示个体在这方面可能存在一定程度的问题，需要接受进一步的专业人员的检查。3、分数高于等于10时，则表示存在这方面的问题，需要接受专业的帮助。";
      this.setData({
        point: point,
        status: status,
        pointColor: pointColor,
        statusColor: statusColor,
        standard: standard,
      })
    }
    if (options.name == "ses") {
      let point = options.point;
      let status = '';
      let pointColor = '';
      let statusColor = '';
      if (point >= 10&&point<20) {
        status = "较低";
        pointColor = "text-yellow";
        statusColor = "text-yellow";
      } else if (point >= 20 && point < 30) {
        status = "较高";
        pointColor = "text-olive";
        statusColor = "text-olive";
      } else if (point >= 30) {
        status = "高";
        pointColor = "text-green";
        statusColor = "text-green";
      }
      const standard = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社交回避SAD评测评分标准：对于l，2，4，6，7题(正向记分题)，“很不符合”记1分、“不符合”记2分、“符合”记3分、“非常符合”记4分；对于3，5，8，9，10题(反向记分题)，“很不符合”记4分、“不符合”记3分、“符合”记2分、“非常符合”记1分。分值越高，自尊程度越高。";
      this.setData({
        point: point,
        status: status,
        pointColor: pointColor,
        statusColor: statusColor,
        standard: standard,
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