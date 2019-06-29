//获取应用实例
const app = getApp();
import { setNavigationBarTitle } from '../../common/wx.js';
import { fetchMusicBroadcastingDetailsMessage } from '../../api/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    channelname: '',
    name: '',
    dataSoure: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受url传过来的参数
    const { channelname, name} = options;
    //设置顶部页面标题
    setNavigationBarTitle(name);
    //更新数据
    this.setData({ channelname, name });
    //请求数据
    fetchMusicBroadcastingDetailsMessage({ channelname }).then((response) => {
      console.log("cnl" ,response);
      const dataSource = response.data.result.songlist;
      this.setData({ dataSource })
    });
  },
})