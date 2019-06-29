//获取应用实例
const app = getApp();
import { setNavigationBarTitle } from '../../common/wx.js';
import { fetchSearchMusicMessage } from '../../api/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataSource: []
  },
  handleKeySearch: function (e){
    const { name } = e.currentTarget.dataset;
    fetchSearchMusicMessage({ name }).then((response) => {
      const dataSource = response.data.result;
      this.setData({ dataSource })
    });
  },
  handleSearch(e){
    const name = e.detail.value;
    fetchSearchMusicMessage({ name }).then((response) => {
      const dataSource = response.data.result;
      this.setData({ dataSource })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
})