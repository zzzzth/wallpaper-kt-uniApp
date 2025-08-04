<template>
	<view class="themeItem">
		<navigator url="" class="box" v-if="!isMore">
			<image class="pic" src="/common/images/image02.jpg" mode="aspectFill"></image>
			<view class="mask">
				1111
			</view>
			<view class="tag">xx前更新</view>
		</navigator>
		<navigator url="" class="box more" v-if="isMore">
			<image class="pic" src="/common/images/leimu1.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" color="#fff"></uni-icons>
				<view class="text">加载更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
defineProps({
	isMore:{
		type:Boolean,
		defalut:false
	}
})
</script>

<style lang="scss" scoped>
.themeItem {
	.box {
		border-radius: 10rpx;
		height: 340rpx;
		overflow: hidden;
		position: relative;
		.pic {
			width: 100%;
			height: 100%;
		}
		.mask {
			width: 100%;
			height: 70rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			background: rgba(0,0,0,0.2);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(20rpx);
			font-weight: 600;
		}
		.tag {
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(250,129,90,0.7);
			backdrop-filter: blur(20rpx); 
			font-size: 22rpx;
			color: #fff;
			padding: 6rpx 10rpx;
			border-radius: 0 0 20rpx 0; //右下角 顺序是左上角 右上角 右下角 左下角 按照顺时针
			transform: scale(0.8);
			transform-origin: left top;
		}
	}
	.box.more {
		
		.mask {
			width: 100%;
			height: 100%;
			flex-direction: column;
		}
		.text {
			font-size: 18rpx;
		}
	}
}
</style>