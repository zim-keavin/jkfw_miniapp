// pages/articleList/articleList.js
const app = getApp();
Page({

  /**
   * 页面数据源
   */
  data: {
    iconStyle: [{
        "type": "高血压",
        "src": "../../images/gxy.png",
        value: "gxy"
      },
      {
        "type": "糖尿病",
        "src": "../../images/tnb.png",
        value: "tnb"
      },
      {
        "type": "冠心病",
        "src": "../../images/gxb.png",
        value: "gxb"
      },
      {
        "type": "脑卒中",
        "src": "../../images/ncz.png",
        value: "ncz"
      },
      {
        "type": "失眠",
        "src": "../../images/sm.png",
        value: "sm"
      },
      {
        "type": "慢性阻塞性疾病",
        "src": "../../images/mxzsxfjb.png"
      },
      {
        "type": "高尿酸血症",
        "src": "../../images/gnsxz.png"
      },
      {
        "type": "恶性肿瘤",
        "src": "../../images/exzl.png"
      },
      {
        "type": "骨质疏松症",
        "src": "../../images/gzssz.png"
      },
      {
        "type": "慢性胃炎",
        "src": "../../images/mxwy.png"
      },
    ]
  },

  /**
   * 跳转页面   只显示5个病例
   */
  navigate(e) {
    const iconStyle = this.data.iconStyle;
    let id = e.currentTarget.id;
    if (iconStyle[id].type == "高血压" || iconStyle[id].type == "糖尿病" || iconStyle[id].type == "冠心病" || iconStyle[id].type == "脑卒中" || iconStyle[id].type == "失眠") {
      wx.navigateTo({ //传参，page表示点击了哪个页面，如糖尿病=tnb
        url: '../articleList/articleList?page=' + iconStyle[id].value
      })
    } else {
      wx.showToast({
        duration: 1500,
        title: '内容待填充中...',
        icon: 'none'
      });
    }
  }
})