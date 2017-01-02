<template lang="jade">

	footer
		hr
		.row
			.twelve.columns
				ul.inline-list
					li.social-link(v-show="data.linkedin")
						a(v-bind:href="linkedinLink", target="_blank") <i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
					li.social-link(v-show="data.github")
						a(v-bind:href="githubLink", target="_blank") <i class="fa fa-github" aria-hidden="true"></i> Github
					li.social-link(v-show="data.website")
						a(v-bind:href="websiteLink", target="_blank") <i class="fa fa-paper-plane" aria-hidden="true"></i> Website
					li.social-link(v-show="data.behance")
						a(v-bind:href="behanceLink", target="_blank") <i class="fa fa-behance" aria-hidden="true"></i> Behance
					li.social-link(v-show="data.twitter")
						a(v-bind:href="twitterLink", target="_blank") <i class="fa fa-twitter" aria-hidden="true"></i> Twitter

</template>

<script>
export default {
  props: ['data'],
  computed: {
    linkedinLink () {
      return `https://linkedin.com/in/${this.data.linkedin}`
    },
    githubLink () {
      return `https://github.com/${this.data.github}`
    },
    websiteLink () {
      return `${this.data.website}`
    },
    behanceLink () {
      return `https://behance.net/${this.data.behance}`
    },
    twitterLink () {
      return `https://twitter.com/${this.data.twitter}`
    }

  }
}
</script>

<style lang="scss" scoped>
$link-color: #323336;
footer{
padding:20px;
}
.social-link a {
    color: $link-color;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
}
</style>
