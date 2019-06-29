//获取应用实例
const app = getApp();
import { setNavigationBarTitle } from '../../common/wx.js';
import { fetchMusicRankingsDetailsMessage } from '../../api/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    name: '',
    bg: '',
    color: '',
    dataSoure: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受url传过来的参数
    const { type, name, bg, color} = options;
    //设置顶部页面标题
    setNavigationBarTitle(name);
    //更新数据
    this.setData({ type, name, bg, color });
    //请求数据
    fetchMusicRankingsDetailsMessage({type}).then((response) => {
      console.log(response);
      const dataSource = response.data.result;
      this.setData({ dataSource })
    });
  }, 
})