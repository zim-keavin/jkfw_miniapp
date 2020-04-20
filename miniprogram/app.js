//app.js
App({
  onLaunch: function() {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }


    this.globalData = {} //小程序全局变量

    // 查询是否已授权获取头像、姓名一类信息，如有则获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           this.setData({
    //             avatarUrl: res.userInfo.avatarUrl,
    //             userInfo: res.userInfo
    //           })
    //         },
    //       })
    //     }
    //   }
    // })

    /**
     * 获取用户的openid
     */
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        this.globalData.openid = res.result.openid
        this.loginConfirm()
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

  /**
   * 查询用户是否注册了,有则返回用户注册信息
   */
  loginConfirm: function() {
    const db = wx.cloud.database()
    db.collection('user').where({
      _openid: this.globalData.openid
    }).get({
      success: res => {
        if (res.data.length != 0) {
          console.log('[数据库] [查询user表] 用户已认证: ', res);
          this.globalData.isRegister = true;
          this.globalData.userInfo = res.data[0];
          this.globalData.bmi = Math.trunc(res.data[0].weight / Math.pow(res.data[0].height / 100, 2));
        } else {
          console.log('[数据库] [查询user表] 用户未注册')
          this.globalData.isRegister = false;
          wx.showModal({
            title: '提示',
            content: '请先提交注册！',
            showCancel:false,
            success(res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '../userInfo/userInfo',
                })
              }
            }
          })
        }
      },
      fail: err => {
        console.error('[数据库] [查询user表] 失败：', err)
      }
    })
  },
})