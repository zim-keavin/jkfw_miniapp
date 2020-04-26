// pages/count/count.js
const app = getApp();
import * as echarts from '../../components/ec-canvas/echarts';

/**
 * 使用了echart插件小程序版
 */
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series: [{
      name: 'BMI',
      type: 'gauge', //图标类型：仪表盘
      data: [{
        value: app.globalData.bmi,
        name: 'BMI'
      }],
      radius: "100%",
      center: ["50%", "50%"],
      min: 15, //最小值
      max: 35, //最大值
      splitNumber: 5, //分割数量
      startAngle: 180, //起始角度
      endAngle: 0, //结束角度
      axisLabel: {
        show: false, //刻度值
      },
      splitLine: {
        show: false //大刻度线
      },
      axisTick: {
        show: false //小刻度线
      },
      detail: { //显示指向的值
        show: false,
        formatter: '{value}',
        offsetCenter: ['0', '-60%'],
        textStyle: {
          fontSize: 20
        }
      },
      axisLine: { // 坐标轴线
        lineStyle: { // 属性lineStyle控制线条样式
          color: [ //刻度颜色
            [0.175, '#FF4500'],
            [0.445, '#32CD32'],
            [0.595, '#FFD700'],
            [0.795, '#FF7F50'],
            [1, '#FF0000']
          ],
        }
      },
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bmi: 0,
    bmiColor: '',
    status: '',
    sas: '',
    sds: '',
    sad: '',
    ses: '',
    sasColor: '',
    sdsColor: '',
    sadColor: '',
    sesColor: '',
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (!app.globalData.isRegister) { //判断有没登录
      wx.showModal({
        title: '提示',
        content: '请先提交注册！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            wx.redirectTo({
              url: '../userInfo/userInfo',
            })
          }
        }
      })
      return;
    }
    let bmi = app.globalData.bmi;
    let bmiColor = '';
    let status = '';
    if (bmi < 18.5) { //判断bmi，并赋予相应颜色和状态
      bmiColor = "#FF4500";
      status = "过轻"
    } else if (bmi >= 18.5 && bmi < 24) {
      bmiColor = "#32CD32";
      status = "正常"
    } else if (bmi >= 24 && bmi <= 27) {
      bmiColor = "#FFD700";
      status = "过重"
    } else if (bmi >= 28 && bmi < 32) {
      bmiColor = "#FF7F50";
      status = "肥胖"
    } else if (bmi >= 32) {
      bmiColor = "#FF0000";
      status = "非常肥胖"
    }
    this.setData({
      bmi: app.globalData.bmi,
      bmiColor: bmiColor,
      status: status,
    })
    this.getPoint();
  },

  /**
   * 获取填写的评测的分数
   */
  getPoint() {
    let sas = app.globalData.userInfo.sas;
    let sds = app.globalData.userInfo.sds;
    let sad = app.globalData.userInfo.sad;
    let ses = app.globalData.userInfo.ses;
    let sasColor = "";
    let sdsColor = "";
    let sadColor = "";
    let sesColor = "";
    if (sas <= 50) {
      sasColor = "text-olive";
    } else if (sas > 50 && sas <= 60) {
      sasColor = "text-yellow";
    } else if (sas > 60 && sas <= 70) {
      sasColor = "text-orange";
    } else if (sas > 70) {
      sasColor = "text-red";
    }
    if (sds <= 50) {
      sdsColor = "text-olive";
    } else if (sds > 50 && sds <= 60) {
      sdsColor = "text-yellow";
    } else if (sds > 60 && sds <= 70) {
      sdsColor = "text-orange";
    } else if (sds > 70) {
      sdsColor = "text-red";
    }
    if (sad < 13) {
      sadColor = "text-olive";
    } else if (sad >= 13 && sad < 18) {
      sadColor = "text-yellow";
    } else if (sad >= 18) {
      sadColor = "text-red";
    }
    if (ses >= 0 && ses < 20) {
      sesColor = "text-yellow";
    } else if (ses >= 20 && ses < 30) {
      sesColor = "text-olive";
    } else if (ses >= 30) {
      sesColor = "text-green";
    }
    this.setData({
      sas: sas,
      sds: sds,
      sad: sad,
      ses: ses,
      sasColor: sasColor,
      sdsColor: sdsColor,
      sadColor: sadColor,
      sesColor: sesColor,
    })
  },

  //下拉刷新
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var _this = this
    setTimeout(function() { //模拟网络加载，强化体验
      _this.getPoint() //刷新评测得分
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000)
  },
})