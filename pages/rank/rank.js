//index.js
//获取应用实例
const app = getApp();
import { fetchMusicRankingsMessage } from '../../api/index';

Page({
  data: {
    dataSource: []
  },
  // 加载首屏数据
  onLoad: function () {
    fetchMusicRankingsMessage().then((response) => {
      console.log(response);
      const dataSource = response.data.result;
      this.setData({dataSource})
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
