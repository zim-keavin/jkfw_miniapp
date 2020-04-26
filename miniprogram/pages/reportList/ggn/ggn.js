const app = getApp();
const db = wx.cloud.database();
Page({

  data: {
    answersList: [{
        title: "丙氨酸氨基转移酶ALT",
        answerA: "降低",
        valueA: 0,
        answerB: "升高",
        valueB: 1,
        result: 0,
        unit: "5~40U/L"
      },
      {
        title: "天门冬氨酸氨基转移酶AST",
        answerA: "降低",
        valueA: 0,
        answerB: "升高",
        valueB: 1,
        result: 0,
        unit: "8~40U/L"
      },
      {
        title: "y-谷氨酰基转移酶GGT",
        answerA: "降低",
        valueA: 0,
        answerB: "升高",
        valueB: 1,
        result: 0,
        unit: "10~60U/L"
      },
      {
        title: "直接胆红素Dbil",
        answerA: "降低",
        valueA: 0,
        answerB: "升高",
        valueB: 1,
        result: 0,
        unit: "0~6.8μmol/L"
      },
      {
        title: "间接胆红素IDBil",
        answerA: "降低",
        valueA: 0,
        answerB: "升高",
        valueB: 1,
        result: 0,
        unit: "1.7~10.2μmol/L"
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 选择选项后将选中的值赋予answerList对象内
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
      url: './result/result?alt=' + answer[0].result + '&ast=' + answer[1].result + '&ggt=' + answer[2].result + '&dbil=' + answer[3].result + '&idbil=' + answer[4].result,
    })
  }
})