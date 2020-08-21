// pages/healthyFiles/healthyFiles.js
const db = wx.cloud.database();
const app = getApp();

Page({

  data: {
    picker: ['曾经罹患', '未曾罹患'],
    gxyFile: '',
    tnbFile: '',
    zfbsFile: '',
    gxbFile: '',
    gmsFile: '',
    allergy:['过敏性鼻炎','过敏性皮炎','过敏性结膜炎','药物性过敏']
  },

  /**
   * 对表单赋值
   */
  onLoad: function(options) {
    this.setData({
      gxyFile: app.globalData.userInfo.gxyFile,
      tnbFile: app.globalData.userInfo.tnbFile,
      zfbsFile: app.globalData.userInfo.zfbsFile,
      gxbFile: app.globalData.userInfo.gxbFile,
      gmsFile: app.globalData.userInfo.gmsFile
    })
  },

  /**
   * 选择时触发
   */
  PickerChange(e) {
    console.log(e.currentTarget.dataset.name);
    if (e.currentTarget.dataset.name == 'gxyFile') {
      this.setData({
        gxyFile: e.detail.value
      })
    } else if (e.currentTarget.dataset.name == 'tnbFile') {
      this.setData({
        tnbFile: e.detail.value
      })
    } else if (e.currentTarget.dataset.name == 'zfbsFile') {
      this.setData({
        zfbsFile: e.detail.value
      })
    } else if (e.currentTarget.dataset.name == 'gxbFile') {
      this.setData({
        gxbFile: e.detail.value
      })
    } else if (e.currentTarget.dataset.name == 'gmsFile') {
      this.setData({
        gmsFile: e.detail.value
      })
    }

  },

  /**
   * 提交表单
   */
  submitForm() {
    let _this = this;
    db.collection('user').where({
      _openid: app.globalData.openid
    }).update({
      data: {   //0代表患病，1代表未曾患病
        gxyFile: _this.data.gxyFile,
        tnbFile: _this.data.tnbFile,
        zfbsFile: _this.data.zfbsFile,
        gxbFile: _this.data.gxbFile,
        gmsFile: _this.data.gmsFile,
      },
      success: res => {
        app.loginConfirm(); //更新信息
        wx.showToast({
          duration: 1500,
          title: '提交成功',
          icon: 'success'
        });
        setTimeout(function() {
          wx.switchTab({
            url: '../index/index',
          })
        }, 1500)
      },
      fail: err => {
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  }
})