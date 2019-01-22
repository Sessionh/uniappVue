<template>
	<view class="content">
		<!-- #ifndef MP-WEIXIN -->
		<view class="header_top"></view>
		<!-- #endif -->
		<view class="header">
	       <view class="search">
			   <text class="iconfont">&#xe652;</text>
			   <view class="search_title">搜索感兴趣的课程</view>
		   </view>
		   <view class="yet_buy">已购买</view>
	    </view>
		<view class="foot_image">
			<scroll-view class="foot_view" scroll-x="true">
				<view class="fill"></view>
				<view class="image_div" v-for="item in footImgList" :key="item.id">
					<image class="images" :src="item.url"/>
				</view>
			</scroll-view>
		</view>
		<menuIcon/>
		
	</view>
</template>

<script>
	import menuIcon from './menu_icon.vue';
	export default {
		components: {
			menuIcon,
		},
		data() {
			return {
				title: '设置',
				footImgList: [
					{
						id: 1,
						url: 'https://cp1.douguo.com/upload/note/0/e/9/320_0eda66f4d33406521347720234e73f69.JPG'
					},
					{
						id: 2,
						url: 'https://cp1.douguo.com/upload/note/2/c/d/320_2c548e174a5615cf444d9302e4e4e0fd.jpg'
					},
					{
						id: 3,
						url: 'https://cp1.douguo.com/upload/caiku/2/c/0/260x220_2c668ad4c1b84d6e0711a425477f4ef0.JPG'
					}
					
				
				]
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.content {
// 		text-align: center;
// 		height: 400upx;
	}
	.fill {
		display: inline-block;
		width: 40upx;
		height: 200upx;
		// background: red;
	}
	.header {
		height: 90upx;
		width: 100%;
		border-bottom: 1upx solid #e8eaec;
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		.search {
			flex: 1;
			display: flex;
			align-items: center;
			height: 60upx;
			background: #e8eaec;
			border-radius: 10upx;
			margin-left: 40upx;
			.iconfont {
				color: #757575;
				font-size: 35upx;
				margin: 0 10upx 0 20upx;
				
			}
			.search_title {
				color: #757575;
				font-size: 30upx;
				// margin-top: 11upx;
				
			}
			
		}
		.yet_buy {
			font-size: 30upx;
			padding: 0 30upx 0 40upx;
		}
	}
	.foot_image {
		margin-top: 120upx;
		.foot_view {
			width: 100%;
			height: 200upx;
			white-space: nowrap;
			.image_div {
				display: inline-block;
				width: 400upx;
				height: 200upx;
				margin-right: 20upx;
				.images {
					width: 100%;
					height: 100%;
					
					border-radius: 20upx;
				}
				
			}
		}
		
	}
	.header_top {
		height: var(--status-bar-height)
	}

</style>
