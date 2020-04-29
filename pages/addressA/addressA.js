// pages/address/address.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		defaultSize: 'default',
		number: "",
		address: "",
		recipient: ""
	},

	btn(event) {
		// console.log(event.detail.value)
		this.data.number = event.detail.value;
	},
	btn2(event) {
		// console.log(event.detail.value)
		this.data.address = event.detail.value;
	},
	btn3(event) {
		// console.log(event.detail.value)
		this.data.recipient = event.detail.value;
	},
	qd() {
		var xx = [{ number: this.data.number }, { address: this.data.address }, { recipient: this.data.recipient }]
		wx.setStorageSync("xx", xx)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var seat = wx.setStorageSync("seat")
		this.setData({
			seat:seat
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