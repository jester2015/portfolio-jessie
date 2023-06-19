const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jessies.absenttech.com',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jessie Smith',
  role: 'Software Developer',
  description:
    'Welcome to my portfolio! I am Jessie Smith, an enthusiastic software developer with a deep passion for learning, exploring, and creating innovative solutions. With eight years of experience in the field, I have honed my skills and developed a strong foundation in various areas of software development.',
  resume:
    'https://docs.google.com/document/d/1hBZ2x5pPAfT5f1Hp8LuqFOlco6ykiDaH_u0eWIk1Gfc/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jessieeugenesmith/',
    github: 'https://github.com/jester2015',
    email: 'jessieeugenejr@gmail.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'QuestionMe?',
    description:
      'QuestionMe: The Ultimate Question Game Challenge your knowledge and wit with QuestionMe! Dive into a world of endless questions across various topics, all powered by the cutting-edge technologies of Angular and Node.js',
    stack: ['SASS', 'TypeScript', 'Angular', 'Nodejs', 'MongoDB', 'Nx'],
    sourceCode: 'https://github.com/jester2015/angular-questionme',
  },
]

const skills = [
  'Angular',
  'HTML/CSS',
  'JavaScript',
  'GIT',
  'Bamboo',
  'Java',
  'C#',
  'Quarkus',
  'OpenShift',
  'Object-Oriented Design',
  'NativeScript',
  'Mongo',
  'CI/CD',
  'Open API design',
  'Keycloak',
  'Selenium',
  'Xamarin',
  'Node.js',
  'Tailwinds',
  'React',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jessiesmith@absenthome.com',
}

export { header, about, projects, skills, contact }
