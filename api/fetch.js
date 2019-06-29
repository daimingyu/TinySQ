import { toast, request, hideLoading } from '../common/wx.js';

function promise(method, url, data) {
  return new Promise(function (resolve, reject) {
    request({
      url: url,
      method: method,
      data: data,
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        hideLoading();
        if (res.data.code == 200) {
          resolve(res);
        } else {
          toast({ title: '服务异常，请稍后再试', icon: 'none', duration: 2000 });
        }
      },
      fail: function (res) {
        hideLoading();
        toast({ title: '服务异常，请稍后再试', icon: 'none', duration: 2000 });
        reject(res);
      }
    });
  });
}

function fetch(url, data) {
  return promise("GET", url, data);
}

module.exports = { fetch };