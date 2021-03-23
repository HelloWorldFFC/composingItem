<template>
	<view>
		
		<view class="box-bg-svn">
			<view class="a-bg-svn">
				<view class="b-bg-svn"><text>{{title}}</text></view>
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
	.box-bg-svn{
		background-color: #EEEEEE;
		/* css变量 */
		--main-color: #33CCCC;
	}

	.a-bg-svn {
		display: flex;
		justify-content: center;
		padding: 30rpx 0;
		width: 750rpx;
	}

	.a-bg-svn:before {
		content: "";
		border: 25px solid;
		border-color: #ccc #ccc #ccc transparent;
		margin-top: 10px;
		float: left;
	}

	.a-bg-svn:after {
		content: "";
		border: 25px solid;
		border-color: #ccc transparent #ccc #ccc;
		margin-top: 10px;
		float: left;
	}

	.a-bg-svn text {
		display: inline-block;
		width: 50px;
		line-height: 50px;
		margin-top: 10px;
		text-align: center;
		background: #ccc;
		position: relative;
		transition: background-color 0.5s, margin-top 0.3s;
	}

	.a-bg-svn .b-bg-svn {
		color: #000;
		text-decoration: none;
		height: 60px;
		font-size: 30rpx;
		overflow: hidden;
		float: left;
	}

	.a-bg-svn text:before {
		content: "";
		border-right: 10px solid #000;
		border-bottom: 10px solid #ccc;
		position: absolute;
		top: 50px;
		left: 0px;
	}

	.a-bg-svn text:after {
		content: "";
		border-left: 10px solid #000;
		border-bottom: 10px solid #ccc;
		position: absolute;
		top: 50px;
		right: 0px;
	}

	.a-bg-svn .b-bg-svn:hover text {
		margin-top: 0px;
		background:  var(--main-color);
	}
</style>
