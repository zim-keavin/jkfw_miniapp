const app = getApp();
const db = wx.cloud.database();
Page({

  data: {
    answersList: [{
        title: "白细胞计数WBC",
        answerA: "升高",
        valueA: 0,
        answerB: "降低",
        valueB: 1,
        result: 0,
        unit: "(3.5~9.5) x109/L"
      },
      {
        title: " 红细胞计数RBC",
        answerA: "升高",
        valueA: 0,
        answerB: "降低",
        valueB: 1,
        result: 0,
        unit: "(4.3~5.8) X1012/L"
      },
      {
        title: "血红蛋白浓度HB",
        answerA: "升高",
        valueA: 0,
        answerB: "降低",
        valueB: 1,
        result: 0,
        unit: "(130~175) g/L"
      },
      {
        title: "红细胞比容HCT",
        answerA: "升高",
        valueA: 0,
        answerB: "降低",
        valueB: 1,
        result: 0,
        unit: "0.40~0.50"
      },
      {
        title: "平均红细胞体积MCV ",
        answerA: "升高",
        valueA: 0,
        answerB: "降低",
        valueB: 1,
        result: 0,
        unit: "(82~100) fL"
      }
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
      url: './result/result?wbc=' + answer[0].result + '&rbc=' + answer[1].result + '&hb=' + answer[2].result + '&hct=' + answer[3].result + '&mcv=' + answer[4].result,
    })
  }
})