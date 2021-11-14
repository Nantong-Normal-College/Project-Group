const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: { },
  // 退出登录
  loginout(){
    wx.showModal({
      title: '提示',
      content: '您确定要退出登录吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.setStorageSync('token', '');//将token置空
          
          wx.switchTab({
            url: '../../index/index',
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  }
})
