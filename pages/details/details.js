// pages/details/details.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		indicatorDots: true,
		interval: 2000,
		duration: 200,
		banImg:[
			"../../image/ban1.jpg",
			"../../image/ban4.jpg",
			"../../image/ban3.jpg"
		],
		formation:[
			{
				id:51,
				money:299,
				oldMoney:399,
				name:"贴心毛衣",
				xxImg:"../../image/fl5.jpg",
				num:1
			}
		]
	},

	// 购物车跳转
	shop(){
		wx.switchTab({
			url: '/pages/cart/cart'
		})
	},
	setShop(){
		var cartData = {
			id: this.data.formation[0].id,
			money: this.data.formation[0].money,
			carImg: this.data.formation[0].xxImg,
			num: this.data.formation[0].num,
			name: this.data.formation[0].name
		};
		var GoodsCart = wx.getStorageSync("GoodsCart");
		if (GoodsCart){
			// 代表状态 有数据 没有相同ID
			var isbool = true;
			// 1.1有数据，相同商品数据，数量加一
			for (var i = 0; i < GoodsCart.length; i++) {
				if (GoodsCart[i].id == this.data.formation[0].id) {
					GoodsCart[i].num += 1;
					isbool = false;
				}
			}
			if (isbool) {
				// 把新商品添加购物车
				GoodsCart.push(cartData);
				isbool = true;
			}
			wx.setStorageSync("GoodsCart", GoodsCart);
		}else{
			wx.setStorageSync("GoodsCart", [cartData])
		}
	},
	//立即购买
	move(){
		var cartData = {
			id: this.data.formation[0].id,
			money: this.data.formation[0].money,
			carImg: this.data.formation[0].xxImg,
			num: this.data.formation[0].num,
			name: this.data.formation[0].name
		};
		var GoodsCart = wx.getStorageSync("GoodsCart");
		if (GoodsCart) {
			// 代表状态 有数据 没有相同ID
			var isbool = true;
			// 1.1有数据，相同商品数据，数量加一
			for (var i = 0; i < GoodsCart.length; i++) {
				if (GoodsCart[i].id == this.data.formation[0].id) {
					GoodsCart[i].num += 1;
					isbool = false;
				}
			}
			if (isbool) {
				// 把新商品添加购物车
				GoodsCart.push(cartData);
				isbool = true;
			}
			wx.setStorageSync("GoodsCart", GoodsCart);
		} else {
			wx.setStorageSync("GoodsCart", [cartData])
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