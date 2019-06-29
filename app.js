//app.js
import { DEFAULT_MUSIC } from './config/index.js';
import { createInnerAudioContext } from './common/wx.js';

App({
  
  // 小程序启动之后 触发
  onLaunch: function () {

    //歌曲默认设置
    this.globalData.audio.src = DEFAULT_MUSIC.musicUrl;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          console.log('a');
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    audio: createInnerAudioContext(),
    playState: DEFAULT_MUSIC.playState,
    musicPic: DEFAULT_MUSIC.musicPic,
    musicName: DEFAULT_MUSIC.musicName,
    musicUrl: DEFAULT_MUSIC.musicUrl,
    artistName: DEFAULT_MUSIC.artistName
  }
})