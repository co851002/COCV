const introduce = {
  name: 'Christo Oosthuizen',
  jobTitle: 'Front-End Developer',
  livedIn: 'London, UK',
  summary: 'Experienced Front-end Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Web and SPA development using Javascript, HTML, Sass, API\'s, ReactJS, VueJS etc. Strong engineering professional with a Bachelor of Science (B.Sc.) Hons. focused in Computer Software Engineering from University of Greenwich. '
}

const experiences = [
  {
    workAt: 'Vibrant Media',
    position: 'Creative Developer',
    duration: 'Nov, 2015 – Current',
    description: 'Working for an international Ad tech company as a Front-End Developer within an Agile team of software engineers, designers, campaign managers and other stakeholders.',
    highlights: [
      'Design and build bespoke cross-browser CPC and CPE units that fits specific creative requirements and functionality using vanilla JavaScript, HTML5 and CSS3 for desktop, tablet and mobile devices.',
      'Using the latest JS frameworks to build internal tools to optimize team workflow while maintaining internal API\'s and adding new functionality when needed. Integrate bespoke and custom ad units with 3rd party social media API\'s.',
      'Attend client meetings to advise on the scope and functionality of current products and discuss custom solutions to meet the advertisers KPI\'s before designing and building bespoke HTML banners, home page takeovers, websites or microsites ',
      'Create bespoke solutions to integrate with other technology partners (DoubleClick, Sizemek  Celtra, Criteo)',
      'Advise and train other departments on new ad tech products and frameworks while supporting international teams in Germany and USA'
    ]
  },
  {
    workAt: 'School Website - Sitewrights ',
    position: 'Front-End Developer',
    duration: 'Apr, 2015 – Nov, 2015',
    description: 'Design & Build bespoke websites for top independant schools in The UK and abroad',
    highlights: [
      'Design bespoke Adobe Photoshop web designs based on client requirements and branding guidelines.',
      'Converting PSD designs to responsive HTML5 CSS3 sites.',
      'Building HTML5 CSS3 JavaScript AJAX pages using jQuery and css frameworks.',
      'Integrating static website builds with a custom .NET CMS.'
    ]
  },
  {
    workAt: 'Freelance Web Developer',
    position: 'Web Developer',
    duration: 'Apr, 2012 – Apr, 2015',
    description: 'Various freelance projects for agencies, magazines and professionals.',
    highlights: [
      'Management of the complete web development project lifecycle. Design, build maintenance and upgrades',
      'SEO, Google Analytics and AdWords campaigns and website optimization',
      'Wordpress site integration',
      'Branding, business cards, flyers, landing pages, email templates, design mock-ups etc.'
    ]
  }
]

const educations = [
  {
    educatedAt: 'University of Greenwich',
    title: 'BSc (Hons) 2:1 - Software Engineering',
    duration: '2011 – 2013',
    description: 'Object Orientated Software Development, E-commerce and Web Engineering, Database Design and Implementation, IT Project Management, Distributed Information Systems, Project (Video Streaming App and Build Spec)',
    highlights: [
      'A broad degree focusing on every aspect of the software developmwnt lifecycle'
    ]
  },
  {
    educatedAt: 'BCS Diploma',
    title: 'Software Engineering',
    duration: '2010 – 2011',
    description: 'Software Engineering, Database Systems, Project Management, Project (International Banking Application)'
  },
  {
    educatedAt: 'BCS Certificate',
    title: 'Information Systems',
    duration: '2008 – 2009',
    description: 'Database Design and Implementation, Information Systems Engineering'
  }
]

const projects = [
  {
    title: 'Project 1',
    meta: 'Propulsion Engineer',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    images: [
      {
        thumbnail: 'https://vuejs.org/images/logo.png',
        original: 'https://placehold.it/900x900'
      },
      {
        thumbnail: 'https://vuejs.org/images/logo.png',
        original: 'https://placehold.it/900x900'
      },
      {
        thumbnail: 'https://vuejs.org/images/logo.png',
        original: 'https://placehold.it/900x900'
      }
    ]
  },
  {
    title: 'Project 1',
    meta: 'Propulsion Engineer',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    images: [
      {
        thumbnail: 'https://vuejs.org/images/logo.png',
        original: 'https://placehold.it/900x900'
      },
      {
        thumbnail: 'https://vuejs.org/images/logo.png',
        original: 'https://placehold.it/900x900'
      },
      {
        thumbnail: 'https://vuejs.org/images/logo.png',
        original: 'https://placehold.it/900x900'
      }
    ]
  }
]

const footerData = {
  linkedin: 'coosthuizen85',
  github: 'co851002',
  website: 'https://co851002.github.io',
  behance: 'co851002',
  twitter: 'co8510022'
}

const skills = [
  { name: 'Javascript' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'SASS' },
  { name: 'React.js' },
  { name: 'Vue.js' },
  { name: 'Redux' },
  { name: 'ES6' },
  { name: 'Babel' },
  { name: 'Webpack' },
  { name: 'Redux' },
  { name: 'Git' }
]

export default {
  introduce: introduce,
  experiences: experiences,
  educations: educations,
  projects: projects,
  skills: skills,
  footerData: footerData
}
