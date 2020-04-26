// pages/article/article.js
const db = wx.cloud.database();

Page({

  data: {
    list: [], //文章数据
    page: '', //在哪个分类中，如糖尿病
    search: '', //搜索内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this;
    db.collection(options.page).get({
      success: function(res) {
        _this.setData({
          list: res.data,
          page: options.page
        })
      }
    })
  },

  /**
   * 跳转页面，传参
   */
  navigate(e) {
    let index = e.currentTarget.id;
    let id = this.data.list[index]._id;
    let page = this.data.list[index].page;
    wx.navigateTo({ //传参，点了哪个页面以及云数据库的_id标识，用于定位
      url: '../article/article?page=' + page + '&id=' + id
    })
  },

  /**
   * 获取搜索输入框的值
   */
  getSearchValue(e) {
    this.setData({
      search: e.detail.value
    })
  },


  /**
   * 搜索
   */
  search() {
    let _this = this;
    let search = this.data.search;
    let list = [];
    const page = ["gxy","tnb","gxb","ncz","sm"]
    for(let i = 0; i<5;i++){
      db.collection(page[i]).where({
        //使用正则查询，实现对搜索的模糊查询
        title: db.RegExp({
          regexp: search,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          if(res.data.length!=0){    //判断是否存在数据，有则拼接
          list = list.concat(res.data);
          }
          _this.setData({
            list: list
          })
        }
      })
    }
  }
})