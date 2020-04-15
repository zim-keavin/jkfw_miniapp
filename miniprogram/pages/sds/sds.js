// pages/sas/sas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answersList: [{
        title: "我觉得闷闷不乐，情绪低沉",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: " 我觉得一天之中早晨最好 ",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我一阵阵地哭出来或是想哭",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我晚上睡眠不好",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我吃得跟平常一样多",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我与异性密切接触时和以往一样感到愉快 ",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我发觉我的体重在下降	",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我有便秘的苦恼",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我心跳比平时快",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我无缘无故感到疲乏",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我的头脑和平时一样清楚",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我觉得经常做的事情并没有困难",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我觉得不安而平静不下来",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我对将来抱有希望 ",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我比平常容易生气激动",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我觉得做出决定是容易的",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我觉得自己是个有用的人，有人需要我",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我的生活过得很有意思",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "我认为如果我死了别人会生活得更好些",
        answerA: "没有或偶尔",
        valueA: 1,
        answerB: "有时",
        valueB: 2,
        answerC: "经常",
        valueC: 3,
        valueD: 4,
        result: 0,
        answerD: "总是如此"
      },
      {
        title: "平常感兴趣的事我仍然照样感兴趣	",
        answerA: "没有或偶尔",
        valueA: 4,
        answerB: "有时",
        valueB: 3,
        answerC: "经常",
        valueC: 2,
        valueD: 1,
        result: 0,
        answerD: "总是如此"
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

  submit() {
    let point = 0;
    let answer = this.data.answersList;
    for (let i = 0; i < 20; i++) {
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
      url: '../result/result?point=' + point + '&name=sds',
    })
  }
})