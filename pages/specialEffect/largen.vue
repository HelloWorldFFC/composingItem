<template>
	<view style="position: relative;">
		
		<largen style="position: absolute;top: 100upx;left: 100upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 100upx;left: 200upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 200upx;left: 100upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		<largen style="position: absolute;top: 200upx;left: 100upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 200upx;left: 200upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 300upx;left: 100upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>

		<largen style="position: absolute;top: 400upx;left: 100upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 400upx;left: 200upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 500upx;left: 100upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		<largen style="position: absolute;top: 600upx;left: 100upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 600upx;left: 200upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 700upx;left: 100upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		
		<largen style="position: absolute;top: 100upx;left: 300upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 100upx;left: 400upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 200upx;left: 300upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		<largen style="position: absolute;top: 200upx;left: 300upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 200upx;left: 400upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 300upx;left: 300upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		<largen style="position: absolute;top: 400upx;left: 300upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 400upx;left: 400upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 500upx;left: 300upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		<largen style="position: absolute;top: 600upx;left: 300upx;" :pulse_width='400' :pulse_height='400' themeColor="#1296db"></largen>
		<largen style="position: absolute;top: 600upx;left: 400upx;" :pulse_width='200' :pulse_height='400' themeColor="#FF00FF"></largen>
		<largen style="position: absolute;top: 700upx;left: 300upx;" :pulse_width='400' :pulse_height='200' themeColor="#00FF00"></largen>
		
		
	</view>


</template>

<script>
	import largen from '@/components/ay-largen/largen.vue';
	import wave1 from '@/components/ay-wave/wave1.vue';
	import wave2 from '@/components/ay-wave/wave2.vue';
	import wave3 from '@/components/ay-wave/wave3.vue';
	import wave4 from '@/components/ay-wave/wave4.vue';
	export default {
		components: {
			largen,
			wave1,
			wave2,
			wave3,
			wave4,
		},

		data() {
			return {

			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
