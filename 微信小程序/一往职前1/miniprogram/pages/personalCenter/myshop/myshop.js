var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    phone: '',
    realName: '',
    card: '',
    email: '',
    coco:'',
    _id:'',
    userPassword:''
  },

//定义全局变量 updateID和 updateName

 //要更新的ID
 updateInput(event){
  console.log("要更新的id", event.detail.value);
  id = event.detail.value;
},
//更新后的名字
updateName(event){
  console.log("要更新的name", event.detail.value);
  userPassword = event.detail.value;
},
//更新数据
updateData(){
 DB.doc(userPassword).update({
   // data 传入需要局部更新的数据
   data: {
     // 表示将 done 字段置为 true
     userPassword: userPassword
   },
   success: function (res) {
     console.log("修改成功", res)
   }
})
},

  /**
   * 生命周期函数--监听页面加载
   */
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function (options) {
    this.setData({
      userName: app.appData.account.userName,
      phone: app.appData.userinfo.phone,
      realName: app.appData.userinfo.realName,
      card: app.appData.userinfo.card,
      coco: app.appData.userinfo.coco,
      _id:app.appData.userinfo._id,
      email: app.appData.userinfo.email,
      userPassword:app.appData.userinfo.userPassword,
    })
  },
  onReady: function () {

  },
  update: function(){
    wx.showToast({
      title: '积分不足',
 
      icon: 'loading',
      duration: 400//持续的时间
 
    })
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
   //分类跳转到列表页面
   tabLine:function (e) {
    var dataid = e.currentTarget.dataset.postid;
    var firstName = e.currentTarget.dataset.postname;
    console.log(dataid + "dddddd" + firstName);
    wx.navigateTo({
      url: '../shopCar/shopCar?id=' + dataid + '&firstName=' + firstName
    })
    console.log("你点了我");
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