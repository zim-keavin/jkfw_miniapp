// pages/sas/sas.js
const app = getApp();
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    answersList: [{
        title: "即使在不熟悉的社交场合里我仍感到放松",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: " 我尽量避免迫使我参加交际应酬的情形",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我同陌生人在一起时很容易放松",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我并不特别想去回避人们",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我通常发现社交场合令人心烦意乱",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "在社交场合我通常感觉平静及舒适",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "在同异性交谈时，我通常感觉放松",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我尽量避免与人家讲话，除非特别熟",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "如果有同新人相会的机会，我会抓住的",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "在非正式的聚会上如有异性参加，我通常觉得焦虑和不安",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "我通常与人们在一起时感到焦虑，除非与他们特别熟",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "我与一群人在一起时通常感到放松",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我经常想离开人群",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "在置身于不认识的人群中时，我感到不自在",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "在初次遇见某些人时，我通常是放松的",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "被介绍给别人使我感到紧张和焦虑",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "尽管满房间都是生人，我可能还是会进去的",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我会避免走上前去加入到一大群人中间",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "当上司想同我谈话时，我很高兴与他谈话",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "当与一群人在一起时，我通常感觉忐忑不安",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "我喜欢躲开人群",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "在晚上或社交聚会上与人们交谈对我不成问题",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "在一大群人中间，我极少能感到自在",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "我经常想出一些借口以回避社交活动",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "我有时充当为人们相互介绍的角色",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我尽量避开正式的社交场合",
        answerA: "是",
        valueA: 1,
        answerB: "否",
        valueB: 0,
        result: 2,
      },
      {
        title: "我通常参加我所能参加的各种社会交往。不管是什么社交活动，我一般是能去就去",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
      },
      {
        title: "我发现同他人在一起时放松很容易",
        answerA: "是",
        valueA: 0,
        answerB: "否",
        valueB: 1,
        result: 2,
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
    for (let i = 0; i < 28; i++) {
      if (answer[i].result == 2) {
        wx.showToast({
          title: '第' + (i + 1) + '题还没有填写',
          icon: "none",
          duration: 800
        });
        return;
      }
      point += answer[i].result;
    }
    db.collection('user').where({
      _openid: app.globalData.openid
    }).update({
      data: {
        sad: point,
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    wx.navigateTo({
      url: '../result/result?point=' + point + '&name=sad',
    })
  }
})