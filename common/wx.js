//微信显示提示消息方法
const toast = (params) => wx.showToast(params);

//微信发送网络请求方法
const request = (params) => wx.request(params);

//隐藏loading方法
const hideLoading = (params) => wx.hideLoading(params);

//微信页面路由方法，不支持tabBar页面
const navigateTo = (params) => wx.navigateTo(params);

//微信页面路由方法，不支持tabBar页面
const navigateBack = (params) => wx.navigateBack(params);

//微信页面路由方法，不支持tabBar页面
const redirectTo = (params) => wx.redirectTo(params);

//动态设置页面标题
const setNavigationBarTitle = (title) => wx.setNavigationBarTitle({ title });

const createInnerAudioContext = () => wx.createInnerAudioContext();

module.exports = { 
  toast,
  request,
  hideLoading,
  navigateTo,
  navigateBack,
  redirectTo,
  setNavigationBarTitle,
  createInnerAudioContext
}