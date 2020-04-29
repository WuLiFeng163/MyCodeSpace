Page({

    /**
     * 页面的初始数据
     */
	data: {
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},

    /**
     * 生命周期函数--监听页面加载
     */
	onLoad: function (options) {
		var _this = this;
		wx.login({
			success(res) {
				console.log(res)
				if (res.code) {
					wx.getUserInfo({
						success: function ({ userInfo }) {
							console.log(userInfo)
							_this.setData({ userInfo })
						}
					})
				} else {
					console.log("err:错误")
				}
			}
		})

	},
	bindGetUserInfo(e) {
		console.log(e.detail.userInfo)
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