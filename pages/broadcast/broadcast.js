//index.js
//获取应用实例
const app = getApp();
import { fetchMusicBroadcastingMessage } from '../../api/index';

Page({
  data: {
    dataSource: []
  },
  // 加载首屏数据
  onLoad: function () {
    fetchMusicBroadcastingMessage().then((response) => {
      console.log("broadcast",response);
      const dataSource = response.data.result[0].channellist;
      this.setData({ dataSource })
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
