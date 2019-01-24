<template>
	<view class="menu">
		<view class="menu_icon" v-for="item in menuList" :key="item.id">
			<view class="icon">
				<text class="iconfont" :class="item.icon" :style="{color: item.color}"></text>
			</view>
			<view class="title">
				{{item.name}}
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		props: {
			menuList: {
				type: Array
			}
			
		},
		data() {
			return {
// 				menuList: [
// 					{
// 						id: 1,
// 						name: '菜谱分类',
// 						icon: '&#xe653;',
// 						color: 'blue',
// 					},
// 					{
// 						id: 2,
// 						name: '健康指标',
// 						icon: '&#xe62d;',
// 						color: 'green',
// 					},
// 					{
// 						id: 3,
// 						name: '签到领现金',
// 						icon: '&#xe625;',
// 						color: 'red',
// 					},
// 					{
// 						id: 4,
// 						name: '关注动态',
// 						icon: '&#xe6a9;',
// 						color: '#448ef6',
// 					},
// 					{
// 						id: 5,
// 						name: '精品菜单',
// 						icon: '&#xe607;',
// 						color: '#009f9d',
// 					},
// 					{
// 						id: 6,
// 						name: '安佳美食站',
// 						icon: '&#xe66c;',
// 						color: '#d34848',
// 					},
// 					{
// 						id: 7,
// 						name: '视频菜谱',
// 						icon: '&#xe65d;',
// 						color: '#41aaa8',
// 					},
// 					{
// 						id: 8,
// 						name: '母婴专区',
// 						icon: '&#xe616;',
// 						color: '#ff8162',
// 					}
// 				]
				
			};
		}
	}
</script>

<style lang="less" scoped>
	
.menu {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 20upx 0;
	.menu_icon {
		width: 25%;
		height: 130upx;
		// background: firebrick;
		margin-top: 10upx;
		// border: 1px solid  red;  
        box-sizing: border-box; 
		text-align: center;
		padding-top: 10upx;
		
		.title {
			overflow: hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
			font-size: 28upx;
			padding-top: 5upx;
			color: #808695;
			
		}
		.icon {
			.iconfont {
				font-size: 55upx;
			}
			
		}
		
		
	}
	
}


</style>
