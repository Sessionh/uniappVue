<template>
	<view class="menu_type">
		<view class="header">
			<text class="iconfont icon-icon-" @click="onBack"></text>
			<view class="title">菜谱分类</view>
			<text class="iconfont icon-sousuo1"></text>
		</view>
		<view class="menu_content">
			<scroll-view class="menu_left" scroll-y="true">
				<view 
				    class="text_hide_one" 
					:class="thatS === item.id ? 'menu_sub_s': 'menu_sub'" 
					@click="menuClick(item)" 
					v-for="item in menuList" :key="item.id">{{item.name}}</view>
				
			</scroll-view>
			
			<scroll-view class="content" scroll-y="true">
				<view class="content_foot">
					<view class="title">
						<view class="name">热门食材</view>
						<image class="image" src="https://cp1.douguo.com/upload/shicai/1446100075.jpg"></image>
					</view>
					<view class="flex_menu">
						<view class="flex_context" v-for="item in hotFootList" :key="item.id">{{item.name}}</view>
						
					</view>
				</view>
				
			</scroll-view>
		  
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			thatS: 1,
			menuList: [
				{
					id: 1,
					name: '热门',
				},
				{
					id: 2,
					name: '蔬菜',
				},
				{
					id: 3,
					name: '肉类大全',
				},
				{
					id: 4,
					name: '主食',
				}
			],
			hotFootList: [
				{
					id: 1,
					name: '面条',
				},
				{
					id:2,
					name: '豆腐',
				},
				{
					id:3,
					name: '排骨',
				},
				{
					id: 4,
					name: '土豆',
				},
				{
					id: 5,
					name: '牛肉',
				},
				{
					id: 6,
					name: '鸡蛋',
				},
				{
					id: 7,
					name: '羊肉',
				},
				{
					id: 8,
					name: '虾',
				},
				{
					id: 9,
					name: '茄子',
				}
			]
			
		}
	},
	methods: {
		onBack() {
			uni.navigateBack({
				delta: 1,
			})
		},
		menuClick(val) {
			this.thatS = val.id;
		}
	}
}
</script>

<style lang="less" scoped>
.text_hide_one {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.but_height {
	height: 65px;
	width: 100%;
	background: rgba(0,0,0,.2);
	
}
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
	padding-top: 90upx;
	display: flex;
	.menu_left {
		width: 200upx;
		// box-shadow: #ccc 0 0 10upx;
		font-size: 30upx;
		.menu_sub {
			padding: 30upx 0;
			background: black;
			color: white;
			text-align: center;
			
		}
		.menu_sub_s {
			padding: 30upx 0;
			background: white;
			color: green;
			text-align: center;
			
		}
		
	}
	.content {
		// width: calc(100% - 175upx);
		padding: 20upx;
		.content_foot {
			
			.title {
				display: flex;
				width: 100%;
				background: #f5f5f5;
				align-items: center;
				padding: 20upx 0;
				margin: 10upx 0;
				.image {
					width: 46upx;
					height: 46upx;
					margin-right: 40upx;
					border-radius: 23upx;
				}
				.name {
					font-size: 25upx;
					flex: 1;
					padding-left: 50upx;
					
					
				}
				
			}
			
			.flex_menu {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				width: 100%;
				.flex_context {
					padding: 15upx 0;
					border: 1upx solid #ccc;
					width: 30%;
					text-align: center;
					margin: 10upx 0;
					border-radius: 8upx;
					font-size: 30upx;
					
				}
				
			}
			
		}
	}
	
}
</style>
