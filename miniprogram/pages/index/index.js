//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/3.jpg',
      '/images/2.jpg',
      '/images/1.jpg',
    ],
    article: [{
      title: "这里是标题",
      content: "这里是副标题",
      photo:"../../images/1.jpg"
    }]

  },

  onLoad: function() {
   
  },

})