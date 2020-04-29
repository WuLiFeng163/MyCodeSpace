// pages/placeorder/placeorder.js
Page({

	/**
	 * 页面的初始数据 
	 */
	data: {
		userName: "欧米伽",
		userNumber: "13563023653",
		address: "广东",
		seat:"",
		total:"21",
		goodslist:[
			{
				id:0,
				name:"大衣", 
				money:"19", 
				num:1
			}
		]
	},

	// 计算价格
	// 总价格
	total(options) {
		var total = 0;
		for (let i = 0; i < this.data.goodslist.length; i++) {
			total += this.data.goodslist[i].num * this.data.goodslist[i].money;
			this.setData({
				total: total
			})
		}
	},
	open(){
		var noopen = "block";
		var none = "none";
		var aa = wx.getStorageSync("GoodsCart");
		for (let i = 0; i < aa.length; i++) {
			aa[i].orderTxt= "未签收"
		}
		var a = [];
		aa[0][noopen] = noopen;
		aa[0][none] = none;
		wx.setStorageSync("goodslist",aa);
		wx.setStorageSync("GoodsCart",a);
		
		wx.reLaunch({
			url: '/pages/cart/cart'
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var msg = wx.getStorageSync("GoodsCart")
		console.log(msg)
		this.setData({
			goodslist:msg
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

		userName: "欧米伽";
		userNumber: "13563023653";
		address: "广东";
		var dw = wx.getStorageSync("seat")
		var xx = wx.getStorageSync("xx")
		this.setData({
			seat:dw,
			userName:xx[2].recipient,
			userNumber:xx[0].number,
			address:xx[1].address
		})
		
		this.total();
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