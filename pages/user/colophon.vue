<template>
	<view >
		<ayrecord v-for="(item, index) in list" :key="index" 
		:list="item.item"
		:bg_index="item.bg"
		:title="item.title"
		:subtitle="item.subtitle">
			
		</ayrecord>
	</view>
</template>

<script>
	import menu from '@/js/show.js';
	import ayrecord from '@/components/ay-record/ay-record.vue';
	import shortcutNav from "@/components/ay-shortcutNav/shortcutNav.vue"
	export default {
		components: {
			ayrecord,
		},
		data() {
			return {
				list:[
					{
						bg:4,
						item:[
							{
								txt:'气泡增加样式'
							},
							{
								txt:'气泡增加样式'
							},
						],
						title:'1.0.1',
						subtitle:'2021-03-12',
					},
					{
						bg:1,
						item:[
							{
								txt:'气泡增加样式'
							},
							{
								txt:'气泡增加样式'
							},
						],
						title:'1.0.0',
						subtitle:'2021-03-12',
					},
				],
			}
		},
		onLoad() {
			let that = this;
			
			that.loadData();
		},
		methods: {
			async loadData() {
				let that = this;
				let res_home = await menu.res_home;
				
				let data = res_home.data;
				
				that.list = data.colophon_list.data;
			},
		}

	}
</script>

<style>
</style>
