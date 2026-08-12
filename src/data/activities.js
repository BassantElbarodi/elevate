// Egypt-focused student activities and volunteering (compiled August 2026).
//
// Named organisations were checked against their own volunteering pages, but
// programmes open and close and intake pauses between campaigns — always
// confirm on the organisation's own site before counting on a placement.
// Links are stored clean: any utm_* / fbclid click-tracking has been stripped.

const activityList = [
  {
    id: 'baheya',
    title: 'Baheya Foundation',
    icon: '🎗️',
    type: 'Volunteering',
    commitment: 'Shift-based, arranged with the hospital',
    cost: 'Free',
    description:
      'Baheya treats breast cancer free of charge, and its volunteer programme is about companionship as much as logistics — sitting with patients through treatment, helping them find their way around, and running reading, games, and arts sessions. It also runs skills workshops for patients, including sewing and English.',
    whatYouGain: ['Patient communication', 'Emotional resilience', 'Healthcare exposure'],
    howToStart: 'Apply through the volunteering section on Baheya’s site; expect an orientation first.',
    url: 'https://baheya.org/ar/baheya_services/4',
    tags: ['Healthcare', 'Cairo & Giza', 'Pre-med'],
  },
  {
    id: 'resala',
    title: 'Resala Charity Organisation',
    icon: '🤲',
    type: 'Volunteering',
    commitment: 'Flexible, set with your branch',
    cost: 'Free',
    description:
      'Egypt’s best-known student-driven charity, with branches in most governorates and activities spanning orphan support, literacy classes, clothing and food distribution, and medical convoys. Because it is organised branch by branch, what you actually do depends on which branch you join.',
    whatYouGain: ['Teamwork', 'Organising at scale', 'Community perspective'],
    howToStart:
      'Fill in the volunteer form online, then visit your nearest branch to meet volunteer management — the form alone does not place you. Hotline 19450.',
    url: 'https://resala.org/volunteering',
    tags: ['Community', 'Nationwide', 'Social impact'],
  },
  {
    id: 'egyptian-red-crescent',
    title: 'Egyptian Red Crescent',
    icon: '🚑',
    type: 'Volunteering',
    commitment: 'Campaign-based, plus training',
    cost: 'Free',
    description:
      'The Red Crescent takes volunteers from age 16 with no academic qualification required, and runs national campaigns such as One Million First-Aiders. It has branches in every governorate and remote options, and its e-learning platform issues first aid certificates recognised internationally — unusual for volunteer training at this level.',
    whatYouGain: ['Certified first aid', 'Crisis response', 'Working under pressure'],
    howToStart:
      'Register on the ERC volunteer system with your national ID and a personal photo; university activity is coordinated per branch.',
    url: 'https://www.egyptianrc.org/en/volunteer',
    tags: ['First aid', 'Nationwide', 'Certificate', 'Ages 16+'],
  },
  {
    id: 'egyptian-food-bank',
    title: 'Egyptian Food Bank',
    icon: '🥫',
    type: 'Volunteering',
    commitment: 'Day shifts, heavier in Ramadan',
    cost: 'Free',
    description:
      'Packing and distributing food parcels to families in need. It runs a dedicated schools and universities programme, so groups can volunteer together, and Ramadan carton packing is the busiest intake of the year — which also makes it the easiest time to get a first placement.',
    whatYouGain: ['Teamwork under pressure', 'Logistics', 'Reliability'],
    howToStart: 'Apply through the volunteering page, or organise a group through your faculty.',
    url: 'https://www.efb.eg/',
    tags: ['Community', 'Group friendly', 'Ramadan'],
  },
  {
    id: 'hospital-57357',
    title: 'Children’s Cancer Hospital 57357',
    icon: '🧸',
    type: 'Volunteering',
    commitment: 'Scheduled visits',
    cost: 'Free',
    description:
      'Volunteers spend time with children undergoing cancer treatment — colouring, games, music, and simply talking. It is emotionally demanding work and the hospital screens and briefs volunteers carefully, which is exactly what you would want from a paediatric oncology setting.',
    whatYouGain: ['Working with children', 'Emotional resilience', 'Healthcare exposure'],
    howToStart: 'Apply through the hospital’s volunteering page and expect an induction.',
    url: 'https://57357.org/',
    tags: ['Healthcare', 'Children', 'Cairo'],
  },
  {
    id: 'misr-el-kheir',
    title: 'Misr El Kheir Foundation',
    icon: '🌾',
    type: 'Volunteering',
    commitment: 'Campaign-based',
    cost: 'Free',
    description:
      'A large foundation working across education, health, scientific research, and community development in underserved governorates. Volunteering tends to run around specific campaigns and convoys rather than a standing weekly rota.',
    whatYouGain: ['Development fieldwork', 'Campaign delivery', 'Rural perspective'],
    howToStart:
      'Contact the foundation directly to ask which current campaigns are taking individual volunteers or student groups.',
    url: 'https://mekeg.org/',
    tags: ['Development', 'Education', 'Nationwide'],
  },
  {
    id: 'peer-tutoring-eg',
    title: 'Tutoring Younger Students',
    icon: '📖',
    type: 'Volunteering',
    commitment: '1–2 hrs/week',
    cost: 'Free',
    description:
      'Teach a subject you are strong in to school students who cannot afford private lessons — a real gap in Egypt, where دروس خصوصية cost families a great deal. It is also the fastest way to find out whether you actually understand a subject: explaining it exposes your own gaps immediately.',
    whatYouGain: ['Explaining complex ideas simply', 'Patience', 'Subject mastery'],
    howToStart:
      'Ask at a local NGO, youth centre, or your own school — Resala and Misr El Kheir both run literacy and tutoring programmes.',
    tags: ['Teaching', 'Communication', 'Low commitment'],
  },
  {
    id: 'environmental-cleanup-eg',
    title: 'Environmental Clean-Ups & Conservation',
    icon: '🌳',
    type: 'Volunteering',
    commitment: 'Occasional weekends',
    cost: 'Free',
    description:
      'Nile and Red Sea coastal clean-ups, tree planting, and recycling drives run by groups such as VeryNile, Greenish, and Banlastic. Good if you want something outdoors and hands-on without committing to a weekly rota.',
    whatYouGain: ['Field work', 'Environmental awareness', 'Campaigning'],
    howToStart: 'Follow the organisers on social media — most clean-ups are announced a week or two ahead.',
    tags: ['Environment', 'Outdoors', 'Flexible'],
  },
  {
    id: 'orphanage-elderly-visits',
    title: 'Orphanage & Elderly Home Visits',
    icon: '🏡',
    type: 'Volunteering',
    commitment: '2–4 hrs/week',
    cost: 'Free',
    description:
      'Regular visits to دور الأيتام or elderly homes for tutoring, activities, and company. The single most useful thing here is consistency — turning up for the same children every week matters far more than a large one-off visit at Eid.',
    whatYouGain: ['Consistency', 'Empathy', 'Activity planning'],
    howToStart: 'Go through an established organisation such as Resala rather than approaching a home directly.',
    tags: ['Community', 'Children', 'Commitment'],
  },
  {
    id: 'enactus',
    title: 'Enactus',
    icon: '🌱',
    type: 'Clubs & Societies',
    commitment: '3–6 hrs/week, heavier near competition',
    cost: 'Free',
    description:
      'Teams build social-entrepreneurship projects and present their measured impact at a national competition — around 30 university teams competed in the 2025 Egyptian nationals, with the winner going to the Enactus World Cup. It is one of the few student activities where you run something with a real budget and real beneficiaries.',
    whatYouGain: ['Project ownership', 'Pitching', 'Impact measurement'],
    howToStart: 'Join your university’s team at the start of the academic year, or start a chapter if none exists.',
    url: 'https://enactusegypt.org/',
    tags: ['Entrepreneurship', 'Social impact', 'Competitive'],
  },
  {
    id: 'aiesec',
    title: 'AIESEC',
    icon: '🌍',
    type: 'Clubs & Societies',
    commitment: '4–8 hrs/week',
    cost: 'Free to join; exchanges cost',
    description:
      'A global student-run organisation with a strong Egyptian presence, offering leadership roles and international volunteering or internship exchanges. The internal leadership structure is the real draw — members manage teams and budgets while still undergraduates.',
    whatYouGain: ['Team leadership', 'Cross-cultural work', 'Sales & partnerships'],
    howToStart: 'Applications open in recruitment rounds each term through your local committee.',
    url: 'https://aiesec.org/',
    tags: ['Leadership', 'International', 'Networking'],
  },
  {
    id: 'ieee-student-branch',
    title: 'IEEE Student Branch',
    icon: '⚡',
    type: 'Clubs & Societies',
    commitment: '2–5 hrs/week',
    cost: 'Low membership fee',
    description:
      'Technical workshops, competitions, and conferences run through university branches — Cairo University hosted Egypt’s first, back in 1970. Best value for engineering and computing students who want hands-on technical events beyond the syllabus.',
    whatYouGain: ['Technical skills', 'Event organising', 'Professional network'],
    howToStart: 'Join through your faculty’s branch; membership is discounted for students.',
    tags: ['Engineering', 'STEM', 'Workshops'],
  },
  {
    id: 'model-un-eg',
    title: 'Model United Nations',
    icon: '🕊️',
    type: 'Clubs & Societies',
    commitment: '2 hrs/week plus conferences',
    cost: 'Conference fees vary',
    description:
      'Delegates represent countries in simulated UN committees, researching real positions and negotiating resolutions. Cairo International MUN is among the largest collegiate MUN programmes outside North America, and most Egyptian universities send delegations.',
    whatYouGain: ['Public speaking', 'Diplomacy & negotiation', 'Research'],
    howToStart: 'Join your university delegation, or apply directly to a conference as an individual delegate.',
    tags: ['Politics', 'Speaking', 'Pre-law'],
  },
  {
    id: 'student-scientific-society',
    title: 'Faculty Scientific & Academic Societies',
    icon: '🔬',
    type: 'Clubs & Societies',
    commitment: '2–4 hrs/week',
    cost: 'Free',
    description:
      'Most Egyptian faculties run their own scientific society — medical, pharmaceutical, engineering — organising seminars, revision sessions, and conferences. They are the most direct way to meet the year above you, which is worth more than it sounds when exams arrive.',
    whatYouGain: ['Subject depth', 'Event organising', 'Senior contacts'],
    howToStart: 'Ask at your faculty’s student affairs office during the first weeks of term.',
    tags: ['Academic', 'Networking', 'Faculty'],
  },
  {
    id: 'tedx-university',
    title: 'TEDx University Events',
    icon: '🎤',
    type: 'Clubs & Societies',
    commitment: 'Project-based',
    cost: 'Free',
    description:
      'Student-organised TEDx events run at many Egyptian universities. Organising one means curating speakers, coaching them, and running production — closer to real event management than most campus activities get.',
    whatYouGain: ['Event production', 'Speaker coaching', 'Marketing'],
    howToStart: 'Join the organising team during recruitment, or volunteer on event day to get in.',
    tags: ['Events', 'Communication', 'Creative'],
  },
  {
    id: 'ecpc',
    title: 'ECPC — Collegiate Programming Contest',
    icon: '💡',
    type: 'Competitions',
    commitment: 'Months of training',
    cost: 'Free',
    description:
      'Egypt’s largest university programming contest and the national qualifier for the Arab and African championship, which feeds the ICPC World Finals. The 2025 edition drew roughly 8,000 students from 119 universities. Teams of three solve algorithmic problems under time pressure, and serious teams train year-round.',
    whatYouGain: ['Algorithms', 'Problem solving under pressure', 'Team coordination'],
    howToStart: 'Join your university’s training community or ACM chapter — most run beginner sheets from first year.',
    url: 'https://aast.edu/en/centers/ric/contenttemp.php?page_id=41100066',
    tags: ['Programming', 'STEM', 'Competitive'],
  },
  {
    id: 'hult-prize',
    title: 'Hult Prize On-Campus',
    icon: '💼',
    type: 'Competitions',
    commitment: 'Project-based',
    cost: 'Free',
    description:
      'A social-startup competition that runs on-campus rounds at many Egyptian universities, with winners progressing to regional summits. Good first exposure to building a business case and pitching it to judges.',
    whatYouGain: ['Business modelling', 'Pitching', 'Teamwork'],
    howToStart: 'Watch for the on-campus round announcement, usually early in the academic year.',
    tags: ['Business', 'Entrepreneurship', 'Pitching'],
  },
  {
    id: 'science-competitions-eg',
    title: 'Science Fairs & Olympiads',
    icon: '🥇',
    type: 'Competitions',
    commitment: 'Seasonal',
    cost: 'Free–Low',
    description:
      'Egypt sends delegations to international science and maths competitions, and ISEF-affiliated fairs run through the Academy of Scientific Research. Placing well is a genuine signal, but the real gain is being forced to sit with a hard problem for hours without giving up.',
    whatYouGain: ['Deep problem solving', 'Research presentation', 'Subject depth'],
    howToStart: 'Ask a science or maths teacher which national competitions your school or faculty enters.',
    tags: ['STEM', 'Academic', 'Competitive'],
  },
  {
    id: 'student-union-eg',
    title: 'Student Union (اتحاد الطلاب)',
    icon: '🏛️',
    type: 'Leadership',
    commitment: '3–5 hrs/week',
    cost: 'Free',
    description:
      'Elected representation at faculty and university level, covering student services, trips, and activities. Standing for election teaches you campaigning and negotiation with administration — and how slowly institutions actually move.',
    whatYouGain: ['Representing others', 'Negotiation', 'Running meetings'],
    howToStart: 'Nominations open each academic year; stand with one specific, achievable promise.',
    tags: ['Leadership', 'Advocacy', 'Faculty'],
  },
  {
    id: 'found-a-club-eg',
    title: 'Start Your Own Student Activity',
    icon: '🚩',
    type: 'Leadership',
    commitment: '3–6 hrs/week',
    cost: 'Free–Low',
    description:
      'Found an activity your faculty does not already have. It is harder than joining one and worth considerably more, because you own recruitment, the faculty approval, funding, and the harder problem of keeping people turning up in week eight.',
    whatYouGain: ['Initiative', 'Recruiting & retaining people', 'Working with administration'],
    howToStart: 'Get a staff supervisor, a handful of committed members, and written approval from student affairs.',
    tags: ['Leadership', 'Entrepreneurial', 'Standout'],
  },
  {
    id: 'orientation-leader-eg',
    title: 'Orientation & Peer Mentoring',
    icon: '🧭',
    type: 'Leadership',
    commitment: '1–3 hrs/week',
    cost: 'Free',
    description:
      'Help new students through their first term — timetables, buildings, and the unwritten rules nobody tells you. A low-barrier way into real responsibility, and useful preparation if you are considering teaching.',
    whatYouGain: ['Mentoring', 'Active listening', 'Approachability'],
    howToStart: 'Teams are usually recruited near the end of the year for the September intake.',
    tags: ['Leadership', 'Community', 'Low commitment'],
  },
  {
    id: 'summer-training-eg',
    title: 'Summer Training (التدريب الصيفي)',
    icon: '🏢',
    type: 'Work Experience',
    commitment: 'Full-time, summer',
    cost: 'Free (sometimes paid)',
    description:
      'Many Egyptian faculties require summer training, and engineering students often need documented weeks signed off by the employer. Treat the requirement as an opportunity rather than paperwork: the most valuable outcome is often discovering you would dislike a career before committing to it.',
    whatYouGain: ['Workplace norms', 'Industry insight', 'Professional contacts'],
    howToStart:
      'Apply early through your faculty’s training office, and email smaller local firms directly — they answer far more often than large ones.',
    tags: ['Career testing', 'Required', 'Summer'],
  },
  {
    id: 'nti-itida-training',
    title: 'NTI & ITIDA Free Tech Tracks',
    icon: '⌨️',
    type: 'Work Experience',
    commitment: 'Weeks to months',
    cost: 'Free',
    description:
      'Government-funded technical training in cybersecurity, networks, cloud, web development, and data analytics. NTI also runs free summer training for undergraduates. Competitive to get into, but genuinely free and recognised by Egyptian employers.',
    whatYouGain: ['Technical certification', 'Portfolio projects', 'Employer recognition'],
    howToStart: 'Watch the NTI and ITIDA sites for intake rounds and apply as soon as they open.',
    url: 'https://www.nti.sci.eg/',
    tags: ['Tech skills', 'Free', 'Certificate'],
  },
  {
    id: 'research-assistant-eg',
    title: 'Research Assistant Work',
    icon: '🧫',
    type: 'Work Experience',
    commitment: 'Varies, often summer',
    cost: 'Free (sometimes paid)',
    description:
      'Help a university lab or a body such as the National Research Centre with data collection, literature searches, or sample processing. The clearest way to find out whether research life — slow, repetitive, occasionally thrilling — actually suits you.',
    whatYouGain: ['Research methods', 'Lab or data skills', 'Academic references'],
    howToStart: 'Email a professor whose work genuinely interests you, referencing a specific paper of theirs.',
    tags: ['Research', 'Academic', 'Competitive'],
  },
  {
    id: 'part-time-job-eg',
    title: 'Part-Time & Freelance Work',
    icon: '🧾',
    type: 'Work Experience',
    commitment: '8–16 hrs/week',
    cost: 'Paid',
    description:
      'Retail, call centres, tutoring, or online freelancing. Egypt’s outsourcing sector means customer-service and freelance work in English is widely available to students, and it builds things no club does: dealing with difficult people and handling your own money.',
    whatYouGain: ['Customer handling', 'Reliability', 'Financial independence'],
    howToStart: 'Wuzzuf and Forasna list part-time roles; freelance platforms suit strong English or design skills.',
    tags: ['Paid', 'Responsibility', 'Real world'],
  },
  {
    id: 'university-theatre-eg',
    title: 'University Theatre & Arts Troupes',
    icon: '🎭',
    type: 'Creative & Arts',
    commitment: 'Intense near performances',
    cost: 'Free',
    description:
      'Egyptian universities have a long theatre tradition, and faculty troupes compete at university-level festivals. Backstage roles — lighting, sound, set — are chronically short of volunteers and teach genuinely transferable production skills.',
    whatYouGain: ['Performing or production craft', 'Collaboration', 'Handling pressure'],
    howToStart: 'Auditions run early in the term; offer to help backstage if you would rather not perform.',
    tags: ['Creative', 'Teamwork', 'Performance'],
  },
  {
    id: 'music-choir-eg',
    title: 'Music Ensembles & Choirs',
    icon: '🎻',
    type: 'Creative & Arts',
    commitment: '2–4 hrs/week',
    cost: 'Free–Medium',
    description:
      'University ensembles, Arabic music takht groups, and choirs. Ensemble playing is a distinct skill from practising alone — you are listening and adjusting to others constantly, which is why it genuinely reads as teamwork.',
    whatYouGain: ['Discipline', 'Listening', 'Performing under pressure'],
    howToStart: 'Ask your university’s cultural activities office; many groups accept beginners.',
    tags: ['Creative', 'Music', 'Discipline'],
  },
  {
    id: 'scouts-eg',
    title: 'Egyptian Scouts & Guides',
    icon: '⛺',
    type: 'Sports & Wellbeing',
    commitment: 'Weekly, plus camps',
    cost: 'Low',
    description:
      'One of Egypt’s oldest youth movements, running camps, service projects, and leadership training. Strong on practical outdoor skills and progressive responsibility — older members lead younger ones, which is where the leadership training actually happens.',
    whatYouGain: ['Outdoor skills', 'Leading younger members', 'Self-reliance'],
    howToStart: 'Join through a school, university, or governorate scout group.',
    tags: ['Outdoors', 'Leadership', 'Community'],
  },
  {
    id: 'university-sports-eg',
    title: 'University Sports Teams',
    icon: '⚽',
    type: 'Sports & Wellbeing',
    commitment: '3–6 hrs/week',
    cost: 'Free–Low',
    description:
      'Faculty and university teams compete in inter-university championships across football, handball, basketball, and athletics. Beyond fitness, regular training is one of the more reliable protections against the stress of exam years.',
    whatYouGain: ['Teamwork', 'Resilience', 'Time management'],
    howToStart: 'Trials run early in the academic year through your faculty’s youth welfare office.',
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
