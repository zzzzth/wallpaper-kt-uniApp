<template>
	<view class="classLayout">
		分类页面
		<view class="classify">
			<theme-item v-for="item in 16">
				<!-- <Image src="/common/images/leimu1.jpg"></Image> -->
			</theme-item>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.classify {
		display: grid;
		grid-template-columns: repeat(3,1fr);
		padding: 30rpx;
		gap: 15rpx;
	}
	       
</style>
