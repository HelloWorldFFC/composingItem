<template>
	<view>
		
		<view class="box">
			<view class="a">
				<view class="b"><text>{{title}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			state: {
				type: Number,
				default: 1, //1:可用  2:已用 3：过期 
			},
			
			title: {
				type: String,
				default: '新到',
			},
			
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		methods: {

		}
	};
</script>

<style lang="scss">
	.box{
		background-color: #EEEEEE;
		/* css变量 */
		--main-color: #33CCCC;
	}

	.a {
		display: flex;
		justify-content: center;
		padding: 30rpx 0;
		width: 750rpx;
	}

	.a:before {
		content: "";
		border: 25px solid;
		border-color: #ccc #ccc #ccc transparent;
		margin-top: 10px;
		float: left;
	}

	.a:after {
		content: "";
		border: 25px solid;
		border-color: #ccc transparent #ccc #ccc;
		margin-top: 10px;
		float: left;
	}

	.a text {
		display: inline-block;
		width: 50px;
		line-height: 50px;
		margin-top: 10px;
		text-align: center;
		background: #ccc;
		position: relative;
		transition: background-color 0.5s, margin-top 0.3s;
	}

	.a .b {
		color: #000;
		text-decoration: none;
		height: 60px;
		font-size: 30rpx;
		overflow: hidden;
		float: left;
	}

	.a text:before {
		content: "";
		border-right: 10px solid #000;
		border-bottom: 10px solid #ccc;
		position: absolute;
		top: 50px;
		left: 0px;
	}

	.a text:after {
		content: "";
		border-left: 10px solid #000;
		border-bottom: 10px solid #ccc;
		position: absolute;
		top: 50px;
		right: 0px;
	}

	.a .b:hover text {
		margin-top: 0px;
		background:  var(--main-color);
	}
</style>
