// Student activities, volunteering, and extracurriculars.
// Availability varies hugely by school and country — treat these as categories
// to go looking for locally rather than as a directory of real openings.

const activityList = [
  {
    id: 'peer-tutoring',
    title: 'Peer Tutoring',
    icon: '📖',
    type: 'Volunteering',
    commitment: '1–2 hrs/week',
    cost: 'Free',
    description:
      'Help younger or struggling students with a subject you are strong in. It is the fastest way to find out whether you actually understand something — explaining a topic exposes the gaps in your own knowledge immediately.',
    whatYouGain: ['Explaining complex ideas simply', 'Patience', 'Subject mastery'],
    howToStart: 'Ask a teacher or your school’s learning support office — most run a scheme already.',
    tags: ['Teaching', 'Communication', 'Low commitment'],
  },
  {
    id: 'food-bank',
    title: 'Food Bank & Soup Kitchen',
    icon: '🥫',
    type: 'Volunteering',
    commitment: '2–4 hrs/week',
    cost: 'Free',
    description:
      'Sort donations, pack parcels, or serve meals. The shifts are physical and unglamorous, and they put you in direct contact with the reality of local poverty in a way that reading about it does not.',
    whatYouGain: ['Teamwork under pressure', 'Perspective', 'Reliability'],
    howToStart: 'Search for your nearest food bank and ask about their volunteer induction.',
    tags: ['Community', 'Social impact'],
  },
  {
    id: 'conservation-volunteering',
    title: 'Conservation & Clean-Up Days',
    icon: '🌳',
    type: 'Volunteering',
    commitment: 'Occasional weekends',
    cost: 'Free',
    description:
      'Tree planting, beach and river clean-ups, habitat restoration, or wildlife surveys. Good if you want something outdoors and physical that does not need a weekly commitment.',
    whatYouGain: ['Field work experience', 'Ecological awareness', 'Practical skills'],
    howToStart: 'Look for a local conservation trust, park authority, or river group running work days.',
    tags: ['Environment', 'Outdoors', 'Flexible'],
  },
  {
    id: 'hospital-volunteering',
    title: 'Hospital & Care Home Volunteering',
    icon: '🏥',
    type: 'Volunteering',
    commitment: '3–4 hrs/week',
    cost: 'Free',
    description:
      'Ward support, befriending patients, or helping at reception. Close to essential if you are applying to medicine, nursing, or allied health — admissions tutors want evidence you have seen care settings up close.',
    whatYouGain: ['Patient communication', 'Emotional resilience', 'Healthcare exposure'],
    howToStart: 'Apply through the hospital’s volunteer services; expect a background check and a wait.',
    tags: ['Healthcare', 'Pre-med', 'Caring'],
  },
  {
    id: 'animal-shelter',
    title: 'Animal Shelter Volunteering',
    icon: '🐕',
    type: 'Volunteering',
    commitment: '2–4 hrs/week',
    cost: 'Free',
    description:
      'Walking, feeding, cleaning, and socialising animals waiting for homes. Genuinely useful if you are considering veterinary science, and shelters are usually glad of consistent help.',
    whatYouGain: ['Animal handling', 'Responsibility', 'Routine discipline'],
    howToStart: 'Contact a local shelter or rescue directly — many have minimum age requirements.',
    tags: ['Animals', 'Pre-vet', 'Hands-on'],
  },
  {
    id: 'charity-fundraising',
    title: 'Fundraising & Charity Organising',
    icon: '🎗️',
    type: 'Volunteering',
    commitment: 'Project-based',
    cost: 'Free',
    description:
      'Plan and run an event that raises money for a cause. Organising one yourself teaches far more than helping at someone else’s — budgets, promotion, logistics, and asking people for money.',
    whatYouGain: ['Event planning', 'Persuasion', 'Budgeting'],
    howToStart: 'Pick a cause, set a realistic target, and get your school to sponsor the venue.',
    tags: ['Leadership', 'Events', 'Social impact'],
  },
  {
    id: 'debate-club',
    title: 'Debate Club',
    icon: '🗣️',
    type: 'Clubs & Societies',
    commitment: '2 hrs/week plus competitions',
    cost: 'Free–Low',
    description:
      'Argue assigned positions under time pressure, often ones you disagree with. It builds the ability to think on your feet and to steelman an opposing case, which is exactly what law and policy work demands.',
    whatYouGain: ['Public speaking', 'Argument construction', 'Quick thinking'],
    howToStart: 'Join your school society, or start one — you need two people and a motion.',
    tags: ['Speaking', 'Pre-law', 'Critical thinking'],
  },
  {
    id: 'model-un',
    title: 'Model United Nations',
    icon: '🌐',
    type: 'Clubs & Societies',
    commitment: '2 hrs/week plus conferences',
    cost: 'Low–Medium (conference fees)',
    description:
      'Represent a country in simulated UN committees, researching its actual positions and negotiating resolutions. Strong preparation for politics, international relations, and law — and the research load is real.',
    whatYouGain: ['Diplomacy & negotiation', 'Research', 'Formal writing'],
    howToStart: 'Join the school delegation, or attend a beginner-friendly regional conference.',
    tags: ['Politics', 'Research', 'Speaking'],
  },
  {
    id: 'robotics-club',
    title: 'Robotics & Engineering Club',
    icon: '🤖',
    type: 'Clubs & Societies',
    commitment: '3–5 hrs/week',
    cost: 'Low–Medium (parts and kits)',
    description:
      'Design, build, and program a robot, usually toward a competition deadline. It is one of the few school activities where you experience the full engineering cycle including the part where it does not work.',
    whatYouGain: ['Hands-on engineering', 'Debugging', 'Team collaboration'],
    howToStart: 'Join the team, or ask a science teacher about starting one with a starter kit.',
    tags: ['Engineering', 'STEM', 'Building'],
  },
  {
    id: 'coding-club',
    title: 'Coding Club',
    icon: '⌨️',
    type: 'Clubs & Societies',
    commitment: '2 hrs/week',
    cost: 'Free',
    description:
      'Build projects with other people learning to program. The advantage over learning alone is having someone to get unstuck with — most beginners quit at a bug they could not solve, not at a concept.',
    whatYouGain: ['Programming', 'Version control', 'Collaboration'],
    howToStart: 'All you need is laptops and a free online curriculum to work through together.',
    tags: ['Programming', 'STEM', 'Projects'],
  },
  {
    id: 'student-newspaper',
    title: 'Student Newspaper or Magazine',
    icon: '📰',
    type: 'Clubs & Societies',
    commitment: '2–4 hrs/week',
    cost: 'Free',
    description:
      'Report, write, edit, or design for a student publication. It produces something rare and valuable: a portfolio of published work with your name on it, which matters more than any grade for writing careers.',
    whatYouGain: ['Writing to deadline', 'Interviewing', 'Editing'],
    howToStart: 'Pitch a single article first — most editors will take a keen new writer.',
    tags: ['Writing', 'Journalism', 'Portfolio'],
  },
  {
    id: 'environmental-society',
    title: 'Environmental Society',
    icon: '♻️',
    type: 'Clubs & Societies',
    commitment: '1–2 hrs/week',
    cost: 'Free',
    description:
      'Campaign for changes on your own campus — waste, energy, transport, food. Working on a small system you can actually influence teaches more about how change happens than campaigning in the abstract.',
    whatYouGain: ['Campaign strategy', 'Persuading institutions', 'Project follow-through'],
    howToStart: 'Audit one thing your school wastes, then propose a specific fix with numbers.',
    tags: ['Environment', 'Advocacy', 'Low commitment'],
  },
  {
    id: 'hackathon',
    title: 'Hackathons',
    icon: '💡',
    type: 'Competitions',
    commitment: 'Weekend events',
    cost: 'Usually free (often catered)',
    description:
      'Build a working prototype in 24–48 hours with a small team. Nobody finishes what they planned, and that is the lesson — you learn to cut scope hard and ship something that demos.',
    whatYouGain: ['Rapid prototyping', 'Scoping', 'Pitching'],
    howToStart: 'Find a beginner-friendly event; many explicitly reserve places for first-timers.',
    tags: ['Programming', 'Teamwork', 'Intensive'],
  },
  {
    id: 'science-olympiad',
    title: 'Science & Maths Olympiads',
    icon: '🥇',
    type: 'Competitions',
    commitment: 'Seasonal, heavy near contests',
    cost: 'Free–Low',
    description:
      'Compete on problems well beyond the syllabus. Placing well is a genuine signal to selective admissions, but the real benefit is being forced to sit with a hard problem for an hour without giving up.',
    whatYouGain: ['Deep problem solving', 'Exam temperament', 'Subject depth'],
    howToStart: 'Ask a science or maths teacher which national competitions your school enters.',
    tags: ['STEM', 'Academic', 'Competitive'],
  },
  {
    id: 'case-competition',
    title: 'Business Case Competitions',
    icon: '💼',
    type: 'Competitions',
    commitment: 'Project-based',
    cost: 'Free–Low',
    description:
      'Analyse a real business problem as a team and present recommendations to judges. It is the closest school-level simulation of consulting work, right down to building the slide deck at midnight.',
    whatYouGain: ['Structured analysis', 'Presenting', 'Working to a brief'],
    howToStart: 'Look for competitions run by universities and firms — many accept school teams.',
    tags: ['Business', 'Presenting', 'Teamwork'],
  },
  {
    id: 'student-government',
    title: 'Student Government',
    icon: '🏛️',
    type: 'Leadership',
    commitment: '2–4 hrs/week',
    cost: 'Free',
    description:
      'Get elected to represent students and work with staff on policy. The useful part is learning how slowly institutions move and how to build a case that survives a committee.',
    whatYouGain: ['Representing others', 'Negotiation', 'Running meetings'],
    howToStart: 'Stand in the next election with one specific, achievable promise.',
    tags: ['Leadership', 'Politics', 'Advocacy'],
  },
  {
    id: 'club-founder',
    title: 'Start Your Own Club',
    icon: '🚩',
    type: 'Leadership',
    commitment: '2–5 hrs/week',
    cost: 'Free–Low',
    description:
      'Found a society around something no existing club covers. It is harder than joining one and worth far more — you own recruitment, funding, and keeping people showing up in week eight.',
    whatYouGain: ['Initiative', 'Recruiting & retaining people', 'Organisation'],
    howToStart: 'Find a staff sponsor, five interested people, and a regular room booking.',
    tags: ['Leadership', 'Entrepreneurial', 'Standout'],
  },
  {
    id: 'peer-mentor',
    title: 'Peer Mentor or Orientation Leader',
    icon: '🧭',
    type: 'Leadership',
    commitment: '1–3 hrs/week',
    cost: 'Free',
    description:
      'Support new or younger students through their first term. Mentoring someone through a transition you have already made is a low-barrier way into real responsibility.',
    whatYouGain: ['Mentoring', 'Active listening', 'Approachability'],
    howToStart: 'Applications usually open near the end of the academic year — watch for them.',
    tags: ['Leadership', 'Community', 'Low commitment'],
  },
  {
    id: 'internship',
    title: 'Internship or Work Placement',
    icon: '🏢',
    type: 'Work Experience',
    commitment: 'Full-time in holidays',
    cost: 'Free (often paid)',
    description:
      'Spend a few weeks inside an actual workplace. The most valuable outcome is often negative — discovering you would hate a career before committing four years of study to it.',
    whatYouGain: ['Workplace norms', 'Industry insight', 'Professional contacts'],
    howToStart: 'Email small local employers directly; they answer far more often than large ones.',
    tags: ['Career testing', 'Professional', 'Holidays'],
  },
  {
    id: 'research-assistant',
    title: 'Research Assistant Work',
    icon: '🔬',
    type: 'Work Experience',
    commitment: 'Varies, often summer',
    cost: 'Free (sometimes paid)',
    description:
      'Help a university lab with data collection, literature searches, or sample processing. It is the clearest way to find out whether research life — slow, repetitive, occasionally thrilling — suits you.',
    whatYouGain: ['Research methods', 'Lab or data skills', 'Academic references'],
    howToStart: 'Email a lab whose work genuinely interests you, referencing a specific paper.',
    tags: ['Research', 'Academic', 'Competitive'],
  },
  {
    id: 'part-time-job',
    title: 'Part-Time Job',
    icon: '🧾',
    type: 'Work Experience',
    commitment: '8–16 hrs/week',
    cost: 'Paid',
    description:
      'Retail, hospitality, or service work. It is undervalued on applications but builds things no club does: dealing with difficult people, showing up when you do not feel like it, and handling your own money.',
    whatYouGain: ['Customer handling', 'Reliability', 'Financial independence'],
    howToStart: 'Apply widely and in person where you can; availability matters more than experience.',
    tags: ['Paid', 'Responsibility', 'Real world'],
  },
  {
    id: 'theatre-production',
    title: 'Theatre & Drama Production',
    icon: '🎭',
    type: 'Creative & Arts',
    commitment: 'Intense near performances',
    cost: 'Free–Low',
    description:
      'Act, direct, or work backstage on lighting, sound, and set. Technical crew roles are chronically short of volunteers and teach genuinely transferable production skills.',
    whatYouGain: ['Performing or production craft', 'Collaboration', 'Handling pressure'],
    howToStart: 'Audition, or offer to help backstage — crews almost always need more hands.',
    tags: ['Creative', 'Teamwork', 'Performance'],
  },
  {
    id: 'music-ensemble',
    title: 'Band, Choir, or Orchestra',
    icon: '🎻',
    type: 'Creative & Arts',
    commitment: '2–4 hrs/week',
    cost: 'Free–Medium (instrument)',
    description:
      'Play or sing as part of a group. Ensemble playing is a distinct skill from solo practice — you are listening and adjusting to others constantly, which is why it reads as teamwork.',
    whatYouGain: ['Discipline', 'Listening', 'Performing under pressure'],
    howToStart: 'Most school ensembles will take beginners; ask the music department about loan instruments.',
    tags: ['Creative', 'Music', 'Discipline'],
  },
  {
    id: 'sports-team',
    title: 'Sports Team or Club',
    icon: '⚽',
    type: 'Sports & Wellbeing',
    commitment: '3–6 hrs/week',
    cost: 'Free–Medium (kit and fees)',
    description:
      'Train and compete with a team. Beyond fitness, regular training is one of the more reliable protections against the stress of exam years — the structure helps as much as the exercise.',
    whatYouGain: ['Teamwork', 'Resilience', 'Time management'],
    howToStart: 'Turn up to a trial or a beginners’ session — most clubs run open sessions early in term.',
    tags: ['Fitness', 'Teamwork', 'Wellbeing'],
  },
]

// Browse order, matching the pattern in majors.js and careers.js: append an
// activity anywhere above and it still lands beside its type.
const typeOrder = [
  'Volunteering',
  'Clubs & Societies',
  'Competitions',
  'Leadership',
  'Work Experience',
  'Creative & Arts',
  'Sports & Wellbeing',
]

const typeRank = (type) => {
  const index = typeOrder.indexOf(type)
  return index === -1 ? typeOrder.length : index
}

export const activities = [...activityList].sort((a, b) => typeRank(a.type) - typeRank(b.type))

export const activityTypes = [...new Set(activities.map((a) => a.type))].sort()
