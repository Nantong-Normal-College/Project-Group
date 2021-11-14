const app = getApp();
let inputVal = '';  //输入框的内容，未发
let msgList = [];   //聊天记录，已发
let windowWidth = wx.getSystemInfoSync().windowWidth;  //可使用屏幕宽度
let windowHeight = wx.getSystemInfoSync().windowHeight;//可使用屏幕高度
let keyHeight = 0; //键盘弹起高度
 
/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';
  msgList = [
    {
      speaker: 'server',
      contentType: 'text',
      content: '测试测试'
    },
    {
      speaker: 'customer',
      contentType: 'text',
      content: '测试'
    },
    {
      speaker: 'server',
      contentType: 'text',
      content: '#233'    },
  ]
  that.setData({
    msgList,
    inputVal
  })
}
 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh', //这个高度一定要有
    inputBottom: 0,
    inputVal: '',
    picHead: '/images/tx.jpg'
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
    // this.setData({
    //   picHead: app.globalData.userInfo.picHead,
    // });
  },
 
  // 获取聚焦,键盘弹起
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
  },
 
  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })
 
  },
 
  // 发送点击监听
  sendClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },
 
  // nav栏返回
  onClickLeft() {
    wx.reLaunch({
      url: '/pages/message/message',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
 
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
 
  }
})