<template>
	<view class="menu_type">
		<view class="header">
			<text class="iconfont icon-icon-" @click="onBack"></text>
			<view class="title">菜谱分类</view>
			<text class="iconfont icon-sousuo1"></text>
		</view>
		<view class="menu_content">
			<scroll-view class="menu_left" scroll-y="true">
				<view class="menu_sub">33333</view>
				<view>33333</view>
				<view>33333</view>
			</scroll-view>
			
			<scroll-view class="content" scroll-y="true">
				<view>444</view>
				<view>444</view>
				<view>444</view>
			</scroll-view>
		  
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		onBack() {
			uni.navigateBack({
				delta: 1,
			})
		}
	}
}
</script>

<style lang="less" scoped>
.header {
	height: 90upx;
	width: 100%;
	// background: #ccc;
	display: flex;
	align-items: center;
	position: fixed;
	border-bottom: 1upx solid #e8eaec;
	z-index: 2;
	.title {
		flex: 1;
		text-align: center;
	}
	.icon-icon- {
		font-size: 40upx;
		margin-left: 20upx;
		font-weight: 600;
	}
	.icon-sousuo1 {
		font-size: 40upx;
		margin-right: 20upx;
		font-weight: 600;
	}
}
.menu_content {
	padding-top: 100upx;
	display: flex;
	.menu_left {
		width: 175upx;
		.menu_sub {
			width: 100%;
			padding: 30upx 60upx;
			background: black;
			color: white;
		}
		
	}
	.content {
		width: calc(100% - 175upx);
	}
	
}
</style>
