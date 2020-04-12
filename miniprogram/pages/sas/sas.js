// pages/sas/sas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answerslist: [{
      title: "我觉得比平时容易紧张和着急（焦虑）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: " 我无缘无故地感到害怕（害怕）",
      answerA: "没有或偶尔", valueA: "",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我容易心里烦乱或觉得惊恐（惊恐）",
      answerA: "没有或偶尔", valueA: "",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我觉得我可能将要发疯 （发疯感）",
      answerA: "没有或偶尔", valueA: "",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我觉得一切都很好，也不会发生什么不幸（不幸预感）",
      answerA: "没有或偶尔", valueA: "4",
      answerB: "有时", valueB: "3",
      answerC: "经常", valueC: "2", valueD: "1",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我手脚发抖打颤（手足颤抖）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我因为头痛、颈痛和背痛而苦恼（躯体疼痛）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我感觉容易衰弱和疲乏 （乏力）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我觉得心平气和，并且容易安静坐着 （静坐不能）",
      answerA: "没有或偶尔", valueA: "4",
      answerB: "有时", valueB: "3",
      answerC: "经常", valueC: "2", valueD: "1",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我觉得心跳得快（心悸）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我因为一阵阵头晕而苦恼（头昏）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我有过晕倒发作，或觉得要晕倒似的（晕厥感）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我呼气吸气都感到很容易（呼吸困难）",
      answerA: "没有或偶尔", valueA: "4",
      answerB: "有时", valueB: "3",
      answerC: "经常", valueC: "2", valueD: "1",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我手脚麻木和刺痛（手足刺痛） ",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我因胃痛和消化不良而苦恼（胃痛或消化不良）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我常常要小便（尿意频数）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我的手常常是干燥温暖的（多汗）",
      answerA: "没有或偶尔", valueA: "4",
      answerB: "有时", valueB: "3",
      answerC: "经常", valueC: "2", valueD: "1",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我脸红发热 （面部潮红）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我容易入睡并且一夜睡得很好（睡眠障碍）",
      answerA: "没有或偶尔", valueA: "4",
      answerB: "有时", valueB: "3",
      answerC: "经常", valueC: "2", valueD: "1",
      result: "0", answerD: "总是如此"
    },
    {
      title: "我做恶梦（恶梦）",
      answerA: "没有或偶尔", valueA: "1",
      answerB: "有时", valueB: "2",
      answerC: "经常", valueC: "3", valueD: "4",
      result: "0", answerD: "总是如此"
    }]
    ,  //添加选项,
    title: "",
    isMust: 1,
    "type": 1,
    index: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})