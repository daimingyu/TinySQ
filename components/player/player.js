
var app = getApp();
import pubsub from '../../utils/pubsub.js';

Component({
  data: {
    playState: app.globalData.playState,
    musicPic: app.globalData.musicPic,
    musicName: app.globalData.musicName,
    musicUrl: app.globalData.musicUrl,
    artistName: app.globalData.artistName
  },
  ready(){
    /**
     * 歌曲切换处理函数
     */
    pubsub.on('change', (data) => {
      console.log('====',data);
      //会执行很多次
      this.change(data);
    })
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    // 由第一页进入到第二页时同步播放器的状态
    show: function () { 
      this.updateData();
    },
  },
  methods: {
    /**
     * 更新自己的变量，更新视图
     */
    updateData(){
      this.setData({
        musicPic: app.globalData.musicPic,
        musicName: app.globalData.musicName,
        musicUrl: app.globalData.musicUrl,
        artistName: app.globalData.artistName,
        playState: app.globalData.playState
      });
      console.log(this.data.musicName);
    },
    /**
     * 更新全局变量
     */
    updateDateGlobal(data){
      app.globalData.musicPic = data.musicPic;
      app.globalData.musicName = data.musicName;
      app.globalData.musicUrl = data.musicUrl;
      app.globalData.artistName = data.artistName;
    },
    /**
     * 播放方法 
     */
    play: function(){
      app.globalData.audio.play();
      app.globalData.playState = 1;
      this.setData({ playState: 1 });
    },
    /**
     * 暂停方法
     */
    pause: function(){
      app.globalData.audio.pause();
      app.globalData.playState = 0;
      this.setData({ playState: 0 });
    },
    /**
     * 切换音乐
     */
    change: function (data){
      //更新全局变量
      this.updateDateGlobal(data);
      //换碟
      app.globalData.audio.src = data.musicUrl;
      //更新自己的变量，更新视图
      this.updateData();
      //播放
      this.play();
    },
    handleClick: function (e) {
      console.log(app.globalData.playState);
      switch (this.data.playState){
        case 0:
          this.setData({ playState: 1 });
          this.play();
          break;
        case 1:
          this.setData({ playState: 0 });
          this.pause();
          break;
      }
    }
  }
})