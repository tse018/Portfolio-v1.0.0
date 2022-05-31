export default {
	data() {
		return {
			loading: null,
			result: null,
		}
	},
	
	methods: {
		fetchSanity() {
			this.$store.dispatch('fetchSanityData', this.result)
			this.loading = this.$store.getters.getError;
		},
	},
};