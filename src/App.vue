<template  lang="jade">

	#app.container
		Introduce(:introduce="resume.introduce")
		Experiences(:experiences="resume.experiences")
		Education(:educations="resume.educations")
		Skills(:skills="resume.skills")
		FooterSection(:data="resume.footerData")

</template>

<script>
import Introduce from './components/Introduce'
import Experiences from './components/Experiences'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FooterSection from './components/FooterSection'
import ResumeData from './data'

export default {
  name: 'app',
  components: {
    Introduce,
    Experiences,
    Education,
    Skills,
    Contact,
    FooterSection
  },
  data () {
    return {
      resume: ResumeData
    }
  }
}
</script>

<style lang="scss">@import '../node_modules/slender-skeleton-scss/scss/skeleton.scss';
$header-color: #c9cccf;
$list-header-color: #323336;
$list-meta-color: #96999b;
$list-description-color: #323336;

.container {
    max-width: 90rem;
    font-size: 1.8rem;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.section {
    margin-bottom: 5rem;
    .section-header {
        user-select: none;
        pointer-events: none;
        color: $header-color;
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    li {
        list-style-type: none;
    }

    .list-item {
        margin-bottom: 3rem;
        .list-header {
            color: $list-header-color;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .list-meta {
            color: $list-meta-color;
            font-weight: normal;
            margin: 0;
            padding: 0;
        }
        .list-description {
            color: $list-description-color;
            font-weight: normal;
            margin-bottom: 1rem;
        }
        .list-highlight {
            padding-left: 2rem;
        }
    }
}
@page {
    size: A4;
    .section {
        margin-bottom: 1rem;
    }
}
</style>
