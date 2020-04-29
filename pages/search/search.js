// pages/search/search.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		hotCon: ["保湿面膜0.1元", "洗手液", "口罩", "杀菌湿巾", "卸妆", "精华","眼霜","会员卡"],
		maoyi:[
			{

			}
		],
		a:"",
		b:"",
		c:"",
		ne:"none"
	},
	cp(event){
		console.log( event.detail.value)
		console.log( event.detail.cursor)
		console.log(event.detail.keyCode)
		var aa = event.detail.value;
		if(aa==""){
			this.a = "";
			this.setData({
				ne: "none",
				a: this.a
			})
		}
		if (event.detail.value){
			this.setData({
				ne:"block",
				a:aa
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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