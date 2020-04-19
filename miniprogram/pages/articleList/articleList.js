// pages/articleList/articleList.js
const app = getApp();
Page({

  /**
  * 页面数据源
  */
  data: {
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconStyle: [
      {
        "type": "高血压",
        "url": "../../images/gxy.png"
      },
      {
        "type": "糖尿病",
        "url": "../../images/tnb.png"
      },
      {
        "type": "冠心病",
        "url": "../../images/gxb.png"
      },
      {
        "type": "脑卒中",
        "url": "../../images/ncz.png"
      },
      {
        "type": "失眠",
        "url": "../../images/sm.png"
      },
      {
        "type": "慢性阻塞性疾病",
        "url": "../../images/mxzsxfjb.png"
      },
      {
        "type": "高尿酸血症",
        "url": "../../images/gnsxz.png"
      },
      {
        "type": "恶性肿瘤",
        "url": "../../images/exzl.png"
      },
      {
        "type": "骨质疏松症",
        "url": "../../images/gzssz.png"
      },
      {
        "type": "慢性胃炎",
        "url": "../../images/mxwy.png"
      },
    ]
  }
})