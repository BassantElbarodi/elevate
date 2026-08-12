// Curated links and study guidance. Check each URL still resolves before you
// submit — external sites move things around.

export const resources = [
  {
    id: 'khan-academy',
    title: 'Khan Academy',
    type: 'Course',
    cost: 'Free',
    description:
      'Full courses in maths, science, and economics, from arithmetic through calculus. Best used to fill a specific gap rather than as a whole curriculum.',
    url: 'https://www.khanacademy.org/',
    tags: ['Maths', 'Science', 'Foundations'],
  },
  {
    id: 'mit-ocw',
    title: 'MIT OpenCourseWare',
    type: 'Course',
    cost: 'Free',
    description:
      'Actual MIT course materials — lecture notes, assignments, and exams. Useful for previewing how demanding a subject gets at university level.',
    url: 'https://ocw.mit.edu/',
    tags: ['University level', 'STEM', 'Self-study'],
  },
  {
    id: 'coursera',
    title: 'Coursera',
    type: 'Course',
    cost: 'Free to audit',
    description:
      'University-taught courses across most fields. You can audit nearly all of them free; you only pay if you want the certificate.',
    url: 'https://www.coursera.org/',
    tags: ['Broad', 'Certificates'],
  },
  {
    id: 'harvard-online',
    title: 'Harvard Online — free courses',
    type: 'Course',
    cost: 'Free to audit',
    description:
      'Harvard publishes around 127 courses free to take, spanning computer science, data science, health, humanities and business — CS50 among them. The course itself costs nothing; only the optional certificate is paid. Registration is required, and some have enrolment deadlines.',
    url: 'https://pll.harvard.edu/catalog/free',
    tags: ['University level', 'Broad', 'Self-study'],
  },
  {
    id: 'ibm-skillsbuild',
    title: 'IBM SkillsBuild',
    type: 'Course',
    cost: 'Free',
    description:
      'Over 1,000 free courses in AI, cybersecurity, data analytics, cloud, and project management, aimed squarely at students. Unusually, the digital credentials are free too — you finish a guided learning path and get a badge you can put on LinkedIn without paying for it.',
    url: 'https://skillsbuild.org/',
    tags: ['Tech skills', 'Free credentials', 'AI'],
  },
  {
    id: 'udemy',
    title: 'Udemy',
    type: 'Course',
    cost: 'Paid — but rarely at list price',
    description:
      'A huge catalogue of practical, skills-focused courses. Two things worth knowing: Egypt is one of Udemy’s cheaper pricing regions, and sales run almost constantly — if a course shows full price, wait, because it will drop. Quality varies enormously by instructor, so check recent reviews and the last-updated date rather than the total rating.',
    url: 'https://udemy.com/',
    tags: ['Practical skills', 'Paid', 'Self-study'],
  },
  {
    id: 'tansik-portal',
    title: 'Tansik — the official admission portal',
    type: 'Reference',
    cost: 'Free',
    description:
      'The government system that places Thanaweya Amma students into faculties. It publishes each year’s minimum scores per faculty, which is the number that actually decides where you can go. Check it directly rather than relying on last year’s figures.',
    url: 'https://tansik.digital.gov.eg/',
    tags: ['Admissions', 'Official', 'Egypt'],
  },
  {
    id: 'capmas',
    title: 'CAPMAS — Egypt’s statistics agency',
    type: 'Reference',
    cost: 'Free',
    description:
      'Official Egyptian data on employment, wages, and unemployment. Wages are published by economic activity rather than by job title, so it gives you sector direction rather than a figure for one specific role.',
    url: 'https://www.capmas.gov.eg/',
    tags: ['Careers', 'Data', 'Citations'],
  },
  {
    id: 'ekb',
    title: 'Egyptian Knowledge Bank (EKB)',
    type: 'Reference',
    cost: 'Free',
    description:
      'A national digital library giving every Egyptian free access to journals, databases, and study material using your National ID. It is one of the most underused resources available to Egyptian students.',
    url: 'https://www.ekb.eg/',
    tags: ['Research', 'Egypt', 'Library'],
  },
  {
    id: 'pomodoro',
    title: 'The Pomodoro Technique',
    type: 'Study skill',
    cost: 'Free',
    description:
      'Work in focused 25-minute blocks with 5-minute breaks. The point is not the timer — it is that starting a 25-minute block is psychologically easier than starting "studying".',
    url: 'https://todoist.com/productivity-methods/pomodoro-technique',
    tags: ['Focus', 'Time management'],
  },
  {
    id: 'active-recall',
    title: 'Active recall over re-reading',
    type: 'Study skill',
    cost: 'Free',
    description:
      'Close the book and try to reproduce the material from memory, then check. It feels harder and less productive than re-reading, which is exactly why it works better.',
    url: 'https://www.learningscientists.org/retrieval-practice',
    tags: ['Memory', 'Exams', 'Evidence-based'],
  },
  {
    id: 'spaced-repetition',
    title: 'Spaced repetition (Anki)',
    type: 'Tool',
    cost: 'Free',
    description:
      'Flashcard software that schedules reviews just before you would forget. Strongest for vocabulary, formulas, anatomy, and definitions.',
    url: 'https://apps.ankiweb.net/',
    tags: ['Memory', 'Flashcards'],
  },
  {
    id: 'cornell-notes',
    title: 'Cornell note-taking method',
    type: 'Study skill',
    cost: 'Free',
    description:
      'Split each page into notes, cues, and a summary. The cue column turns your notes into a self-test instead of a transcript you never reread.',
    url: 'https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/',
    tags: ['Note-taking', 'Lectures'],
  },
  {
    id: 'nti-dey',
    title: 'NTI — Digital Egypt Youth scholarships',
    type: 'Funding',
    cost: 'Free',
    description:
      'The National Telecommunication Institute runs fully funded training tracks in cybersecurity, networks, and cloud, plus free summer training for undergraduates. Competitive, but genuinely free and recognised by employers.',
    url: 'https://www.nti.sci.eg/',
    tags: ['Funding', 'Tech skills', 'Egypt'],
  },
  {
    id: 'itida-training',
    title: 'ITIDA free tech scholarships',
    type: 'Funding',
    cost: 'Free',
    description:
      'Egypt’s IT Industry Development Agency funds large-scale online scholarships in web development, data analytics, and digital marketing. Worth watching if you want tech skills without paying for a bootcamp.',
    url: 'https://itida.gov.eg/',
    tags: ['Funding', 'Tech skills', 'Egypt'],
  },
  {
    id: 'scholarship-search',
    title: 'Scholarship search strategy',
    type: 'Funding',
    cost: 'Free',
    description:
      'Start with your own faculty’s student affairs office and local foundations before national or international databases — smaller pools mean far better odds per application.',
    url: 'https://www.scholarshiptab.com/scholarships-for/egypt',
    tags: ['Funding', 'Scholarships'],
  },
  {
    id: 'oer-commons',
    title: 'OER Commons',
    type: 'Reference',
    cost: 'Free',
    description:
      'Openly licensed textbooks and course materials. Worth checking before buying an expensive required textbook.',
    url: 'https://oercommons.org/',
    tags: ['Textbooks', 'Open access'],
  },
  {
    id: 'informational-interview',
    title: 'Ask for an informational interview',
    type: 'Study skill',
    cost: 'Free',
    description:
      'Message someone doing the job you are considering and ask for 20 minutes about their actual day. Most people say yes, and one honest conversation beats a dozen career articles.',
    url: 'https://www.themuse.com/advice/how-to-ask-for-an-informational-interview-and-get-a-yes',
    tags: ['Careers', 'Networking'],
  },
]

export const resourceTypes = [...new Set(resources.map((r) => r.type))].sort()
