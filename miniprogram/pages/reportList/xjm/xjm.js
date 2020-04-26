const app = getApp();
const db = wx.cloud.database();
Page({

  data: {
    answersList: [{
      title: "天门冬氨酸氨基转移酶AST",
      answerA: "降低",
      valueA: 0,
      answerB: "升高",
      valueB: 1,
      result: 0,
      unit: "8~40U/L"
    },
    {
      title: "肌酸激酶CK",
      answerA: "降低",
      valueA: 0,
      answerB: "升高",
      valueB: 1,
      result: 0,
      unit: "50~310U/L"
    },
    {
      title: "肌酸激酶同工酶CK-MB",
      answerA: "降低",
      valueA: 0,
      answerB: "升高",
      valueB: 1,
      result: 0,
      unit: "<3.61ng/ml"
    },
    {
      title: "乳酸脱氢酶LDH ",
      answerA: "降低",
      valueA: 0,
      answerB: "升高",
      valueB: 1,
      result: 0,
      unit: "120~250U/L"
    },
    {
      title: "a-羟丁酸脱氢酶a-HBDH",
      answerA: "降低",
      valueA: 0,
      answerB: "升高",
      valueB: 1,
      result: 0,
      unit: " 72~182U/L"
    },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 跳转页面并传值
   */
  selectAnswer(e) {
    let index = e.currentTarget.id;
    this.data.answersList[index].result = Number(e.detail.value);
  },

  /**
   * 跳转页面并传值
   */
  submit() {
    let answer = this.data.answersList;
    wx.redirectTo({
      url: './result/result?ast=' + answer[0].result + '&ck=' + answer[1].result + '&ckmb=' + answer[2].result + '&ldh=' + answer[3].result + '&hbdh=' + answer[4].result,
    })
  }
})