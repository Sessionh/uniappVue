<template>
	<view class="course">
		<view class="header">
			<view class="title">{{title}}</view>
			
			<text class="iconfont" >&#xe79a;</text>
		</view>
		<scroll-view class="course_view" scroll-x="true">
			<view class="fill_context">
			</view>
			<view class="intro_course" v-for="item in courseList" :key="item.id">
				<view class="image_bor">
					<image class="image" :src="item.url"/>
					<view class="teacher">{{item.job}}</view>
					<view class="title text_hidden">{{item.title}}</view>
					<view class="intro_title text_hidden">
						{{item.introTitle}}
					</view>
					<view class="student_add text_hidden">
						{{item.studentAdd}}人加入学习
					</view>
				</view>
				
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
export default {
	props:{
		courseList: {
			type: Array,
		},
		title: {
			type: ''
		}
	},
	data() {
		return {
// 			courseList: [
// 				{
// 					id: 1,
// 					job: '老师',
// 					url: 'https://cp1.douguo.com/upload/note/0/e/9/320_0eda66f4d33406521347720234e73f69.JPG',
// 					title: '美味生活HowLivesdsd',
// 					introTitle: '【限时特价】五星酒店甜品师，带给你法式饼干交响曲',
// 					studentAdd: 21
// 				},
// 				{
// 					id: 2,
// 					job: '老师',
// 					url: 'https://cp1.douguo.com/upload/caiku/6/b/c/260x220_6bfce96114f7d818fa6121c553291c2c.jpg',
// 					title: '玉米银耳粥',
// 					introTitle: '清甜的玉米，浓稠的银耳，就算不加糖都是美味的暖身饮',
// 					studentAdd: 419
// 				},
// 				{
// 					id: 3,
// 					job: '老师',
// 					url: 'https://cp1.douguo.com/upload/caiku/d/4/6/600_d43ce1e2445c2f2c2de4ea661280ae86.jpg',
// 					title: '可爱小猫咪馒头',
// 					introTitle: '放寒假了，跟孩子在一起有好多有趣的事情可以做',
// 					studentAdd: 234
// 				}
// 			]
			
		}
	}
}
</script>

<style lang="less" scoped>
	.text_hidden {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.course {
		height: 580upx;
		width: 100%;
	}
	.header {
		display: flex;
		height: 80upx;
		width: 100%;
		// background: #ccc;
		align-items: center;
		.title {
			font-size: 35upx;
			font-weight: 600;
			flex: 1;
			padding-left: 40upx;
		}
		.iconfont {
			font-size: 50upx;
			font-weight: 600;
			
		}
	}
	.course_view {
		height: 500upx;
		width: 100%;
		white-space: nowrap;
		.fill_context {
			display: inline-block;
			width: 40upx;
			height: 400upx;
			// background: red;
		}
		.intro_course {
			width: 300upx;
			height: 100%;
			display: inline-block;
			// background: #ccc;
			margin-right: 20upx;
			
			.image_bor {
				width: 300upx;
				height: 500upx;
				position: relative;
				.image {
					width: 100%;
					height: 400upx;
					border-radius: 10upx;
				}
				.teacher {
					width: 60upx;
					background: #fff;
					position: absolute;
					top: 300upx;
					left: calc(25% + 60upx);
					font-size: 25upx;
					text-align: center;
					padding: 2upx 0;
				}
				
				.title {
					position: absolute;
					top: 350upx;
					
					height: 50upx;
					text-align: center;
					width: 300upx;
					font-size: 30upx;
					color: #fff;
					padding: 0 2upx;
					
				}
				.student_add {
					font-size: 20upx;
					color: #808695;
				}
				.intro_title {
					font-size: 26upx;
					
				}
					
			}
			
		}
	}
</style>
