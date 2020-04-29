// pages/cart/cart.js
Page({

	/** 
	 * 页面的初始数据
	 */
	data: {
		open:"block",
		noopen:"none",
		total:0,
		carList:[
			// {
			// 	carImg:"../../image/fl5.jpg",
			// 	name:"毛衣外套",
			// 	money:"299",
			// 	id:1,
			// 	num:5
			// },
			// {
			// 	carImg:"../../image/fl6.jpg",
			// 	name:"毛衣外套",
			// 	money:"299",
			// 	id:2,
			// 	num:8
			// },
		],
		orderList:"",
		orderTxt:""
	},
	//确认订单
	confirm(options){
		var a = wx.getStorageSync("goodslist")
		var i = options.target.dataset.i;
		if (a.length != 0) {
			for(let j = 0;j<a.length;j++){
				if(i ==j){
					a[j].orderTxt = "已签收";
					wx.setStorageSync("goodslist",a)
				}
			}
		}
		this.setData({
			orderList:a
		})
	},
	//减法
	reduce(options){
		// console.log(options)
		// id需要html传自定义数data-id={{item.id}}
		var i = options.target.dataset.id;
		// console.log(this)
		var num = this.data.carList[i].num;
		var obj = {};
		var k = "carList["+i+"].num";
		if(num <= 1){
			num = 1;
		}else{
			num--;
		}
		obj[k] = num;
		this.setData(obj)
		this.total();
		wx.setStorageSync("GoodsCart", this.data.carList)
	},
	//加法
	add(options){
		var id = options.target.dataset.id;
		var num = this.data.carList[id].num;
		var obj = {};
		var k = "carList["+id+"].num";
		num++;
		obj[k] = num;
		this.setData(obj)
		this.total();
		wx.setStorageSync("GoodsCart", this.data.carList)
	},
	// 删除
	del(options){
		// console.log(options)
		var id = options.target.dataset.id;
		this.data.carList.splice(id,1);
		this.setData({
			carList:this.data.carList
		})
		this.total();
		wx.setStorageSync("GoodsCart", this.data.carList)
	},
	// 总价格
	total(options){
		var total = 0;
		for(let i = 0 ; i < this.data.carList.length ; i++){
			total += this.data.carList[i].num * this.data.carList[i].money;
			this.setData({
				total: total
			})
		}
	},
	//下单
	getdown() {
		
		wx.reLaunch({
			url: '/pages/order/order'
		})
	},
	
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var msg = wx.getStorageSync("GoodsCart")
		var msgOrder = wx.getStorageSync("goodslist");
		// console.log(msg)
		if(msgOrder.length!=0){
			this.setData({
				noopen: msgOrder[0].block,
				open: msgOrder[0].none,
				orderTxt: msgOrder[0].orderTxt
			})
		}else{
			this.setData({
				carList: msg,
			})
		}
		this.total();
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
		var a = this.data.orderList = wx.getStorageSync("goodslist")
		var b = wx.getStorageSync("GoodsCart")

		this.setData({
			orderList: a,
			carList:b
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