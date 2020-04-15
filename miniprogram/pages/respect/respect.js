// pages/sas/sas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answersList: [{
      title: "我感到我是一个有价值的人，至少与其他人在同一水平上。",
      answerA: "非常符合",
      valueA: 4,
      answerB: "符合",
      valueB: 3,
      answerC: "不符合",
      valueC: 2,
      valueD: 1,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: " 我感到我有许多好的品质。",
      answerA: "非常符合",
      valueA: 4,
      answerB: "符合",
      valueB: 3,
      answerC: "不符合",
      valueC: 2,
      valueD: 1,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "归根结底，我倾向于觉得自己是一个失败者。",
      answerA: "非常符合",
      valueA: 1,
      answerB: "符合",
      valueB: 2,
      answerC: "不符合",
      valueC: 3,
      valueD: 4,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "我能像大多数人一样把事情做好。",
      answerA: "非常符合",
      valueA: 4,
      answerB: "符合",
      valueB: 3,
      answerC: "不符合",
      valueC: 2,
      valueD: 1,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "我感到自己值得自豪的地方不多。",
      answerA: "非常符合",
      valueA: 1,
      answerB: "符合",
      valueB: 2,
      answerC: "不符合",
      valueC: 3,
      valueD: 4,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "我对自己持肯定态度。",
      answerA: "非常符合",
      valueA: 4,
      answerB: "符合",
      valueB: 3,
      answerC: "不符合",
      valueC: 2,
      valueD: 1,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "总的来说，我对自己是满意的。",
      answerA: "非常符合",
      valueA: 4,
      answerB: "符合",
      valueB: 3,
      answerC: "不符合",
      valueC: 2,
      valueD: 1,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "我希望我能为自己赢得更多尊重。",
      answerA: "非常符合",
      valueA: 1,
      answerB: "符合",
      valueB: 2,
      answerC: "不符合",
      valueC: 3,
      valueD: 4,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "我确实时常感到自己毫无用处。",
      answerA: "非常符合",
      valueA: 1,
      answerB: "符合",
      valueB: 2,
      answerC: "不符合",
      valueC: 3,
      valueD: 4,
      result: 0,
      answerD: "很不符合"
    },
    {
      title: "我时常认为自己一无是处。",
      answerA: "非常符合",
      valueA: 1,
      answerB: "符合",
      valueB: 2,
      answerC: "不符合",
      valueC: 3,
      valueD: 4,
      result: 0,
      answerD: "很不符合"
    }
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

  submit() {
    let point = 0;
    let answer = this.data.answersList;
    for (let i = 0; i < 10; i++) {
      if (answer[i].result == 0) {
        wx.showToast({
          title: '第' + (i + 1) + '题还没有填写',
          icon: "none",
          duration: 800
        });
        return;
      }
      
      point += answer[i].result;
    }
    wx.navigateTo({
      url: '../result/result?point=' + point + '&name=ses',
    })
  }
})