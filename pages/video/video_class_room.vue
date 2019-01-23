<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="header_top"></view>
		<!-- #endif -->
		<view class="header" v-if="isShow">
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
		<menuCourse :title="courseName[0]" :courseList="courseList"/>
		<menuCourse :title="courseName[1]" :courseList="courseGetList"/>
		
	</view>
</template>

<script>
	import menuIcon from './menu_icon.vue';
	import menuCourse from './menu_course';
	export default {
		components: {
			menuIcon,
			menuCourse,
		},
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
					
					
					
				}
			})
		
		},
		data() {
			return {
				isShow: true,
				title: '设置',
				courseName: ['推荐课程', '新课上线'],
				courseGetList: [
					{
						id: 1,
						job: '老师',
						url: 'https://cp1.douguo.com/upload/caiku/7/7/4/260x220_77552f222071573cf3bd591bbe1d30e4.jpg',
						title: 'NEO的厨房',
						introTitle: '大师入门：在家轻松玩转酥软手工披萨',
						studentAdd: 21
					},
					{
						id: 2,
						job: '老师',
						url: 'https://cp1.douguo.com/upload/caiku/5/c/4/220x220_5c665b785c884a6687396d2ccb327684.jpeg',
						title: 'yn高小凤',
						introTitle: '这次用的是黄河鲤鱼 大家可以选择鲈鱼 蒸起来更好吃',
						studentAdd: 419
					},
					{
						id: 3,
						job: '老师',
						url: 'https://cp1.douguo.com/upload/caiku/7/f/1/220x220_7f6e01dee2650e1dd4b1dcffbcb7ff61.jpeg',
						title: 'SS迁',
						introTitle: '蜜制叉烧',
						studentAdd: 190
					},
				],
				courseList: [
					{
						id: 1,
						job: '老师',
						url: 'https://cp1.douguo.com/upload/note/0/e/9/320_0eda66f4d33406521347720234e73f69.JPG',
						title: '美味生活HowLivesdsd',
						introTitle: '【限时特价】五星酒店甜品师，带给你法式饼干交响曲',
						studentAdd: 21
					},
					{
						id: 2,
						job: '老师',
						url: 'https://cp1.douguo.com/upload/caiku/6/b/c/260x220_6bfce96114f7d818fa6121c553291c2c.jpg',
						title: '玉米银耳粥',
						introTitle: '清甜的玉米，浓稠的银耳，就算不加糖都是美味的暖身饮',
						studentAdd: 419
					},
					{
						id: 3,
						job: '老师',
						url: 'https://cp1.douguo.com/upload/caiku/d/4/6/600_d43ce1e2445c2f2c2de4ea661280ae86.jpg',
						title: '可爱小猫咪馒头',
						introTitle: '放寒假了，跟孩子在一起有好多有趣的事情可以做',
						studentAdd: 234
					}
				],
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
		z-index: 2;
		top: 0;
		display: flex;
		align-items: center;
		background: #fff;
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
