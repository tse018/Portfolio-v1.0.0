import sanity from '../sanity.js';

export default {
	data() {
		return {
			loading: true,
			result: [],
		}
	},

	methods: {
		async sanityFetchPortfolio(query) {
			this.result = await sanity.fetch(query);
			this.$store.dispatch('addPortfolioContent', this.result);

			this.loading = false;

			/* about */
			const about = this.result.filter(c => {
				return c._type.includes('about');
			});

			this.$store.dispatch('addAboutContent', about);

			/* Education */
			const education = this.result.filter(d => {
				return d._type.includes('education');
			})

			this.$store.dispatch('addEducationContent', education);

			/* TechStack */
			const techStack = this.result.filter(t => {
				return t._type.includes('tech');
			})

			this.$store.dispatch('addTechContent', techStack);

			/* projects */
			const projects = this.result.filter(p => {
				return p._type.includes('project');
			})

			this.$store.dispatch('addProjectsContent', projects);
		},
	}
}