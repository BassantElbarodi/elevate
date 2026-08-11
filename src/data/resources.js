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
    id: 'bls-ooh',
    title: 'Occupational Outlook Handbook (US BLS)',
    type: 'Reference',
    cost: 'Free',
    description:
      'Government data on pay, growth, and entry requirements for hundreds of occupations. This is the source to cite when you replace the placeholder career figures in this project.',
    url: 'https://www.bls.gov/ooh/',
    tags: ['Careers', 'Data', 'Citations'],
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
    id: 'fafsa',
    title: 'FAFSA — US federal student aid',
    type: 'Funding',
    cost: 'Free',
    description:
      'The application that determines eligibility for US federal grants and loans. Deadlines are strict and some aid is first-come, so apply as early as the window opens.',
    url: 'https://studentaid.gov/h/apply-for-aid/fafsa',
    tags: ['Funding', 'Scholarships', 'US'],
  },
  {
    id: 'scholarship-search',
    title: 'Scholarship search strategy',
    type: 'Funding',
    cost: 'Free',
    description:
      'Start with your own school and local community foundations before national databases — smaller pools mean far better odds per application.',
    url: 'https://bigfuture.collegeboard.org/pay-for-college/scholarship-search',
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
