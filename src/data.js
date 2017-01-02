const introduce = {
  name: 'Christo Oosthuizen',
  jobTitle: 'Front-End Developer',
  livedIn: 'London, UK',
  summary: 'Experienced Front-end Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Web and SPA development using Javascript, HTML, SASS, REST API\'s, ReactJS, VueJS etc. Strong engineering professional with a Bachelor of Science (B.Sc.) Hons. 2:1 focused in Computer Software Engineering from the University of Greenwich. Currently looking to strenghten his Javascript skills and further his career toward a Fullstack Developer by building meaningful apps using the latest JS syntax, tools and frameworks.'
}

const experiences = [
  {
    workAt: 'Vibrant Media',
    position: 'Creative Developer',
    duration: 'Nov, 2015 – Current',
    description: 'Working for an international Ad tech company as a Front-End Developer within an Agile team of software engineers, designers, campaign managers and other stakeholders.',
    highlights: [
      'Attend client meetings to advise on the scope and functionality of current products and discuss custom solutions to meet the advertisers KPI\'s',
      'Design and build bespoke cross-browser, responsive adverts and micro-sites that fits specific creative requirements and functionality using vanilla JavaScript, HTML5, CSS3 and jQuery. Integrate bespoke and custom ad units with 3rd party social media API\'s.',
      'Create bespoke solutions to integrate with other technology partners (DoubleClick, Sizemek, Celtra, Criteo)',
      'Advise and train other departments on new ad tech products and frameworks while supporting international teams in Germany and USA',
      'Using the latest JS frameworks to build internal tools to optimize team workflow while maintaining internal API\'s and adding new functionality.',
      'Routine maintenance and upgrades to company website (Wordpress)'
    ]
  },
  {
    workAt: 'School Website - Sitewrights ',
    position: 'Front-End Developer',
    duration: 'Apr, 2015 – Nov, 2015',
    description: 'Design & Build websites for top independant schools in The UK and abroad',
    highlights: [
      'Bespoke website designs with Adobe Photoshop based on client requirements and branding guidelines for top UK and International independant shools',
      'Converting flat designs to responsive HTML5 CSS3 sites.',
      'Building HTML5 CSS3 JavaScript AJAX pages using jQuery and CSS frameworks. Integrating static website builds with a custom .NET CMS.'
    ]
  },
  {
    workAt: 'Freelance Web Developer',
    position: 'Web Developer',
    duration: 'Apr, 2012 – Apr, 2015',
    description: 'Various freelance projects for agencies, magazines and professionals.',
    highlights: [
      'Management of the complete web development project lifecycle. Design, build maintenance and upgrades',
      'SEO, Google Analytics, AdWords campaigns and website optimization',
      'Wordpress site integration',
      'Branding, business cards, posters, landing pages, email templates, design mock-ups etc.'
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
    title: 'Mosaic Product Upgrade - Vibrant Media',
    meta: 'Creative Developer',
    description: 'Responsibilities included: Rebuild legacy "Mosaic" product to enable communication with their new ad-server and CRM. I was involved within the design, build, QA and documentation of this product and templatising for faster campaign setup',
    images: [
      {
        thumbnail: 'https://co851002.github.io/COCV/src/assets/mosaic1a.png',
        original: 'https://co851002.github.io/COCV/src/assets/mosaic1b.png'
      },
      {
        thumbnail: 'https://co851002.github.io/COCV/src/assets/mosaic2a.png',
        original: 'https://co851002.github.io/COCV/src/assets/mosaic2b.png'
      },
      {
        thumbnail: 'https://co851002.github.io/COCV/src/assets/mosaic3a.png',
        original: 'https://co851002.github.io/COCV/src/assets/mosaic3b.png'
      }
    ]
  },
  {
    title: 'In-View Product Launch - Vibrant Media',
    meta: 'Creative Developer',
    description: 'Responsibilities included: Design, build and documentation for a template to be used by campaign management for the launch of the new "In-View" product. Continuous upgrades to add additional functionality ie. video tracking, additional billing methods, rich media integration etc. ',
    images: [
      {
        thumbnail: 'https://co851002.github.io/COCV/src/assets/inview1a.png',
        original: 'https://co851002.github.io/COCV/src/assets/inview1b.png'
      },
      {
        thumbnail: 'https://co851002.github.io/COCV/src/assets/inview2a.png',
        original: 'https://co851002.github.io/COCV/src/assets/inview2b.png'
      },
      {
        thumbnail: 'https://co851002.github.io/COCV/src/assets/inview3a.png',
        original: 'https://co851002.github.io/COCV/src/assets/inview3b.png'
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
