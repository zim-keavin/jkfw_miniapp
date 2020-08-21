const app = getApp();
const db = wx.cloud.database();
Page({

  data: {
    answersList: [{
      title: "便潜血FOBT",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
    {
      title: "白细胞WBC",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
    {
      title: "红细胞RBC",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
    {
      title: "虫卵Eggs",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
    {
      title: "脂肪滴Fatty oils",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      url: './result/result?fobt=' + answer[0].result + '&wbc=' + answer[1].result + '&rbc=' + answer[2].result + '&eggs=' + answer[3].result + '&fo=' + answer[4].result,
    })
  }
})