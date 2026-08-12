// Elevate's own mentorship workshops.
//
// Unlike the other datasets, these are not external programmes with links —
// they are what Elevate itself offers, so each entry describes the workshop
// and what a participant walks away able to do.
//
// Source copy said "young women" throughout; it is written here for students
// generally, to match the About page and the rest of the site.

const workshopList = [
  {
    id: 'communication',
    title: 'Communication',
    icon: '🗣️',
    category: 'Soft Skills',
    description:
      'Learn to express your ideas clearly and confidently. The session covers public speaking, presentation technique, and active listening — the last of which is usually the weakest link, because most people plan their reply instead of hearing the point.',
    youLearn: [
      'Public speaking without freezing',
      'Structuring a presentation',
      'Active listening',
      'Adapting your message to the room',
    ],
    tags: ['Confidence', 'Speaking', 'Everyday use'],
  },
  {
    id: 'teamwork',
    title: 'Teamwork',
    icon: '🤝',
    category: 'Soft Skills',
    description:
      'Building working relationships with people whose style is nothing like yours. The focus is on collaborating respectfully, contributing to a group result rather than competing inside it, and handling the friction that comes with any real team.',
    youLearn: [
      'Working with different personalities',
      'Contributing without dominating',
      'Handling disagreement',
      'Sharing credit and responsibility',
    ],
    tags: ['Collaboration', 'Group work', 'Projects'],
  },
  {
    id: 'problem-solving',
    title: 'Problem-Solving',
    icon: '🧩',
    category: 'Soft Skills',
    description:
      'How to identify a challenge, analyse what is actually causing it, and build a practical solution — then anticipate the obstacles that would make the same problem come back. The aim is resilience and confidence in deciding, not just a technique.',
    youLearn: [
      'Separating symptoms from root causes',
      'Generating and testing options',
      'Anticipating obstacles',
      'Deciding under uncertainty',
    ],
    tags: ['Critical thinking', 'Decision-making', 'Resilience'],
  },
  {
    id: 'time-management',
    title: 'Time Management',
    icon: '⏳',
    category: 'Soft Skills',
    description:
      'Most students struggle to balance study, responsibilities, and personal goals — especially through exam periods. This session covers organising a schedule you will actually follow, setting priorities, spotting the habits that quietly eat your day, and building routines that hold up.',
    youLearn: [
      'Organising a realistic schedule',
      'Setting priorities that stick',
      'Spotting time-wasting habits',
      'Building productive routines',
    ],
    tags: ['Study skills', 'Focus', 'Exams'],
  },
  {
    id: 'excel',
    title: 'Microsoft Excel',
    icon: '📊',
    category: 'Microsoft Skills',
    description:
      'Organising data, running calculations, and turning a sheet into a report someone can actually read. Excel is the single most requested software skill across Egyptian job listings, and it transfers to almost any field.',
    youLearn: [
      'Structuring data properly',
      'Formulas and calculations',
      'Charts that communicate',
      'Building a clear report',
    ],
    tags: ['Employable', 'Data', 'Beginner friendly'],
  },
  {
    id: 'powerpoint',
    title: 'Microsoft PowerPoint',
    icon: '📽️',
    category: 'Microsoft Skills',
    description:
      'Building presentations that carry an argument instead of burying it in bullet points. Useful immediately for university projects, and again later for interviews and workplace pitches.',
    youLearn: [
      'Slide structure and flow',
      'Designing readable slides',
      'Presenting alongside slides',
      'Tailoring a deck to your audience',
    ],
    tags: ['Presenting', 'University projects', 'Beginner friendly'],
  },
  {
    id: 'forms-surveys',
    title: 'Forms & Surveys',
    icon: '📝',
    category: 'Microsoft Skills',
    description:
      'Using Microsoft Forms and Google Forms to collect feedback, run surveys, and test an idea before committing to it. A small skill that makes you immediately useful on any student project or club committee.',
    youLearn: [
      'Designing questions that get honest answers',
      'Running a survey',
      'Reading the responses',
      'Testing an idea quickly',
    ],
    tags: ['Research', 'Practical', 'Quick win'],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    icon: '📈',
    category: 'Technical Learning',
    description:
      'Collecting, organising, interpreting, and visualising data to support a decision. Introductory rather than specialist — the goal is to make you comfortable reading and questioning data, which matters in every field, not only technical ones.',
    youLearn: [
      'Cleaning and organising a dataset',
      'Interpreting what the numbers say',
      'Visualising results honestly',
      'Supporting a decision with evidence',
    ],
    tags: ['In demand', 'Analytical', 'Career relevant'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    icon: '🔐',
    category: 'Technical Learning',
    description:
      'The fundamentals of digital safety, protecting your accounts and data online, and using technology responsibly. Valuable as a career direction, and valuable even if you never work in tech.',
    youLearn: [
      'Securing your own accounts',
      'Recognising scams and phishing',
      'Protecting personal data',
      'Responsible technology use',
    ],
    tags: ['In demand', 'Everyday use', 'Career relevant'],
  },
  {
    id: 'technical-tracks',
    title: 'Technical Field Sessions',
    icon: '💻',
    category: 'Technical Learning',
    description:
      'Sessions aimed at students of Computer Science, Software Engineering, Information Systems, and related disciplines, strengthening technical capability and pointing toward specific career paths in technology.',
    youLearn: [
      'Deeper technical fundamentals',
      'How specialisations differ in practice',
      'What employers look for',
      'Where to go next',
    ],
    tags: ['Computer Science', 'Specialisation', 'Career paths'],
  },
  {
    id: 'voice-over',
    title: 'Voice-Over Training',
    icon: '🎙️',
    category: 'Creative & Entertainment',
    description:
      'Vocal performance technique for media, content creation, and freelance work. A genuinely marketable skill — voice work is one of the more accessible freelance routes for students, and it doubles as presentation practice.',
    youLearn: [
      'Vocal control and delivery',
      'Reading a script naturally',
      'Recording basics',
      'Where freelance voice work comes from',
    ],
    tags: ['Creative', 'Freelance', 'Media'],
  },
  {
    id: 'acting',
    title: 'Acting',
    icon: '🎭',
    category: 'Creative & Entertainment',
    description:
      'Developing self-expression, creativity, confidence, and presence. Even for students with no interest in performing, acting exercises are one of the fastest ways to get comfortable being watched — which is what public speaking really demands.',
    youLearn: [
      'Self-expression',
      'Stage presence and confidence',
      'Working with a scene partner',
      'Presenting without freezing',
    ],
    tags: ['Creative', 'Confidence', 'Speaking'],
  },
  {
    id: 'arts-crafts',
    title: 'Arts & Crafts',
    icon: '🎨',
    category: 'Creative & Entertainment',
    description:
      'Drawing and visual arts through to crochet and handmade crafts. Creative sessions are here deliberately: they are a space for self-discovery and a break from academic pressure, and for some participants they turn into a hobby or a small income.',
    youLearn: [
      'Drawing and visual fundamentals',
      'Crochet and handmade crafts',
      'Creative problem-solving',
      'Making something start to finish',
    ],
    tags: ['Creative', 'Wellbeing', 'Hobby'],
  },
]

// Browse order: soft skills first, since they apply to every participant
// regardless of field, then the more specialised tracks.
const categoryOrder = [
  'Soft Skills',
  'Microsoft Skills',
  'Technical Learning',
  'Creative & Entertainment',
]

const categoryRank = (c) => {
  const i = categoryOrder.indexOf(c)
  return i === -1 ? categoryOrder.length : i
}

export const workshops = [...workshopList].sort(
  (a, b) => categoryRank(a.category) - categoryRank(b.category),
)

export const workshopCategories = [...new Set(workshops.map((w) => w.category))].sort()
