const app = getApp();
Page({

  /**
   * 页面数据源
   */
  data: {
    iconStyle: [{
        "type": "血常规",
        "src": "../../images/9.png",
        url: "./xcg/xcg",
      },
      {
        "type": "尿常规",
        "src": "../../images/10.png",
        url: "./ncg/ncg",
      },
      {
        "type": "便常规",
        "src": "../../images/11.png",
        url: "./bcg/bcg",
      },
      {
        "type": "凝血",
        "src": "../../images/12.png",
        url: "./nx/nx",
      },
      {
        "type": "血脂",
        "src": "../../images/13.png",
        url: "",
      },
      {
        "type": "肝功能",
        "src": "../../images/14.png",
        url: "./ggn/ggn",
      },
      {
        "type": "肾功能",
        "src": "../../images/15.png",
        url: "",
      },
      {
        "type": "心肌酶",
        "src": "../../images/16.png",
        url: "./xjm/xjm",
      },
      {
        "type": "电解质",
        "src": "../../images/17.png",
        url: "",
      },
      {
        "type": "糖代谢",
        "src": "../../images/18.png",
        url: "",
      },
      {
        "type": "性激素六项",
        "src": "../../images/19.png",
        url: "",
      }
    ]
  },

  /**
   * 跳转页面   只显示5个病例
   */
  navigate(e) {
    const iconStyle = this.data.iconStyle;
    let id = e.currentTarget.id;
    wx.navigateTo({ //传参，page表示点击了哪个页面，如糖尿病=tnb
      url: iconStyle[id].url
    })
  }
})