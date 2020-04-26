const app = getApp();
const db = wx.cloud.database();
Page({

  data: {
    answersList: [{
      title: "凝血酶时间TT",
      answerA: "延长",
      valueA: 0,
      answerB: "缩短",
      valueB: 1,
      result: 0,
    },
    {
      title: "凝血酶原时间PT",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
    },
    {
      title: "活化部分凝血活酶时间APTT",
      answerA: "延长",
      valueA: 0,
      answerB: "缩短",
      valueB: 1,
      result: 0,
    },
    {
      title: "血浆纤维蛋白原FIB",
      answerA: "延长",
      valueA: 0,
      answerB: "缩短",
      valueB: 1,
      result: 0,
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
   * 计算表的值并更新到数据库中
   */
  submit() {
    let answer = this.data.answersList;
    wx.redirectTo({
      url: './result/result?tt=' + answer[0].result + '&pt=' + answer[1].result + '&aptt=' + answer[2].result + '&fib=' + answer[3].result,
    })
  }
})