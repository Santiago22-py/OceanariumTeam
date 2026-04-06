const teamMembers = [
  // Replace placeholder values here with real names, images, and LinkedIn URLs.
  {
    name: 'Rogerio Brugnari',
    role: 'Frontend experience for admins',
    linkedin: 'https://www.linkedin.com/in/rogerio-bento/',
    image: './images/rogerio.jpg',
    imageLabel: 'TM1',
  },
  {
    name: 'Joao Santiago',
    role: 'Project Manager and backend development',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-santiago/',
    image: './images/joao.png',
    imageLabel: 'TM2',
  },
  {
    name: 'Team Member 03',
    role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    linkedin: 'https://www.linkedin.com/in/team-member-03/',
    image: '',
    imageLabel: 'TM3',
  },
  {
    name: 'Team Member 04',
    role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    linkedin: 'https://www.linkedin.com/in/team-member-04/',
    image: '',
    imageLabel: 'TM4',
  },
  {
    name: 'Team Member 05',
    role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    linkedin: 'https://www.linkedin.com/in/team-member-05/',
    image: '',
    imageLabel: 'TM5',
  },
  {
    name: 'Team Member 06',
    role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    linkedin: 'https://www.linkedin.com/in/team-member-06/',
    image: '',
    imageLabel: 'TM6',
  },
]

const createPlaceholderPhoto = (label) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CAF0F8" />
          <stop offset="100%" stop-color="#90E0EF" />
        </linearGradient>
        <linearGradient id="orb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00B4D8" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#0077B6" stop-opacity="0.92" />
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="42" fill="url(#bg)" />
      <circle cx="182" cy="62" r="28" fill="#ffffff" fill-opacity="0.45" />
      <circle cx="120" cy="98" r="52" fill="url(#orb)" />
      <path d="M52 202c18-34 46-50 68-50s50 16 68 50" fill="#ffffff" fill-opacity="0.82" />
      <text x="120" y="216" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-size="28" font-weight="700" fill="#0B486B">${label}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const teamGrid = document.getElementById('team-grid')

teamMembers.forEach((member, index) => {
  const imageSrc = member.image || createPlaceholderPhoto(member.imageLabel)

  const card = document.createElement('a')
  card.className = 'team-card'
  card.href = member.linkedin
  card.target = '_blank'
  card.rel = 'noreferrer'
  card.style.animationDelay = `${index * 90}ms`
  card.setAttribute('aria-label', `Open LinkedIn profile for ${member.name}`)

  card.innerHTML = `
    <div class="photo-shell">
      <img class="photo" src="${imageSrc}" alt="Portrait for ${member.name}">
    </div>
    <div class="card-body">
      <h2 class="member-name">${member.name}</h2>
      <p class="member-role">${member.role}</p>
      <span class="member-link">View LinkedIn</span>
    </div>
  `

  teamGrid.appendChild(card)
})