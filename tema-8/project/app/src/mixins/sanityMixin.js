export default {
	data() {
		return {
			loading: null,
			result: null,
		}
	},
	
	methods: {
		fetchSanity() {
			this.$store.dispatch('fectchSanityData', this.result)
			this.loading = this.$store.getters.getError;
		},
	},
};