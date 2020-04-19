// pages/userInfo/userInfo.js
const db = wx.cloud.database();
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: "",
    height: "",
    phone: "",
    sex: true,
    weight: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let sex = ""
    if (app.globalData.isRegister){  //判断是否已注册，已注册再执行
      if (app.globalData.userInfo.sex == "男") {
        sex = true;
      } else {
        sex = false;
      }
      this.setData({
        age: app.globalData.userInfo.age,
        weight: app.globalData.userInfo.weight,
        phone: app.globalData.userInfo.phone,
        height: app.globalData.userInfo.height,
        sex: sex
      })
    }
  },

  //提交个人信息前检查表单是否填写正确
  checkInfo(e) {
    let sex = e.detail.value.sex;
    let height = e.detail.value.height;
    let age = e.detail.value.age;
    let weight = e.detail.value.weight;
    let phone = e.detail.value.phone;
    const mobile = /^[1][3,4,5,7,8][0-9]{9}$/; //验证手机号码
    const isMobile = mobile.exec(phone);
    if (e.detail.value.sex) {
      sex = "男";
    } else {
      sex = "女";
    }
    if (height == '' || age == '' || weight == '' || phone == '') {
      wx.showToast({
        title: '请填写完整个人信息',
        icon: 'none',
        duration: 1500
      })
    } else if (height > 220 || height < 50 || age > 100 || age < 0 || weight > 150 || weight < 20) {
      console.log(height > 220 || height < 50)
      console.log(age > 100 || age < 0)
      console.log(height > 150 || height < 20)
      wx.showToast({
        title: '请把数值填写在合理范围内',
        icon: 'none',
        duration: 1500
      })
    } else if (!isMobile) {
      wx.showToast({
        title: '手机号码格式有误！',
        icon: 'none',
        duration: 1500
      })
    } else
      //个人信息填写无误，提交
      //如果是第一次注册
      if (!app.globalData.isRegister) {
        this.submitInfo(sex, height, age, weight, phone);
      } else {
        //后续修改信息
        this.updateInfo(sex, height, age, weight, phone)
      }
  },

  /**
   * 第一次注册调用
   */
  submitInfo(sex, height, age, weight, phone) {
    db.collection('user').add({
      data: {
        sex: sex,
        height: height,
        age: age,
        weight: weight,
        phone: phone,
        sas: 0,
        sds: 0,
        sad: 0,
        ses: 0
      },
      success: res => {
        app.loginConfirm(); //修改登录状态
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
  },

  /**
   * 如果已经注册过，则更新数据
   */
  updateInfo(sex, height, age, weight, phone) {
    db.collection('user').where({
      _openid: app.globalData.openid
    }).update({
      data: {
        sex: sex,
        height: height,
        age: age,
        weight: weight,
        phone: phone,
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