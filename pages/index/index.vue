<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper indicator-dots indicator-color="#c8c7cc" indicator-active-color="#333" autoplay interval="3000"
				circular>
				<swiper-item v-for="(item,index) in imgList" :key="item.id">
					<image mode="aspectFill" :src="item.img"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left-icon">
				<uni-icons type="sound" size="20" color="#78fd0b"></uni-icons>
				<text>公告</text>
			</view>
			<view class="notice-content">
				<swiper vertical autoplay interval="3000" circular style="height: 50rpx;">
					<swiper-item v-for="item in contentList" :key="item.id">
						<view style="line-height: 50rpx; color: #000">{{ item.content }}</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="right-icon">
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>
		<view class="recom">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" color="#78fd0b"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd号"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="recom-content">
				<scroll-view scroll-x="true">
					<view class="box" v-for="item in 8">
						<image src="/common/images/image02.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">
						More+
					</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
	const isMore = defineProps([])
	import {
		ref
	} from "vue";

	const imgList = ref([{
			id: 1,
			img: "/common/images/leimu1.jpg"
		},
		{
			id: 2,
			img: "/common/images/image02.jpg"
		},
		{
			id: 3,
			img: "/common/images/image03.jpg"
		},
	])

	const contentList = ref([{
			id: 11,
			content: '你好呀呀呀呀呀呀呀呀'
		},
		{
			id: 22,
			content: '他好呀呀呀呀呀呀呀呀'
		},
		{
			id: 33,
			content: '大家好呀呀呀呀呀呀呀呀'
		}
	])
</script>

<style lang="scss" scoped>
	.homeLayout {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10px;
					}
				}
			}
		}

		.notice {
			display: flex;
			align-items: center;
			background-color: #c1c1c1;
			padding: 0 30rpx;
			height: 50rpx;
			margin: 0 auto;
			border-radius: 10px;

			.left-icon {
				display: flex;
				align-items: center;
				color: greenyellow;
				margin-right: 20rpx;
				/* 添加右边距 */
			}

			.notice-content {
				flex: 1;
				overflow: hidden;

				swiper {
					height: 100%;
				}
			}

			.right-icon {
				margin-left: 20rpx;
				/* 添加左边距 */
			}
		}

		.recom {
			padding-top: 50rpx;

			.date {
				color: #28b389;
				display: flex;
				align-items: center;
			}

			.recom-content {
				width: 750rpx;
				margin-left: 30rpx;
				margin-right: 30rpx;

				scroll-view {
					white-space: nowrap;

					.box {
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}

						.box:last-of-type {
							margin-right: 30rpx;
						}
					}

				}

			}
		}

		.theme {
			padding-bottom: 30rpx;
			padding-top: 50rpx;
			.more {
				font-size: 32rpx;
				color: #888;
			}
			.content {
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3, 1fr);
			}
			
		}

	}
</style>