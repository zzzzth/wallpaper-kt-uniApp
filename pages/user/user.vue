<template>
	<view class="classLayout">
		<!-- section1 -->
		<view class="section1">

			<view class="avatar">
				<image src="/static/images/sasiki.webp" mode=" aspectFill"
					style="width: 150rpx; height: 150rpx;border-radius: 20rpx;">
				</image>
			</view>

			<view class="text">
				<view class="title">你好,小香锅</view>
				<p class="desc">Luckboy陪着你一起走过x天</p>
			</view>
			<image src="/static/images/xiao.png" mode="aspectFit" style="width: 100rpx; height: 100rpx;"></image>
		</view>
		<!-- section2 -->
		<view class="section2">
			<view class="card">
				<view class="card-item" v-for="item in statsList" :key="item.key">
					<navigator url="">
						<view class="card-title">{{item.count}}</view>
						<view class="card-label">
							<image :src="item.icon" style="width: 30rpx; height: 30rpx;" mode="aspectFill"></image>
							<text>{{item.label}}</text>
						</view>
					</navigator>

				</view>

			</view>
			<navigator class="update-info" style="text-align: center; margin-top: 20rpx;">更新数据 16:00</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		useStates
	} from '../../composables/useStats.js'
	import {
		onReady
	} from '@dcloudio/uni-app'
	const {
		stats
	} = useStates()

	const statsList = ref([{
			key: 'moment',
			count: 30,
			label: 'Moment',
			icon: '/static/images/user/moment.png'
		},
		{
			key: 'image',
			count: 78,
			label: '图片',
			icon: '/static/images/user/image.png'
		},
		{
			key: 'video',
			count: 6,
			label: '视频',
			icon: '/static/images/user/video_fill.png'
		},
		{
			key: 'text',
			count: 590,
			label: '文字',
			icon: '/static/images/user/write.png'
		},
	])

	onReady(() => {

	})
</script>

<style lang='scss' scoped>
	.classLayout {
		padding: 0rpx 20rpx;
		background-color: #e0e0e0;

		.section1 {
			padding: 30rpx 0rpx;
			display: flex;
			gap: 20rpx;
			box-shadow: 2rpx 2rpx 5rpx black;
			border-radius: 10rpx;
			position: relative;
			background-color: #000;

			.bgImage {
				background-image: url('/static/images/xiao.png');
				background-size: contain;
				background-repeat: no-repeat;
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 100rpx;
				height: 100rpx;
				overflow: hidden;
			}

			.avatar {
				margin: 10rpx 0;
			}

			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;

				.title {
					font-size: 40rpx;
					color: greenyellow;
					font-weight: 600;
				}

				.desc {
					margin-top: 15rpx;
					font-size: 30rpx;
					color: grey;
				}
			}
		}

		.section2 {
			margin: 40rpx 0rpx;
			padding-top: 40rpx;
			padding-bottom: 40rpx;
			padding-left: 20rpx;
			padding-right: 20rpx;
			background-color: #ffb907;
			box-shadow: 2rpx 2rpx 5rpx black;
			border-radius: 10rpx;

			.card {
				display: flex;
				justify-content: space-around;

				.card-item {
					display: flex;
					flex-direction: column;
					align-items: center;

					.card-title {
						font-size: 35rpx;
						font-weight: 600;
						text-align: center;
					}

					.card-label {
						text {
							font-size: 30rpx;
							color: lightgreen;

						}

						image {
							align-items: center;
							margin-right: 5rpx;
						}
					}
				}
			}
		}
	}
</style>