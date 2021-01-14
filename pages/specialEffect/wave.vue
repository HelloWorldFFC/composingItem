<template>
	<view>
		<wave1 :width='600' :height='600' ></wave1>
		<wave2></wave2>
		<wave3></wave3>
		<wave4></wave4>
	</view>


</template>

<script>
	import wave1 from '@/components/ay-wave/wave1.vue';
	import wave2 from '@/components/ay-wave/wave2.vue';
	import wave3 from '@/components/ay-wave/wave3.vue';
	import wave4 from '@/components/ay-wave/wave4.vue';
	export default {
		components: {
			wave1,
			wave2,
			wave3,
			wave4,
		},

		data() {
			return {

			}
		},
		
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
