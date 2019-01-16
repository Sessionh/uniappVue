<template>
	<view class="content" >
		<view class="part2">
			<swiper class="banner-box" 
			    indicator-dots 
				autoplay
				indicator-active-color="#169bd5"  
				circular
				:interval="5000" 
				:duration="300" 
				indicator-color="#ffffff"
				>
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<image class="banner_image" :src="item.img"
						mode="aspectFill" lazy-load></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="test" style="width:200upx; height: 200upx; background: #8F8F94;">33</view>
		<view class="test" style="width:200upx; height: 200upx; background: #8F8F94;">33</view>
		<view class="test" style="width:200upx; height: 200upx; background: #8F8F94;">33</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bannerList: [
					{
						id: 1,
						img: 'https://img1.qunarzz.com/qs/1901/8d/e7e08c5643e2db02.jpg'
					},
					{
						id: 2,
						img: 'https://img1.qunarzz.com/qs/1809/1e/28990a4158359902.jpg'
					},
					{
						id: 3,
						img: 'https://img1.qunarzz.com/qs/1809/1e/28990a4158359902.jpg'
					}
				]
			}
		},
		onLoad() {

		},
		onPullDownRefresh() { // 下拉刷新监听
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 600upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	
	/* 轮播图 */
.part2{
    width: 100%;
    height: 200upx;
   /* border-bottom: 20px solid #f9f9f9;
    overflow: hidden;
    position: relative; */
}
/* .part2:after{
    content: " ";
    height: 20px;
    border-radius: 50%;
    background: #f9f9f9;
    position: absolute;
    bottom: -10px;
    left: -20px;
    right: -20px;
} */
/* .banner-box{
    width: 100%;
    height: 100%;
} */
.banner_image{
    width: 100%;
    /* height:  100%; */
}
</style>
