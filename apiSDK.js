const authApi='http://47.93.23.110:8210';

function postFormid(url, data,header, successCallback, errorCallback) {
    wx.request({
      url: authApi + url, //仅为示例，并非真实的接口地址
      data: data,
      method: 'POST',
      header: {
         'Z-Sign': header,
        'content-type': 'application/json'
      },
      success: function (res, statusCode) {
       
          successCallback(res);
        
      },
      fail: function (error) {
        errorCallback(error);
      }
    })
  }


  
  module.exports = {
    authApi,
    postFormid
  }