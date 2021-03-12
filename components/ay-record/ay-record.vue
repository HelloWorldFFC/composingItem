<template>
	<view class="cu-timeline">
		<view class="cu-item text-red">
			<view class="content " :class="'bg-00'+bg_index">
				<view class="cu-capsule radius">
					<view class="cu-tag bg-white">{{title}}</view>
					<view class="cu-tag line-white">{{subtitle}}</view>
				</view>
				<view class="margin-top ">
					<view v-for="(item, index) in list" :key="index">{{index+1}}、{{item.txt}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		props: {
			bg_index: {
				type: Number,
				default: 4,
			},
			list: {
				type: Array,
				default () {
					return []
				}
			},
			title: {
				type: String,
				default: '1.0.0',
			},
			subtitle: {
				type: String,
				default: '2021-03-12',
			},
		},

		data() {
			return {

			};
		},

		methods: {

		}
	};
</script>

<style lang="scss">
	.bg-001 {
		background: linear-gradient(to bottom right, #d8ca9f, #caca00);
		color: #FFFFFF;
	}

	.bg-002 {
		background: linear-gradient(to bottom right, #a4d6e2, #a8efd2);
		color: #FFFFFF;
	}

	.bg-003 {
		background: linear-gradient(to bottom right, #ffd060, #ffc290);
		color: #FFFFFF;
	}

	.bg-004 {
		background: linear-gradient(to bottom right, #bc87d1, #ffaaff);
		color: #FFFFFF;
	}

	.bg-005 {
		background: linear-gradient(to bottom right, #ff9238, #ff8688);
		color: #FFFFFF;
	}

	.bg-006 {
		background: linear-gradient(to bottom right, #a3e5b0, #94ef9a);
		color: #FFFFFF;
	}

	.bg-007 {
		background: linear-gradient(to bottom right, #83deff, #55c4ff);
		color: #FFFFFF;
	}

	.bg-008 {
		background: linear-gradient(to bottom right, #7e9df0, #6a74ff);
		color: #FFFFFF;
	}
</style>
