// pages/local/local.js

var amapFile = require('../../libs/amap-wx.js');
var markersData = {
	latitude: '',//纬度
	longitude: '',//经度
	key: "753113be4fcbc366767be8ad14d17a47"//申请的高德地图key
};
Page({
	data: {
	},

	getLocation: function (e) {
		var that = this;
		wx.getLocation({
			type: 'gcj02', //返回可以用于wx.openLocation的经纬度
			isHighAccuracy: true,
			success: function (res) {
				var latitude = res.latitude//维度
				var longitude = res.longitude//经度
				console.log(res);
				that.loadCity(latitude, longitude);
			}
		})
	},
	loadCity: function (latitude, longitude) {
		var that = this;
		var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
		myAmapFun.getRegeo({
			location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
			success: function (data) {
				console.log(data);
				var seat = data[0].name;
				// console.log(seat);
				wx.setStorageSync("seat", seat);
				that.setData({
					address: data
				})
			},
			fail: function (info) { }
		});

		myAmapFun.getWeather({
			success: function (data) {
				that.setData({
					weather: data
				})
				console.log(data);
				//成功回调
			},
			fail: function (info) {
				//失败回调
				console.log(info)
			}
		})
	},

	// 重新定位
	relocation() {
		this.getLocation();
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