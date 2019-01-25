<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="header_top"></view>
		<!-- #endif -->
		<view class="header" v-if="isShow">
	      <text class="iconfont icon-icon"></text>
		  <view class="title">我的</view>
		   <text class="iconfont icon-weiwangguanicon-defuben-"></text>
	    </view>
		<image class="images" src="../../static/page/userLogo.png" :style="{height: (viewHeight - 160 ) + 'px'}"/>
		<view class="but_content">
			<view class="weixinLogin">微信登陆</view>
			<view class="userLogin">登陆/注册</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		onPullDownRefresh() { // 下拉刷新监听
		   // #ifdef MP-WEIXIN
		    this.isShow = false;
			// #endif
			setTimeout( () => {
				uni.stopPullDownRefresh();
				this.isShow = true;
			}, 1000);
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res);
					// #ifndef MP-WEIXIN
					this.viewHeight = res.windowHeight -35;
						console.log(this.viewHeight);
					// #endif
					// #ifdef MP-WEIXIN
					this.viewHeight = res.windowHeight;
					// #endif
					
					console.log(this.viewHeight)
					
					
				}
			})
		
		},
		data() {
			return {
				isShow: true,
				title: '设置',
				robList: ['限时抢购', '会员专区'],
				viewHeight: 0,
				
				
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
		z-index: 10;
		top: 0;
		display: flex;
		align-items: center;
		background: #fff;
		.title {
			flex: 1;
			text-align: center;
			
		}
		.iconfont {
			margin: 0 20upx;
			font-size: 40upx;
		}
		.icon-gouwuche {
			font-size: 50upx;
		}
		
	}
	.images {
		width: 100%;
		height: 400upx;
		margin-top: 100upx;
	}
	.but_content {
		padding: 40upx;
		text-align: center;
	}
	.weixinLogin {
		font-size: 30upx;
		border-radius: 30upx;
		background: #ff9900;
		padding: 20upx 0;
		color: #fff;
		
		
	}
	.userLogin {
		margin-top: 40upx;
		font-size: 30upx;
		border-radius: 30upx;
		background: orange;
		padding: 20upx 0;
		color: #fff;
	}
		
		
	
	.header_top {
		height: var(--status-bar-height)
	}

</style>
