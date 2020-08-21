const app = getApp();
const db = wx.cloud.database();
Page({

  data: {
    answersList: [{
      title: "颜色COL",
      answerA: "红色",
      valueA: 0,
      answerB: "深黄色",
      valueB: 1,
      answerC: "深绿色",
      valueC: 2,
      result: 0,
      unit: "淡黄色"
    },
    {
      title: " 透明度CLA",
      answerA: "微浑",
      valueA: 0,
      answerB: "明显浑浊",
      valueB: 1,
      result: 0,
      unit: "清晰透明"
    },
    {
      title: "酸碱度PH",
      answerA: "升高",
      valueA: 0,
      answerB: "降低",
      valueB: 1,
      result: 0,
      unit: "5.0~9.0"
    },
    {
      title: "葡萄糖GLU",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
    {
      title: "蛋白质PRO",
      answerA: "阴性",
      valueA: 0,
      answerB: "阳性",
      valueB: 1,
      result: 0,
      unit: "阴性（-）"
    },
      {
        title: "白细胞LEO",
        answerA: "阴性",
        valueA: 0,
        answerB: "阳性",
        valueB: 1,
        result: 0,
        unit: "阴性（-）"
      },
      {
        title: "酮体KET",
        answerA: "阴性",
        valueA: 0,
        answerB: "阳性",
        valueB: 1,
        result: 0,
        unit: "阴性（-）"
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

  /**
   * 计算表的值并更新到数据库中
   */
  submit() {
    let answer = this.data.answersList;
    wx.redirectTo({
      url: './result/result?col=' + answer[0].result + '&cla=' + answer[1].result + '&ph=' + answer[2].result + '&glu=' + answer[3].result + '&pro=' + answer[4].result + '&leo=' + answer[5].result + '&ket=' + answer[6].result,
    })
  }
})