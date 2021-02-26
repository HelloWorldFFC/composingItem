<template>
	<view>
		<view class="box">
			<view class="box-item" v-for="(item, index) in list" :key="index">
				<view class="ct-time">{{item.createTime}}</view>

				<view class="cf-hengSpace-B">
					<view></view>
					<view class="ct">
						<view>{{item.content}}</view>
					</view>

				</view>

				<view class="cf-hengSpace-B">


					<view v-if="item.replyStatus" class="reply-ct">
						<view>{{item.replyContent}}</view>
					</view>
					<view v-else>
						<view></view>
					</view>
					<view></view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.cf-hengSpace-B {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.box {
		.box-item {
			margin: 20upx;
			padding-bottom: 40upx;
			// border-bottom: 1px solid #d8d8d8;
		}

		.ct-time {
			padding-top: 40upx;
			text-align: center;
			color: #999999;
		}

		.ct {
			margin-top: 40upx;
			// float: right;
			max-width: 400upx;
			padding: 20upx;
			border-radius: 20upx;
			color: #FFFFFF;
			background-color: #ef8200;
		}

		.reply-ct {
			// float: left;
			margin-top: 40upx;
			max-width: 400upx;
			padding: 20upx;
			border-radius: 20upx;
			background-color: #d8d8d8;
			// color: #FFFFFF;
			// background-color: #01A0FC;
		}

		.reply-ct-w {
			// float: left;
			padding: 20upx;
			border-radius: 20upx;


		}
</style>
