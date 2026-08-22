// Egypt-focused career data (compiled August 2026).
//
// `salaryRange` is an APPROXIMATE starting monthly gross in EGP for a fresh
// graduate in the formal private sector. Treat it as a band, not a quote.
// Egypt has no per-occupation pay series equivalent to the US BLS handbook —
// CAPMAS publishes wages by economic activity, not by job title — so these
// bands are compiled from job-market aggregators and sector reporting, and
// they age quickly against EGP inflation. Public-sector and syndicate-scale
// pay is generally lower; multinationals and USD-paying employers, higher.
// Re-check before relying on any figure. Sources are listed in the README.
//
// `roadmap` is the step-by-step route into the career, ordered from school
// onwards. Every entry has five steps of `{ when, title, detail }`, where
// `when` is a short timing label rather than a promise — routes vary by
// faculty and by person, and the years are indicative. Keep each roadmap
// consistent with that career's `education` field, since the two are read
// side by side on the detail page.
//
// `majorIds` is the single source of truth for how majors and careers connect.
// Each id must match an entry in ./majors.js — major pages read this field to
// work out which careers to show, so you only ever edit the link in one place.

const careerList = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: '💻',
    field: 'Technology',
    blurb: 'Design, build, and maintain software systems.',
    description:
      'Software engineers write and maintain the code behind applications, services, and infrastructure. Day to day is less solo coding than most people expect — a lot of it is reading existing code, reviewing teammates’ work, and deciding what to build.',
    education: "Faculty of Computers & AI or Engineering — or a strong self-taught portfolio",
    salaryRange: 'EGP 10–20k',
    outlook: 'Growing fast',
    dayToDay: [
      'Writing and reviewing code',
      'Breaking features into smaller tasks',
      'Debugging issues reported by users',
      'Design discussions with the team',
    ],
    skills: ['Programming', 'System design', 'Version control (Git)', 'Communication'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Take the Maths branch and start coding early',
        detail:
          'The Maths branch (علمي رياضة) keeps both Computers & AI and Engineering open. Nothing stops you writing code before university — most hiring later rewards the years you started, not the degree.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Computers & AI, or Engineering',
        detail:
          'Either faculty gets you there. Treat data structures, algorithms and operating systems as the courses that actually show up in interviews.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Build and ship things publicly',
        detail:
          'Three finished projects on GitHub outweigh a long list of tutorials. Summer internships at Egyptian software houses are the usual first rung; ITIDA and NTI run free tracks if yours does not offer one.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Junior developer on a real team',
        detail:
          'The first job is mostly reading other people’s code and learning the review culture. Choose a team that reviews properly over one that pays slightly more.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or go remote',
        detail:
          'Backend, mobile, data or infrastructure — depth starts paying around year three. This is also the point where USD-paying remote work becomes realistic, and it changes the salary picture completely.',
      },
    ],
    majorIds: ['computer-science', 'data-science', 'mathematics', 'information-systems'],
  },
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    icon: '🤖',
    field: 'Technology',
    blurb: 'Take models out of notebooks and into production systems.',
    description:
      'ML engineers sit between data science and software engineering: they train models, then handle the harder half of the job — serving them reliably, monitoring for drift, and retraining when performance decays.',
    education: "Computers & AI or Engineering; postgraduate study common",
    salaryRange: 'EGP 15–30k',
    outlook: 'Growing fast',
    dayToDay: [
      'Building training and evaluation pipelines',
      'Tuning and comparing models',
      'Deploying models behind APIs',
      'Monitoring accuracy and latency in production',
    ],
    skills: ['Python', 'ML frameworks', 'Software engineering', 'Experiment design'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Maths branch, and take the maths seriously',
        detail:
          'Take the Maths branch (علمي رياضة). Linear algebra and probability are not background here — they are the job.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI, Engineering, or Statistics',
        detail:
          'Any of the three works. Push for the probability, optimisation and linear algebra courses rather than avoiding them.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Train models end to end, not just in notebooks',
        detail:
          'Do a full project: data collection, training, evaluation, then actually deploy it behind an API. That last step is what separates ML engineers from people who have finished a course.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Enter through software or data first',
        detail:
          'Very few employers hire fresh graduates straight into ML. Most people arrive from a backend or data role after a year or two — that is the normal route, not a detour.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Postgraduate study, or production depth',
        detail:
          'An MSc opens research posts and study abroad; staying in industry, the scarce skill is keeping models reliable in production, not building new ones.',
      },
    ],
    majorIds: ['computer-science', 'data-science', 'mathematics'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: '📊',
    field: 'Technology',
    blurb: 'Answer business or research questions using data and models.',
    description:
      'Data scientists clean and analyse data, build models, and translate results into recommendations. Most of the job is data preparation and framing the right question — modelling is a smaller slice than the job title suggests.',
    education: "Computers & AI, Science (Statistics), or Engineering",
    salaryRange: 'EGP 12–25k',
    outlook: 'Growing fast',
    dayToDay: [
      'Cleaning and joining datasets',
      'Running analyses and experiments',
      'Building dashboards and reports',
      'Presenting findings to non-technical teams',
    ],
    skills: ['Statistics', 'Python or R', 'SQL', 'Data visualisation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Maths branch',
        detail:
          'Take the Maths branch (علمي رياضة). Statistics is the spine of this job and it starts at school.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI, Science (Statistics), or Economics',
        detail:
          'Statistics from Science and programming from Computers & AI both lead here — you just fill the other half yourself.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn SQL properly, then analyse something real',
        detail:
          'SQL is asked about in almost every interview and taught in almost no course. Publish two analyses of real datasets with the reasoning written out, not just charts.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Analyst role at a bank, telecom or e-commerce company',
        detail:
          'Egypt’s banks, telecoms and e-commerce players hold the largest datasets and hire the most juniors. Expect the first year to be mostly data cleaning — that is the job, not a hazing ritual.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Depth in a domain, or a move into ML',
        detail:
          'Knowing one industry’s data deeply is worth more than a wider list of models. From here the paths split towards ML engineering, analytics leadership, or product.',
      },
    ],
    majorIds: ['data-science', 'computer-science', 'mathematics', 'economics', 'physics'],
  },
  {
    id: 'security-analyst',
    title: 'Cybersecurity Analyst',
    icon: '🔐',
    field: 'Technology',
    blurb: 'Protect systems and data from attacks and misuse.',
    description:
      'Security analysts monitor systems for threats, investigate incidents, and harden infrastructure. The field values certifications and hands-on labs alongside a degree.',
    education: "Computers & AI or Engineering, plus certifications — NTI runs free tracks",
    salaryRange: 'EGP 12–22k',
    outlook: 'Growing fast',
    dayToDay: [
      'Monitoring alerts and logs',
      'Investigating suspicious activity',
      'Running vulnerability scans',
      'Writing incident reports',
    ],
    skills: ['Networking', 'Threat analysis', 'Scripting', 'Attention to detail'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Maths or Science branch',
        detail:
          'Either branch opens Computers & AI. Start reading about how systems break as soon as you are curious about it.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI or Engineering',
        detail:
          'Networking and operating systems matter more here than any other pair of courses. Learn Linux until you are comfortable in it.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Certifications and hands-on labs',
        detail:
          'This field weighs certifications heavily — Security+ then a practical one. NTI runs free cybersecurity tracks, and capture-the-flag competitions are the cheapest real practice there is.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'SOC analyst, monitoring alerts',
        detail:
          'Almost everyone starts in a security operations centre triaging alerts, often on shifts. It is repetitive, and it is where you learn what normal traffic looks like.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Choose offence or defence',
        detail:
          'Penetration testing, incident response, or governance and compliance. Banks and telecoms in Egypt pay the most; remote work for foreign employers pays more again.',
      },
    ],
    majorIds: ['computer-science', 'mathematics', 'information-systems'],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps / Cloud Engineer',
    icon: '☁️',
    field: 'Technology',
    blurb: 'Build the infrastructure and pipelines other engineers ship on.',
    description:
      'DevOps engineers automate how software gets built, tested, and deployed, and keep the cloud infrastructure underneath it healthy. When it works, nobody notices — which is both the appeal and the frustration of the role.',
    education: "Computers & AI or Engineering, plus cloud certifications",
    salaryRange: 'EGP 15–30k',
    outlook: 'Growing fast',
    dayToDay: [
      'Maintaining CI/CD pipelines',
      'Managing cloud infrastructure as code',
      'Responding to outages and on-call alerts',
      'Improving build and deploy times',
    ],
    skills: ['Linux', 'Cloud platforms', 'Scripting', 'Incident response'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Maths or Science branch',
        detail:
          'Either opens Computers & AI or Engineering. No specialised preparation needed at this stage.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI or Engineering',
        detail:
          'Operating systems and networking are the courses that carry over. Nobody arrives at this role straight from graduation, so plan for a first job elsewhere.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Live in Linux, then learn one cloud',
        detail:
          'Run Linux as your daily machine. Pick one cloud — AWS or Azure — and take its associate certification; employers screen on it.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Start as a developer or sysadmin',
        detail:
          'You need to have shipped software before you can build the pipeline that ships it. Volunteer for the deployment work nobody on your team wants.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Move into platform or SRE work',
        detail:
          'Infrastructure as code, containers, and being on call. It is one of the strongest fields in Egypt for remote contracts, because the work has no need to be in the room.',
      },
    ],
    majorIds: ['computer-science', 'information-systems'],
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    icon: '🎮',
    field: 'Technology',
    blurb: 'Build the code and systems behind video games.',
    description:
      'Game developers work on engines, gameplay systems, graphics, and tooling. The work is genuinely creative and famously competitive — expect long hours in some studios, and expect your portfolio of finished games to matter more than your transcript.',
    education: "Computers & AI, or a portfolio of shipped projects",
    salaryRange: 'EGP 8–16k',
    outlook: 'Competitive',
    dayToDay: [
      'Implementing gameplay mechanics',
      'Optimising frame rate and memory use',
      'Building tools for designers and artists',
      'Playtesting and fixing bugs',
    ],
    skills: ['C++ or C#', 'Game engines', 'Maths for graphics', 'Debugging'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Maths branch, and start making small games',
        detail:
          'Take the Maths branch (علمي رياضة). Graphics is applied linear algebra, and a game finished at sixteen is still a game finished.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI — or skip the degree if the portfolio is strong',
        detail:
          'This is one of the few fields where a portfolio genuinely substitutes for the certificate. Either way, C++ or C# and a real engine.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Finish games — small ones',
        detail:
          'Three finished small games beat one ambitious unfinished one, every time. Game jams force you to finish, and Egypt’s scene runs them regularly.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Studio work, or mobile',
        detail:
          'Egypt’s studios cluster around mobile and casual games, which is where the local jobs are. Pay starts lower than general software — go in knowing that.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or aim abroad',
        detail:
          'Engine, graphics, gameplay or tools. The larger studios are outside Egypt, so many developers here work remotely or relocate; publishing your own titles is the third route.',
      },
    ],
    majorIds: ['computer-science', 'graphic-design', 'mathematics', 'film-media-production'],
  },
  {
    id: 'qa-engineer',
    title: 'QA / Test Engineer',
    icon: '🧪',
    field: 'Technology',
    blurb: 'Find the problems before users do.',
    description:
      'QA engineers design test strategies, automate regression suites, and probe software for the edge cases developers did not consider. It is a common and underrated entry point into software teams.',
    education: "Computers & AI, or any technical degree",
    salaryRange: 'EGP 8–15k',
    outlook: 'Growing',
    dayToDay: [
      'Writing automated test suites',
      'Exploratory testing of new features',
      'Reproducing and documenting bugs',
      'Reviewing release readiness',
    ],
    skills: ['Test automation', 'Scripting', 'Systematic thinking', 'Clear bug reports'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any science branch',
        detail:
          'Maths or Science both work. This role is unusually open to people arriving from other directions.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI, or any technical degree',
        detail:
          'A computing degree is the straight route, but engineering and science graduates get hired here regularly.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Learn one automation framework',
        detail:
          'Manual testing gets you in; automation is what keeps you moving. Selenium or Playwright plus a scripting language is enough to start.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Junior QA on a product team',
        detail:
          'One of the most accessible entry points into software in Egypt, and a legitimate side door for people whose degree was not computing.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Automation lead — or step across into development',
        detail:
          'Test automation is real software engineering, and plenty of QA engineers move into development from it. Others go deeper into performance or security testing.',
      },
    ],
    majorIds: ['computer-science', 'information-systems'],
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    icon: '⚙️',
    field: 'Engineering',
    blurb: 'Design and test physical products and mechanical systems.',
    description:
      'Mechanical engineers model, simulate, and test physical designs, then work with manufacturing to produce them. Roles span automotive, aerospace, energy, robotics, and medical devices.',
    education: "Faculty of Engineering (5 yrs) + Engineers Syndicate registration",
    salaryRange: 'EGP 7–13k',
    outlook: 'Stable',
    dayToDay: [
      'CAD modelling and revisions',
      'Running simulations and stress tests',
      'Prototyping and lab testing',
      'Coordinating with manufacturing',
    ],
    skills: ['CAD', 'Simulation (FEA/CFD)', 'Materials knowledge', 'Documentation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة) is the only route into Faculty of Engineering. Engineering sits near the top of the Tansik scale, so the score matters.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Faculty of Engineering, mechanical department',
        detail:
          'Five years. The first is a general preparatory year; you choose the department after it, and your first-year result decides whether you get your choice.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Summer training, and learn CAD properly',
        detail:
          'Summer training in a factory or workshop is a graduation requirement — use it to see production rather than to collect a stamp. SolidWorks or AutoCAD, then a simulation package.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Register with the Engineers Syndicate',
        detail:
          'Registration with the Engineers Syndicate (نقابة المهندسين) is what makes you an engineer in the legal sense. It is a paperwork step, but you cannot practise or sign work without it.',
      },
      {
        kind: 'work',
        when: 'Years 0–5',
        title: 'Site, factory or design office',
        detail:
          'Most graduates start in production, maintenance or a design office. Depth in one sector — automotive, HVAC, oil and gas, manufacturing — is what raises pay after the first few years.',
      },
    ],
    majorIds: ['mechanical-engineering', 'physics'],
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    icon: '🦾',
    field: 'Engineering',
    blurb: 'Combine mechanics, electronics, and code into machines that move.',
    description:
      'Robotics sits at the intersection of mechanical design, control theory, and software. Expect to work across all three rather than specialising early, and expect a lot of time debugging the gap between simulation and the real world.',
    education: "Faculty of Engineering (5 yrs) + Engineers Syndicate",
    salaryRange: 'EGP 9–16k',
    outlook: 'Growing',
    dayToDay: [
      'Designing mechanisms and actuators',
      'Writing control and perception software',
      'Testing on physical hardware',
      'Diagnosing sensor and calibration issues',
    ],
    skills: ['Control systems', 'Programming', 'Mechanical design', 'Systems debugging'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة), and a high score: this route runs through Engineering.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Engineering — mechatronics, mechanical, or electrical',
        detail:
          'Mechatronics departments are the direct fit; mechanical and electrical both arrive here too. Control systems is the course that matters most.',
      },
      {
        kind: 'build',
        when: 'Years 2–5',
        title: 'Build robots and compete',
        detail:
          'Student competition teams are the real training — Egypt sends teams to regional and international robotics contests every year. Learn ROS while you are at it.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Engineers Syndicate registration',
        detail:
          'Standard for every engineering graduate, and required before you can practise.',
      },
      {
        kind: 'work',
        when: 'Years 0–5',
        title: 'Automation first, robotics later',
        detail:
          'Egypt’s market is mostly industrial automation and PLC work rather than research robotics — a good, real place to start. Research posts usually need a postgraduate degree, often abroad.',
      },
    ],
    majorIds: ['mechanical-engineering', 'computer-science', 'electrical-engineering'],
  },
  {
    id: 'aerospace-engineer',
    title: 'Aerospace Engineer',
    icon: '✈️',
    field: 'Engineering',
    blurb: 'Design aircraft, spacecraft, and the systems that keep them flying.',
    description:
      'Aerospace engineers work on aerodynamics, propulsion, structures, and avionics. Safety margins and certification requirements shape everything, so the pace is deliberate and the documentation burden is heavy.',
    education: "Faculty of Engineering (5 yrs) + Engineers Syndicate; few employers locally",
    salaryRange: 'EGP 8–15k',
    outlook: 'Competitive',
    dayToDay: [
      'Aerodynamic and structural analysis',
      'Running simulations against design limits',
      'Reviewing test flight or wind tunnel data',
      'Writing certification documentation',
    ],
    skills: ['Fluid dynamics', 'Structural analysis', 'Simulation tools', 'Rigour'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة), with a strong score. Be clear-eyed early: the local employer list here is short.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Engineering — aerospace or mechanical',
        detail:
          'Cairo University has an aerospace department; mechanical engineering elsewhere reaches the same place through aerodynamics and structures.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Fluid dynamics, structures, and simulation tools',
        detail:
          'This is a simulation-heavy field. Learn a CFD and an FEA package well enough to defend your results.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Engineers Syndicate, then aim at the real employers',
        detail:
          'EgyptAir maintenance, the Arab Organization for Industrialization, and defence manufacturing are the main local doors. Many graduates go abroad or into adjacent mechanical work instead.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Postgraduate study or emigration, honestly',
        detail:
          'The field concentrates in Europe, the Gulf and the US. A funded Master’s abroad is the most common way Egyptian graduates actually reach aerospace work — plan for it early rather than discovering it late.',
      },
    ],
    majorIds: ['mechanical-engineering', 'physics', 'electrical-engineering'],
  },
  {
    id: 'biomedical-engineer',
    title: 'Biomedical Engineer',
    icon: '🩻',
    field: 'Engineering',
    blurb: 'Apply engineering to medical devices and clinical problems.',
    description:
      'Biomedical engineers design prosthetics, imaging equipment, implants, and diagnostic devices. The work is heavily regulated — understanding the approval process matters as much as the engineering itself.',
    education: "Faculty of Engineering, biomedical branch (5 yrs) + Engineers Syndicate",
    salaryRange: 'EGP 8–15k',
    outlook: 'Growing',
    dayToDay: [
      'Designing and prototyping devices',
      'Testing for safety and biocompatibility',
      'Preparing regulatory submissions',
      'Working with clinicians on requirements',
    ],
    skills: ['Device design', 'Biology fundamentals', 'Regulatory knowledge', 'Testing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة) — note that it is Maths, not Science, that Engineering requires — even though this career is medical.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Engineering, biomedical department',
        detail:
          'Five years. Cairo, Helwan and several private universities run biomedical departments; the syllabus mixes electronics, mechanics and human physiology.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Train inside a hospital',
        detail:
          'Get summer training in a hospital’s biomedical department. Seeing how imaging equipment actually fails in service teaches you more than a semester of theory.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Engineers Syndicate registration',
        detail:
          'Required like any engineering branch before you practise.',
      },
      {
        kind: 'work',
        when: 'Years 0–5',
        title: 'Devices, then regulation or clinical engineering',
        detail:
          'Most start maintaining and commissioning equipment for hospitals or medical device distributors. From there: regulatory affairs, sales engineering, or postgraduate research into device design.',
      },
    ],
    majorIds: ['mechanical-engineering', 'biology', 'electrical-engineering', 'chemistry', 'chemical-engineering'],
  },
  {
    id: 'healthcare-professional',
    title: 'Healthcare Professional',
    icon: '🩺',
    field: 'Health',
    blurb: 'Clinical roles spanning medicine, nursing, and allied health.',
    description:
      'A broad category covering physicians, nurses, therapists, and technicians. Paths differ sharply in length and cost — nursing can start in 2–4 years, while medicine takes a decade or more including residency.',
    education: "Faculty of Medicine (6 yrs + internship) or Nursing (4 yrs), then syndicate registration",
    salaryRange: 'EGP 7–20k',
    outlook: 'Growing',
    dayToDay: [
      'Direct patient care',
      'Recording and reviewing patient histories',
      'Coordinating with care teams',
      'Continuing education and recertification',
    ],
    skills: ['Clinical knowledge', 'Communication', 'Composure under pressure', 'Ethics'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم) is required for Medicine, Nursing and the allied health faculties. Medicine sits at the very top of the Tansik scale.',
      },
      {
        kind: 'study',
        when: 'Years 1–6',
        title: 'Choose your route — they differ enormously',
        detail:
          'Medicine is 5–6 years plus an internship year; Nursing is 4. Same field, very different length, cost and ceiling, so choose with the timeline in front of you.',
      },
      {
        kind: 'gate',
        when: 'Internship',
        title: 'The امتياز year',
        detail:
          'Medicine graduates do a supervised rotation year across departments. It is where you find out which specialty you can actually live inside.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Syndicate registration',
        detail:
          'The Medical Syndicate for doctors, the Nursing Syndicate for nurses. Practice is not legal without it.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Residency and specialisation',
        detail:
          'Egyptian Fellowship, a Master’s, or a Ministry of Health residency. Specialisation is where pay and autonomy change — and it adds years, so decide deliberately rather than by drift.',
      },
    ],
    majorIds: ['biology', 'psychology', 'nursing', 'public-health', 'nutrition-dietetics', 'medicine'],
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    icon: '💊',
    field: 'Health',
    blurb: 'Dispense medication and advise on safe, effective drug use.',
    description:
      'Pharmacists check prescriptions for interactions and dosing errors and counsel patients. In Egypt the route is the five-year Faculty of Pharmacy plus Pharmacists Syndicate registration, and a large share of graduates go into pharmaceutical manufacturing rather than a pharmacy counter.',
    education: "Faculty of Pharmacy (5 yrs) + Pharmacists Syndicate registration",
    salaryRange: 'EGP 8–15k',
    outlook: 'Stable',
    dayToDay: [
      'Reviewing and dispensing prescriptions',
      'Checking for drug interactions',
      'Counselling patients on usage',
      'Managing inventory and records',
    ],
    skills: ['Pharmacology', 'Precision', 'Patient communication', 'Ethics'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم). Pharmacy is a five-year faculty entered directly from school, not after a science degree.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Faculty of Pharmacy',
        detail:
          'Five years, covering pharmacology, pharmaceutics, and medicinal chemistry. Some faculties run a PharmD track — check the length before you commit.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Train in both directions',
        detail:
          'Do training in a community pharmacy and in a manufacturer. Most graduates end up in industry rather than behind a counter, and you want to have seen both before choosing.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Pharmacists Syndicate registration',
        detail:
          'Registration with the Pharmacists Syndicate (نقابة الصيادلة) is required to dispense. It also sets the profession’s minimum pay scale.',
      },
      {
        kind: 'work',
        when: 'Years 0–5',
        title: 'Community, industry, or regulatory',
        detail:
          'Community pharmacy is the fastest start; pharmaceutical manufacturing and medical representation pay better; regulatory affairs and clinical pharmacy need extra study but have the strongest ceiling.',
      },
    ],
    majorIds: ['biology', 'chemistry', 'pharmacy'],
  },
  {
    id: 'physical-therapist',
    title: 'Physical Therapist',
    icon: '🦵',
    field: 'Health',
    blurb: 'Help people recover movement and manage pain after injury or illness.',
    description:
      'Physical therapists assess movement, design rehabilitation programmes, and coach patients through recovery. It is hands-on, relationship-driven work, and requires a doctoral degree in many countries.',
    education: "Faculty of Physical Therapy (5 yrs) + registration",
    salaryRange: 'EGP 7–13k',
    outlook: 'Growing',
    dayToDay: [
      'Assessing patient mobility and pain',
      'Guiding patients through exercises',
      'Adjusting treatment plans over time',
      'Documenting progress for insurers',
    ],
    skills: ['Anatomy', 'Motivational coaching', 'Manual technique', 'Patience'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم). Physical Therapy is its own five-year faculty, entered straight from Thanaweya Amma.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Faculty of Physical Therapy',
        detail:
          'Five years. Anatomy and biomechanics early, then the clinical specialisms — orthopaedic, neurological, paediatric, cardiopulmonary.',
      },
      {
        kind: 'build',
        when: 'Years 4–5',
        title: 'Clinical placements',
        detail:
          'Rotations across hospital departments. Hands-on technique cannot be learned from a book, and the placement is where you build it.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Register, then join a clinic or hospital',
        detail:
          'Registration is required to practise. Sports clubs, hospitals and private clinics all hire graduates.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Specialise, then consider your own clinic',
        detail:
          'Manual therapy, sports rehabilitation or neurological rehab. Many physical therapists in Egypt eventually run their own practice, which makes it a business as well as a clinical career.',
      },
    ],
    majorIds: ['biology', 'psychology', 'nursing', 'physical-therapy'],
  },
  {
    id: 'clinical-psychologist',
    title: 'Clinical Psychologist',
    icon: '🛋️',
    field: 'Health',
    blurb: 'Assess and treat mental health conditions.',
    description:
      'Clinical psychologists diagnose and treat psychological disorders through assessment and therapy. This is the licensed clinical route — it requires doctoral study and supervised practice hours, so plan for a long runway.',
    education: "Psychology degree + postgraduate clinical diploma or MA",
    salaryRange: 'EGP 7–14k',
    outlook: 'Growing',
    dayToDay: [
      'Running therapy sessions',
      'Administering psychological assessments',
      'Writing case notes and treatment plans',
      'Consulting with other clinicians',
    ],
    skills: ['Clinical assessment', 'Therapeutic technique', 'Ethics', 'Emotional resilience'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Science or Literature branch',
        detail:
          'Psychology is reachable from both — Faculty of Arts takes أدبي, and some routes accept علمي. Check the specific faculty.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Psychology degree',
        detail:
          'Four years at Arts or a private university. Push towards the clinical and assessment courses, and take the statistics seriously.',
      },
      {
        kind: 'build',
        when: 'Years 4–5',
        title: 'Volunteer clinical exposure',
        detail:
          'Hospitals, NGOs and helplines take volunteers. You need to know how you respond to distress before you build a career on it.',
      },
      {
        kind: 'gate',
        when: 'Years 5–7',
        title: 'Postgraduate diploma, then Master’s',
        detail:
          'The clinical route runs through a diploma and an MA in clinical psychology, with supervised hours. This is a long runway — plan for years, not months.',
      },
      {
        kind: 'grow',
        when: 'Years 7+',
        title: 'Supervised practice, then independent',
        detail:
          'Practise under supervision before working alone, and keep your own supervision going afterwards. Egypt’s mental health sector is growing and under-supplied.',
      },
    ],
    majorIds: ['psychology'],
  },
  {
    id: 'epidemiologist',
    title: 'Epidemiologist',
    icon: '🦠',
    field: 'Health',
    blurb: 'Track how disease spreads through populations, and why.',
    description:
      'Epidemiologists design population studies, analyse outbreak data, and advise public health policy. It combines biology with heavy statistics — the analysis skills transfer directly from a data background.',
    education: "Medicine or Science, then a public health postgraduate",
    salaryRange: 'EGP 10–18k',
    outlook: 'Growing',
    dayToDay: [
      'Designing population studies',
      'Analysing surveillance and outbreak data',
      'Modelling transmission patterns',
      'Briefing public health officials',
    ],
    skills: ['Biostatistics', 'Study design', 'Data analysis', 'Scientific writing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم), for Medicine or Science. A statistics-led route through the Maths branch also reaches this field.',
      },
      {
        kind: 'study',
        when: 'Years 1–6',
        title: 'Medicine, Science, or Public Health',
        detail:
          'Doctors, biologists and statisticians all become epidemiologists. Whichever you start from, you will need to add the other half.',
      },
      {
        kind: 'build',
        when: 'Years 3+',
        title: 'Learn biostatistics and a statistical language',
        detail:
          'R or Stata, and study design done properly. This is the skill that makes you employable rather than merely interested.',
      },
      {
        kind: 'study',
        when: 'Postgraduate',
        title: 'MPH or a public health Master’s',
        detail:
          'Effectively required. Egyptian faculties of public health offer it, and it is a common target for Fulbright and Chevening applicants.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Ministry of Health, WHO, or research',
        detail:
          'Surveillance units, international organisations with Cairo offices, and university research groups are the main employers. Outbreak work is the visible part; most of it is careful, unglamorous data.',
      },
    ],
    majorIds: ['biology', 'data-science', 'public-health', 'nursing', 'mathematics', 'medicine'],
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist',
    icon: '🔬',
    field: 'Research',
    blurb: 'Run studies that produce new knowledge in academia or industry.',
    description:
      'Research scientists design experiments, analyse results, and publish findings. Academic tracks usually require a PhD; industry research labs sometimes hire at Master’s level.',
    education: "Faculty of Science + MSc/PhD; university or research-institute post",
    salaryRange: 'EGP 7–14k',
    outlook: 'Stable',
    dayToDay: [
      'Designing and running experiments',
      'Reading and reviewing literature',
      'Writing papers and grant proposals',
      'Presenting at conferences',
    ],
    skills: ['Experimental design', 'Statistics', 'Technical writing', 'Persistence'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Science or Maths branch',
        detail:
          'The Science branch (علمي علوم) or the Maths branch (علمي رياضة), depending on the discipline. Curiosity about why, not just what, is the actual entry requirement.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Science, Engineering, or Medicine',
        detail:
          'Four years for most sciences. Your graduation project is the first piece of research you will be judged on — choose the supervisor as carefully as the topic.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Join a lab as an undergraduate',
        detail:
          'Ask to help in a research group before you graduate. A named supervisor who will write you a real letter is worth more than a high grade alone.',
      },
      {
        kind: 'study',
        when: 'Years 4–8',
        title: 'MSc, then PhD',
        detail:
          'Academic research requires a doctorate. In Egypt, a معيد (teaching assistant) post funds your postgraduate study while you work — it is the standard route, and competitive.',
      },
      {
        kind: 'grow',
        when: 'Years 8+',
        title: 'Publish, or move to industry research',
        detail:
          'University and research-institute posts run on publications and grants. Industry research — pharmaceuticals, energy, technology — pays better and asks different questions; funded study abroad is the third door.',
      },
    ],
    majorIds: ['biology', 'data-science', 'psychology', 'environmental-science', 'mechanical-engineering', 'physics', 'chemistry', 'mathematics', 'economics', 'sociology', 'political-science', 'civil-engineering', 'electrical-engineering', 'chemical-engineering', 'anthropology', 'geology', 'philosophy', 'medicine', 'pharmacy'],
  },
  {
    id: 'bioinformatics-scientist',
    title: 'Bioinformatics Scientist',
    icon: '🧬',
    field: 'Research',
    blurb: 'Analyse genetic and biological data at a scale no lab bench can handle.',
    description:
      'Bioinformaticians write code to process genomic and molecular datasets, searching for patterns that drive drug discovery and diagnostics. It is a genuine hybrid role — you need real biology and real programming.',
    education: "Science or Computers & AI + postgraduate study",
    salaryRange: 'EGP 10–20k',
    outlook: 'Growing',
    dayToDay: [
      'Building genomic analysis pipelines',
      'Interpreting sequencing results',
      'Collaborating with wet-lab researchers',
      'Maintaining reproducible workflows',
    ],
    skills: ['Python or R', 'Genomics', 'Statistics', 'Pipeline engineering'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم) for biology; the Maths branch works if you enter from the computing side.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Biology, or Computers & AI',
        detail:
          'Either half is a legitimate start, and you build the other one yourself. Biologists usually find the programming harder to add than programmers find the biology.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn Python or R on real biological data',
        detail:
          'Public genomic datasets are free. Reproducing a published analysis end to end teaches more than any course.',
      },
      {
        kind: 'study',
        when: 'Postgraduate',
        title: 'MSc in bioinformatics or genomics',
        detail:
          'Effectively required. Zewail City, Nile University and several Egyptian faculties run programmes; funded routes abroad are common in this field.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Research institute, pharma, or remote',
        detail:
          'Egypt’s research institutes and pharmaceutical companies hire; so do international groups who will take remote analysts. Genomics is expanding faster than the supply of people who can do both halves.',
      },
    ],
    majorIds: ['biology', 'data-science', 'computer-science', 'mathematics', 'pharmacy'],
  },
  {
    id: 'conservation-scientist',
    title: 'Conservation Scientist',
    icon: '🌲',
    field: 'Research',
    blurb: 'Manage and protect natural habitats, forests, and wildlife.',
    description:
      'Conservation scientists survey ecosystems, plan land management, and work with landowners and agencies on protection strategies. Expect a genuine mix of fieldwork and negotiation.',
    education: "Faculty of Science (ecology or environmental branch)",
    salaryRange: 'EGP 6–11k',
    outlook: 'Stable',
    dayToDay: [
      'Surveying habitats and species populations',
      'Writing land management plans',
      'Advising landowners and agencies',
      'Monitoring restoration projects',
    ],
    skills: ['Field ecology', 'GIS', 'Stakeholder negotiation', 'Report writing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم), for Faculty of Science — ecology or environmental.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Science — ecology or environmental sciences',
        detail:
          'Four years. Ecology, botany and zoology, with the field methods courses being the ones that matter most in practice.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Field surveys and GIS',
        detail:
          'Volunteer on protected-area surveys — Egypt has protectorates from Wadi El Rayan to Ras Mohammed. Learn QGIS; it appears in nearly every job description in this field.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'NGO, protectorate, or environment ministry',
        detail:
          'The Egyptian Environmental Affairs Agency, protected area teams, and conservation NGOs are the main employers. Posts are few, so build contacts through volunteering before you graduate.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Postgraduate study, or project management',
        detail:
          'An MSc opens research and international project posts. Much of the funded work runs through international programmes, so grant writing becomes a core skill.',
      },
    ],
    majorIds: ['environmental-science', 'biology', 'geology'],
  },
  {
    id: 'environmental-scientist',
    title: 'Environmental Scientist',
    icon: '🌱',
    field: 'Science',
    blurb: 'Assess environmental impact and advise on remediation or policy.',
    description:
      'Environmental scientists collect field samples, analyse contamination and ecosystem data, and write assessments used by regulators and companies. Consulting is the largest employer.',
    education: "Faculty of Science (environmental) or Engineering",
    salaryRange: 'EGP 7–13k',
    outlook: 'Growing',
    dayToDay: [
      'Field sampling and site visits',
      'Lab and GIS analysis',
      'Writing impact assessments',
      'Advising on regulatory compliance',
    ],
    skills: ['Field methods', 'GIS', 'Regulatory knowledge', 'Report writing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم) for Science; the Maths branch if you route through environmental engineering instead.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Science (environmental), or Engineering',
        detail:
          'Four years at Science, five through Engineering. Both reach the consulting work that employs most people in this field.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Learn EIA and GIS',
        detail:
          'Environmental impact assessment is the document this profession produces. Learn what regulators require, and learn GIS alongside it.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Environmental consultancy',
        detail:
          'Consultancies preparing impact assessments for developers and industry are the largest employer. Expect field sampling and long reports in equal measure.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Industry compliance, or policy',
        detail:
          'Corporate environmental compliance in industry, EEAA and ministry posts, or international organisations. Egypt’s renewable energy and water programmes are pulling demand upward.',
      },
    ],
    majorIds: ['environmental-science', 'biology', 'chemistry', 'civil-engineering', 'public-health', 'chemical-engineering', 'geology'],
  },
  {
    id: 'urban-planner',
    title: 'Urban Planner',
    icon: '🏙️',
    field: 'Public Sector',
    blurb: 'Shape how cities grow — land use, transport, and housing.',
    description:
      'Urban planners evaluate development proposals, model land use, and balance competing demands from residents, developers, and government. Public meetings are a real and often difficult part of the job.',
    education: "Faculty of Regional & Urban Planning, or Engineering (architecture)",
    salaryRange: 'EGP 7–13k',
    outlook: 'Growing',
    dayToDay: [
      'Reviewing development proposals',
      'Mapping land use with GIS',
      'Running public consultations',
      'Drafting zoning recommendations',
    ],
    skills: ['GIS', 'Policy analysis', 'Public speaking', 'Negotiation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة), for the Faculty of Regional and Urban Planning at Cairo University, or the architecture route through Engineering.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Regional & Urban Planning, or Engineering (architecture)',
        detail:
          'Four to five years depending on the faculty. Land use, transport planning and urban economics are the core.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'GIS, seriously',
        detail:
          'GIS is the working tool of this profession. Learn QGIS or ArcGIS well enough to build an analysis, not just a map.',
      },
      {
        kind: 'work',
        when: 'Graduation',
        title: 'Ministry, authority, or consultancy',
        detail:
          'The Ministry of Housing, the New Urban Communities Authority, GOPP and private planning consultancies are the employers. Egypt’s new cities programme is the largest driver of demand.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or postgraduate study',
        detail:
          'Transport, housing policy, or heritage and informal areas. A Master’s strengthens the move into policy and international development work.',
      },
    ],
    majorIds: ['environmental-science', 'business', 'civil-engineering', 'political-science', 'urban-planning', 'architecture'],
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    icon: '📈',
    field: 'Business',
    blurb: 'Bridge business needs and technical or operational solutions.',
    description:
      'Business analysts gather requirements, map processes, and use data to recommend changes. It is a common entry point into both consulting and product roles.',
    education: "Faculty of Commerce, Economics, or Business Information Systems",
    salaryRange: 'EGP 9–17k',
    outlook: 'Growing',
    dayToDay: [
      'Interviewing stakeholders',
      'Building models and reports',
      'Documenting requirements',
      'Tracking metrics against targets',
    ],
    skills: ['SQL & spreadsheets', 'Process mapping', 'Stakeholder management', 'Clear writing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Commerce and Business Information Systems take all branches; a maths background helps with the analytical half.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Commerce, Economics, or Business Information Systems',
        detail:
          'Four years. Statistics, accounting and information systems are the courses that carry directly into the work.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Excel to a serious level, then SQL',
        detail:
          'Spreadsheet modelling and SQL are the two tools you will be tested on. Process mapping is the third, and almost nobody learns it before their first job.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Analyst at a bank, telecom, or consultancy',
        detail:
          'Egypt’s banks, telecoms and shared service centres hire analysts in volume, and multinational back offices in Cairo are a strong entry point.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or move into product or consulting',
        detail:
          'Depth in a domain — banking, supply chain, healthcare — raises your value fast. Business analysis is also the most common route into product management.',
      },
    ],
    majorIds: ['business', 'data-science', 'environmental-science', 'economics', 'accounting-finance', 'information-systems'],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    icon: '🧭',
    field: 'Business',
    blurb: 'Decide what a product should do, and why, and in what order.',
    description:
      'Product managers set direction by weighing user needs, business goals, and engineering cost. They have responsibility without direct authority, so persuasion and clear reasoning matter more than any technical skill.',
    education: "Any degree; usually entered after engineering, design, or analyst work",
    salaryRange: 'EGP 18–35k',
    outlook: 'Growing',
    dayToDay: [
      'Talking to users about their problems',
      'Prioritising the roadmap',
      'Writing specs and success metrics',
      'Aligning design, engineering, and leadership',
    ],
    skills: ['Prioritisation', 'Written communication', 'Data literacy', 'Influence'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'No requirement. This role is entered sideways, not straight out of school.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Any degree — engineering, business, or design',
        detail:
          'The degree is not the gate. Writing clearly and arguing from evidence are the transferable skills to build wherever you study.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Ship something with other people',
        detail:
          'Run a student project, a startup competition team, or a club with real users. The core skill is getting a group to agree on what to build next.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Enter through engineering, design, or analysis',
        detail:
          'Almost nobody is hired as a product manager straight from graduation. Two or three years as a developer, designer or analyst is the normal entry ticket.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Associate PM, then own a product',
        detail:
          'Egypt’s fintech and e-commerce companies are the largest hirers. From there: senior PM, product lead, or founding your own — the skills overlap heavily.',
      },
    ],
    majorIds: ['business', 'computer-science', 'graphic-design', 'communications', 'information-systems'],
  },
  {
    id: 'accountant',
    title: 'Accountant',
    icon: '🧾',
    field: 'Business',
    blurb: 'Prepare, audit, and interpret financial records.',
    description:
      'Accountants handle financial reporting, tax, and audit. It is one of the most reliably employable paths out of Faculty of Commerce, and professional certification — ESAA locally, or ACCA/CMA internationally — drives most of the salary progression.',
    education: "Faculty of Commerce (accounting); ESAA, ACCA or CMA raises the ceiling",
    salaryRange: 'EGP 7–14k',
    outlook: 'Stable',
    dayToDay: [
      'Preparing financial statements',
      'Reconciling accounts',
      'Preparing tax filings',
      'Advising on compliance',
    ],
    skills: ['Accounting standards', 'Spreadsheets', 'Accuracy', 'Ethics'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Faculty of Commerce accepts all Thanaweya Amma branches. Comfort with arithmetic helps more than a maths background.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Commerce, accounting division',
        detail:
          'Four years. Choose the English section if you can — it opens multinational and Big Four hiring, which is where the pay difference starts.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Internship at an audit firm',
        detail:
          'A busy-season internship at an audit firm tells you quickly whether you can live with the hours. It is also the main recruiting pipeline.',
      },
      {
        kind: 'work',
        when: 'Graduation',
        title: 'Audit firm, or corporate finance',
        detail:
          'The Big Four and Egyptian audit firms hire graduates in cohorts. Audit is harder work with a faster learning curve; corporate accounting is steadier.',
      },
      {
        kind: 'gate',
        when: 'Years 2–6',
        title: 'Certify — ESAA, ACCA or CMA',
        detail:
          'This is where the salary curve actually bends. ESAA registration is the Egyptian licence to sign audits; ACCA and CMA open multinational and Gulf roles.',
      },
    ],
    majorIds: ['business', 'economics', 'accounting-finance'],
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    icon: '💹',
    field: 'Business',
    blurb: 'Evaluate investments, budgets, and company performance.',
    description:
      'Financial analysts build models, value companies or projects, and recommend where money should go. The hours in investment banking and private equity are notoriously long; corporate finance roles are far more moderate.',
    education: "Faculty of Commerce or Economics; CFA for advancement",
    salaryRange: 'EGP 10–20k',
    outlook: 'Growing',
    dayToDay: [
      'Building and stress-testing financial models',
      'Researching companies and markets',
      'Preparing investment recommendations',
      'Presenting to decision-makers',
    ],
    skills: ['Financial modelling', 'Valuation', 'Excel', 'Written analysis'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Commerce and Economics take all branches. The Maths branch helps but is not required.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Commerce, Economics, or Business Administration',
        detail:
          'Four years, English section if possible. Corporate finance, valuation and statistics are the relevant courses.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Build models, and follow the EGX',
        detail:
          'Financial modelling in Excel is the hard skill; following listed Egyptian companies and writing your own short valuations is the practice nobody assigns you.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Analyst at a bank, brokerage, or corporate',
        detail:
          'Investment banking and brokerage pay most and demand the hours; corporate finance and FP&A roles are far more liveable. Both are legitimate starts.',
      },
      {
        kind: 'grow',
        when: 'Years 2–5',
        title: 'CFA, then specialise',
        detail:
          'The CFA is three levels over at least two years and is the recognised credential for investment work. Equity research, asset management, private equity and corporate finance diverge from here.',
      },
    ],
    majorIds: ['business', 'data-science', 'economics', 'mathematics', 'accounting-finance'],
  },
  {
    id: 'actuary',
    title: 'Actuary',
    icon: '🎲',
    field: 'Business',
    blurb: 'Price risk mathematically for insurance and pensions.',
    description:
      'Actuaries model the likelihood and cost of future events to set premiums and reserves. Entry is through a long series of professional exams taken while working — the exams, not the degree, gate progression.',
    education: "Commerce (insurance/actuarial) or Science (maths), plus professional exams",
    salaryRange: 'EGP 12–25k',
    outlook: 'Growing',
    dayToDay: [
      'Building risk and pricing models',
      'Analysing claims data',
      'Setting reserve requirements',
      'Studying for the next exam',
    ],
    skills: ['Probability', 'Statistical modelling', 'Programming', 'Self-discipline'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة). This is one career where the maths is genuinely non-negotiable.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Commerce (insurance/actuarial) or Science (mathematics)',
        detail:
          'Cairo University’s Faculty of Commerce runs an actuarial division; a mathematics or statistics degree reaches the same place.',
      },
      {
        kind: 'gate',
        when: 'Years 2–4',
        title: 'Start the professional exams early',
        detail:
          'The exams, not the degree, gate this profession — IFoA, SOA, or the Egyptian actuarial route. Passing the first one or two before graduating puts you well ahead.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Actuarial trainee at an insurer',
        detail:
          'Egypt’s insurance companies and the Financial Regulatory Authority hire trainees, usually with study support and paid exam attempts. Ask about that support before accepting.',
      },
      {
        kind: 'gate',
        when: 'Years 3–8',
        title: 'Qualify, and keep studying',
        detail:
          'Full qualification takes most people six to ten years of exams alongside work. It is a long grind with an unusually secure and well-paid destination, including in the Gulf.',
      },
    ],
    majorIds: ['data-science', 'business', 'mathematics', 'economics', 'accounting-finance'],
  },
  {
    id: 'hr-specialist',
    title: 'HR / People Specialist',
    icon: '👥',
    field: 'Business',
    blurb: 'Recruit, develop, and support the people inside an organisation.',
    description:
      'HR specialists handle hiring, onboarding, performance processes, and employee relations. A psychology background transfers well, since the work is fundamentally about behaviour, motivation, and fair process.',
    education: "Faculty of Commerce, Arts, or Business Administration",
    salaryRange: 'EGP 7–13k',
    outlook: 'Stable',
    dayToDay: [
      'Screening and interviewing candidates',
      'Running onboarding and training',
      'Handling employee relations issues',
      'Maintaining policy and compliance',
    ],
    skills: ['Interviewing', 'Conflict resolution', 'Discretion', 'Employment law basics'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Commerce, Arts and Business Administration all accept a range of branches.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Commerce, Business Administration, or Psychology',
        detail:
          'Four years. Organisational behaviour and labour law are the two most directly useful courses.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Run recruitment for a student organisation',
        detail:
          'Student activities like AIESEC and Enactus recruit and manage large teams — genuinely relevant experience, and it is on offer to anyone who joins.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'HR coordinator or recruiter',
        detail:
          'Recruitment is the usual entry point and the fastest to learn in. Egyptian labour law knowledge separates competent HR from administrative HR early.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise — or go generalist and lead',
        detail:
          'Talent acquisition, compensation and benefits, or learning and development. An HR diploma or CIPD strengthens the move into business partner and management roles.',
      },
    ],
    majorIds: ['psychology', 'business', 'sociology', 'communications', 'education'],
  },
  {
    id: 'supply-chain-manager',
    title: 'Supply Chain Manager',
    icon: '📦',
    field: 'Business',
    blurb: 'Keep goods moving from supplier to customer, on time and on budget.',
    description:
      'Supply chain managers plan procurement, inventory, and logistics. The role became far more visible after recent global disruptions, and it rewards people who like optimising systems under real-world constraints.',
    education: "Commerce or Engineering; Suez Canal logistics drives demand",
    salaryRange: 'EGP 10–20k',
    outlook: 'Growing',
    dayToDay: [
      'Forecasting demand and inventory needs',
      'Negotiating with suppliers',
      'Tracking shipments and resolving delays',
      'Analysing cost and lead-time data',
    ],
    skills: ['Logistics planning', 'Negotiation', 'Data analysis', 'Problem solving'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Commerce takes all branches; the Maths branch is needed if you route in through Engineering.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Commerce, or Engineering (industrial)',
        detail:
          'Four years through Commerce, five through Engineering. Logistics, operations research and statistics are the relevant strands.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn the analytics, and see a warehouse',
        detail:
          'Excel and inventory modelling, plus an internship in an actual distribution operation. The gap between the model and the loading dock is the whole job.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Planning, procurement, or logistics coordination',
        detail:
          'FMCG multinationals, manufacturers and the logistics companies clustered around the Suez Canal and Alexandria hire steadily at this level.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Certify and broaden',
        detail:
          'CSCP or CIPS strengthens the move upward. Egypt’s position on the canal makes this an unusually strong local field, with a direct bridge to Gulf logistics roles.',
      },
    ],
    majorIds: ['business', 'mechanical-engineering', 'information-systems'],
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    icon: '📣',
    field: 'Business',
    blurb: 'Plan and run campaigns that reach and convert an audience.',
    description:
      'Marketing managers set strategy, run campaigns, and measure results. The role has become far more data-driven — comfort with analytics is now close to mandatory.',
    education: "Commerce, Mass Communication, or Business Administration",
    salaryRange: 'EGP 9–18k',
    outlook: 'Growing',
    dayToDay: [
      'Planning campaigns and budgets',
      'Reviewing performance metrics',
      'Briefing designers and writers',
      'Researching the competitive landscape',
    ],
    skills: ['Copywriting', 'Analytics', 'Brand strategy', 'Budgeting'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Mass Communication and Commerce take all branches.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Mass Communication, Commerce, or Business Administration',
        detail:
          'Four years. Consumer behaviour, market research and statistics matter more than the creative courses people expect.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Run real campaigns and learn the analytics',
        detail:
          'Manage social accounts for a student club, a small business, or your own project. Google Analytics and Meta’s ad tools are learnable free and are screened for in hiring.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Agency or brand — pick deliberately',
        detail:
          'Agencies teach speed and breadth across clients; brand-side marketing teaches depth and ownership. Cairo has a large agency scene, and it is the more common start.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, then manage',
        detail:
          'Performance marketing, brand, or content. The data-led side pays better and is the harder half to fake, so it is the safer specialisation.',
      },
    ],
    majorIds: ['business', 'graphic-design', 'communications', 'marketing'],
  },
  {
    id: 'entrepreneur',
    title: 'Founder / Entrepreneur',
    icon: '🚀',
    field: 'Business',
    blurb: 'Start and grow your own venture.',
    description:
      'Founders do whatever the business needs — sales, product, hiring, finance. There is no required credential, but the risk profile is very different from employment, and most ventures do not succeed.',
    education: "No formal requirement",
    salaryRange: 'Highly variable',
    outlook: 'Variable',
    dayToDay: [
      'Talking to potential customers',
      'Building or directing the product',
      'Managing cash flow',
      'Hiring and team building',
    ],
    skills: ['Sales', 'Resilience', 'Prioritisation', 'Financial literacy'],
    roadmap: [
      {
        kind: 'school',
        when: 'Anytime',
        title: 'No entry requirement — and no safety net',
        detail:
          'There is no gate on this path, which is exactly why it needs planning the others do not. Most ventures fail; go in knowing what you can afford to lose.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'University, and the ecosystem around it',
        detail:
          'Any degree. Incubators — AUC Venture Lab, Falak, Flat6Labs — and competitions like Enactus give you mentors and a first network at no cost.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Sell something small, now',
        detail:
          'The skill is finding someone who will pay, and it is learnable only by trying. A tiny business that makes real money teaches more than a business plan that wins a prize.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Get a job first, honestly',
        detail:
          'Working somewhere else for two or three years buys you savings, a network, and an understanding of how businesses actually run. Founders who do this fail less often.',
      },
      {
        kind: 'gate',
        when: 'Anytime',
        title: 'Register properly, then raise if you need to',
        detail:
          'GAFI handles company registration; the tax and licensing steps are real work. Egypt’s funding scene is most active in fintech and e-commerce — but revenue is a better first target than investment.',
      },
    ],
    majorIds: ['business', 'computer-science', 'graphic-design', 'marketing', 'accounting-finance'],
  },
  {
    id: 'product-designer',
    title: 'Product / UX Designer',
    icon: '🎨',
    field: 'Design',
    blurb: 'Design how products look, feel, and work for their users.',
    description:
      'Product designers move between research, wireframing, visual design, and testing. Hiring is portfolio-first: a few well-explained case studies matter more than credentials.',
    education: "Faculty of Applied Arts or Fine Arts, or portfolio-based entry",
    salaryRange: 'EGP 9–18k',
    outlook: 'Growing',
    dayToDay: [
      'Sketching and prototyping flows',
      'Running usability tests',
      'Maintaining design systems',
      'Working through feedback with engineers',
    ],
    skills: ['Figma', 'User research', 'Visual hierarchy', 'Giving and taking critique'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Applied and Fine Arts have their own aptitude exams (اختبارات القدرات) alongside the Thanaweya Amma score — check the dates, they are separate.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Applied Arts, Fine Arts — or no degree at all',
        detail:
          'This is a portfolio-first field. A design degree helps, but psychology and engineering graduates move into it regularly.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn Figma, then build case studies',
        detail:
          'Three or four case studies that explain your reasoning — the problem, what you tried, what you changed after testing. Pretty screens without reasoning get filtered out.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Junior designer at an agency or product team',
        detail:
          'Agencies give you volume and variety; product teams give you the feedback loop of watching real users. Egypt’s startup scene hires designers steadily.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or go senior generalist',
        detail:
          'Design systems, research-led design, or product ownership. Design is one of the strongest fields for remote work with foreign employers, which changes the pay ceiling substantially.',
      },
    ],
    majorIds: ['graphic-design', 'psychology', 'mechanical-engineering', 'architecture'],
  },
  {
    id: 'ux-researcher',
    title: 'UX Researcher',
    icon: '🔎',
    field: 'Design',
    blurb: 'Study how people actually use products, and feed that back to teams.',
    description:
      'UX researchers plan studies, interview users, and synthesise findings into recommendations. A psychology or social science background transfers directly, since the core skill is research methods.',
    education: "Psychology, Arts, or Applied Arts; postgraduate study helps",
    salaryRange: 'EGP 9–17k',
    outlook: 'Growing',
    dayToDay: [
      'Recruiting and interviewing participants',
      'Running usability sessions',
      'Analysing qualitative data',
      'Sharing insights with product teams',
    ],
    skills: ['Interviewing', 'Survey design', 'Qualitative analysis', 'Synthesis'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Science or Literature branch',
        detail:
          'Psychology and the social sciences accept both, depending on the faculty.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Psychology, Sociology, or Anthropology',
        detail:
          'Four years. The research methods and statistics courses are the direct qualification — this is one of the few careers where they transfer literally.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Interview people, and write up what you learn',
        detail:
          'Run a small study on something real: how students choose a faculty, how people use a local app. The write-up is your portfolio.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Enter through design, product, or market research',
        detail:
          'Dedicated junior research posts are rare in Egypt. Market research agencies and design teams are the realistic doors in.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Own research for a product',
        detail:
          'Mixed-methods depth, and the harder skill of getting teams to act on findings. Frequently done remotely for foreign product companies.',
      },
    ],
    majorIds: ['psychology', 'graphic-design', 'sociology', 'anthropology'],
  },
  {
    id: 'animator',
    title: 'Animator / Motion Designer',
    icon: '🎬',
    field: 'Design',
    blurb: 'Bring visuals to life for film, games, and interfaces.',
    description:
      'Animators create movement — character animation, motion graphics, or interface transitions. Like most creative fields, work is won on showreel quality, and freelance or studio contract work is common.',
    education: "Applied or Fine Arts, or a strong showreel",
    salaryRange: 'EGP 6–13k',
    outlook: 'Competitive',
    dayToDay: [
      'Storyboarding sequences',
      'Keyframing and refining motion',
      'Rendering and compositing',
      'Revising to client feedback',
    ],
    skills: ['Animation principles', 'Motion software', 'Timing', 'Taking direction'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch, plus the aptitude exam',
        detail:
          'Applied and Fine Arts require اختبارات القدرات in addition to your score. Start drawing and animating long before then.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Applied Arts, Fine Arts — or a showreel instead',
        detail:
          'The degree is optional if the reel is strong. Either way, learn the twelve principles of animation properly; software changes, they do not.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Build a showreel, not a portfolio',
        detail:
          'Sixty seconds of your best work, newest first. Freelance jobs on small local projects both pay and fill the reel.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Studio, agency, or freelance',
        detail:
          'Egypt has a real animation and motion graphics scene serving advertising and regional broadcasters. Motion graphics pays more reliably than character animation locally.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, and look outward',
        detail:
          'Character animation, 3D, VFX or motion design. Gulf broadcasters and international remote contracts are where the rates rise sharply.',
      },
    ],
    majorIds: ['graphic-design', 'film-media-production'],
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    icon: '📝',
    field: 'Communication',
    blurb: 'Explain complex systems clearly to the people who have to use them.',
    description:
      'Technical writers produce documentation, API references, and guides. It suits people who are technical enough to understand a system and patient enough to explain it properly — a rarer combination than it sounds.',
    education: "Al-Alsun, Arts, or a technical degree, plus writing samples",
    salaryRange: 'EGP 9–16k',
    outlook: 'Growing',
    dayToDay: [
      'Interviewing engineers about features',
      'Writing and updating documentation',
      'Testing instructions by following them',
      'Maintaining style and structure',
    ],
    skills: ['Clear writing', 'Technical literacy', 'Information architecture', 'Editing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Al-Alsun and Arts take أدبي; a technical degree route needs the relevant science branch.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Al-Alsun, Arts, or a technical degree',
        detail:
          'Either strong English plus technical curiosity, or a technical degree plus the patience to explain things. Both routes work.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Write, and publish it',
        detail:
          'Document an open-source project, or write tutorials for something you learned. Public writing samples are the entire hiring process here.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Documentation at a software company',
        detail:
          'Software companies and the Cairo offices of multinationals hire technical writers. Learning the docs-as-code toolchain — Git, Markdown, static site generators — makes you noticeably more employable.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or lead documentation',
        detail:
          'API documentation pays best. This is a field with unusually strong remote demand from foreign employers, and English fluency is the qualification that travels.',
      },
    ],
    majorIds: ['computer-science', 'graphic-design', 'communications', 'english-literature'],
  },
  {
    id: 'teacher',
    title: 'Teacher / Educator',
    icon: '🍎',
    field: 'Education',
    blurb: 'Teach a subject you love to the next group of students.',
    description:
      'Teachers plan lessons, deliver them, assess learning, and manage a classroom. Subject knowledge is the easy part — the craft is in pacing, behaviour management, and noticing which student has quietly stopped following.',
    education: "Faculty of Education (4 yrs), or a subject degree plus an educational diploma",
    salaryRange: 'EGP 5–11k',
    outlook: 'Stable',
    dayToDay: [
      'Planning and delivering lessons',
      'Marking work and giving feedback',
      'Managing classroom behaviour',
      'Meeting with parents and colleagues',
    ],
    skills: ['Explaining clearly', 'Patience', 'Lesson planning', 'Assessment design'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Faculty of Education has divisions matching each branch — science, maths, languages, humanities.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Education, or a subject degree plus a diploma',
        detail:
          'Four years at Education, or a subject degree from Science or Arts followed by an educational diploma (دبلوم تربوي). Both routes qualify you.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Teaching practice, in a real classroom',
        detail:
          'The التربية العملية placement is where you find out whether you can hold a room. Tutoring alongside it is common and genuinely useful practice.',
      },
      {
        kind: 'work',
        when: 'Graduation',
        title: 'Ministry appointment, or a private school',
        detail:
          'Ministry of Education appointment through the مسابقة competition gives security and a modest salary. International and language schools pay considerably more and hire faster.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or move into leadership',
        detail:
          'Subject leadership, an international curriculum qualification like IB or IGCSE training, or a Master’s in education. The international school sector is where the pay ceiling is.',
      },
    ],
    majorIds: ['biology', 'psychology', 'computer-science', 'environmental-science', 'business', 'education', 'mathematics', 'physics', 'chemistry', 'sociology', 'political-science', 'communications', 'english-literature', 'history', 'philosophy'],
  },
  {
    id: 'social-worker',
    title: 'Social Worker',
    icon: '🤝',
    field: 'Social Impact',
    blurb: 'Support vulnerable people and connect them to services.',
    description:
      'Social workers assess need, coordinate care, and advocate for clients across child protection, healthcare, and community settings. The work matters enormously and carries a real emotional load — supervision and boundaries are part of the job.',
    education: "Faculty of Social Work (4 yrs)",
    salaryRange: 'EGP 5–9k',
    outlook: 'Growing',
    dayToDay: [
      'Assessing client needs and risk',
      'Coordinating services and referrals',
      'Home and site visits',
      'Maintaining detailed case records',
    ],
    skills: ['Active listening', 'Advocacy', 'Crisis management', 'Boundary setting'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Faculty of Social Work accepts a range of branches; the Literature branch (أدبي) is the most common route in.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Social Work',
        detail:
          'Four years covering case work, community organisation, and social policy. Field training runs through the degree.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Volunteer with real organisations',
        detail:
          'Resala, Misr El Kheir, the Egyptian Food Bank and hospital social services all take volunteers. Do this before you commit — the emotional load is the part no syllabus prepares you for.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'School, hospital, or NGO case work',
        detail:
          'Schools, hospitals, and NGOs are the main employers. Pay is low relative to the responsibility, which is worth knowing plainly rather than discovering later.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or move into programme management',
        detail:
          'Child protection, medical social work, or community development. Programme and grant management at larger NGOs and international organisations pays better and uses the same understanding.',
      },
    ],
    majorIds: ['psychology', 'sociology', 'public-health', 'education', 'social-work', 'criminology'],
  },
  {
    id: 'lawyer',
    title: 'Lawyer',
    icon: '⚖️',
    field: 'Law',
    blurb: 'Advise on, negotiate, and argue matters of law.',
    description:
      'Lawyers research legal questions, draft documents, and represent clients. Egyptian practice is gated by Bar Association registration, and the grade of court you may appear before rises with your years of registration. Far less of it happens in courtrooms than television suggests.',
    education: "Faculty of Law (4 yrs) + Bar Association registration",
    salaryRange: 'EGP 6–15k',
    outlook: 'Stable',
    dayToDay: [
      'Researching case law and precedent',
      'Drafting contracts and filings',
      'Advising clients on risk',
      'Negotiating settlements',
    ],
    skills: ['Legal research', 'Persuasive writing', 'Argumentation', 'Attention to detail'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Literature branch is the usual route',
        detail:
          'The Literature branch (أدبي) for Faculty of Law, though other branches are accepted at some faculties. Check the current Tansik rules.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Law',
        detail:
          'Four years. Egyptian civil, criminal and commercial law, with the French-influenced civil code as the foundation.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Train inside a law office',
        detail:
          'Sit in a practising office during your degree. Drafting and procedure are learned there, not in lectures.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Bar Association registration',
        detail:
          'Registration with the Bar Association (نقابة المحامين) is what allows you to practise, starting under supervision as a trainee (محامٍ تحت التمرين).',
      },
      {
        kind: 'grow',
        when: 'Years 2–10',
        title: 'Climb the court grades',
        detail:
          'Your right of audience rises with years of registration — from first instance up through appeal and cassation. Corporate law firms pay substantially more than litigation practice early on; litigation gives you courtroom standing sooner.',
      },
    ],
    majorIds: ['business', 'psychology', 'environmental-science', 'political-science', 'economics', 'law', 'criminology', 'philosophy', 'history', 'english-literature'],
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    icon: '🌐',
    field: 'Technology',
    blurb: 'Design and maintain the networks everything else runs over.',
    description:
      'Network engineers plan, configure, and troubleshoot the routing, switching, and connectivity that organisations depend on. Vendor certifications carry real weight here — often more than the degree itself.',
    education: "Computers & AI or Engineering, or NTI networking tracks plus certifications",
    salaryRange: 'EGP 10–20k',
    outlook: 'Stable',
    dayToDay: [
      'Configuring routers, switches, and firewalls',
      'Diagnosing latency and outage reports',
      'Planning capacity and network upgrades',
      'Documenting network topology',
    ],
    skills: ['Routing & switching', 'Network security', 'Troubleshooting', 'Documentation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Maths or Science branch',
        detail:
          'Either opens Computers & AI or Engineering; the communications branch of Engineering is the closest fit.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Computers & AI, Engineering (communications), or NTI tracks',
        detail:
          'This is a field where NTI’s free networking programmes carry weight on their own, degree or not.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'CCNA, and build a lab',
        detail:
          'Vendor certifications count for more than the degree here. Practise on emulated topologies at home until the commands are automatic.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Network support at an ISP, telecom or integrator',
        detail:
          'Egypt’s telecoms and system integrators hire steadily at this level. Expect night shifts early on.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Design and senior certification',
        detail:
          'Move from maintaining networks to designing them; CCNP and beyond. Gulf employers recruit heavily from Egypt at this stage.',
      },
    ],
    majorIds: ['information-systems', 'computer-science', 'electrical-engineering'],
  },
  {
    id: 'it-support-specialist',
    title: 'IT Support Specialist',
    icon: '🛠️',
    field: 'Technology',
    blurb: 'Keep an organisation’s people and machines working.',
    description:
      'IT support diagnoses hardware, software, and account problems, and is one of the most accessible entry points into technology — many infrastructure and security careers start at a help desk.',
    education: "Diploma or NTI training plus certifications; degree optional",
    salaryRange: 'EGP 6–10k',
    outlook: 'Stable',
    dayToDay: [
      'Resolving support tickets',
      'Setting up hardware and accounts',
      'Troubleshooting software issues',
      'Maintaining asset inventories',
    ],
    skills: ['Troubleshooting', 'Operating systems', 'Patience', 'Clear explanation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'No branch requirement. This is the most open door in technology.',
      },
      {
        kind: 'study',
        when: 'Years 1–2',
        title: 'Diploma, NTI training, or a degree — any of them',
        detail:
          'A full degree is optional here. A technical diploma or an NTI track plus certifications is a working route in.',
      },
      {
        kind: 'build',
        when: 'Anytime',
        title: 'CompTIA A+ or a Microsoft certification',
        detail:
          'Certifications matter more than the certificate. Fixing machines for people you know is genuine, citable experience.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Help desk',
        detail:
          'The classic first technology job in Egypt. Take the tickets nobody wants — networking, servers, security — because that is how you leave the help desk.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Use it as a doorway',
        detail:
          'Systems administration, networking or security all start here for a large number of people. Treat support as an entrance, not a ceiling.',
      },
    ],
    majorIds: ['information-systems'],
  },
  {
    id: 'civil-engineer',
    title: 'Civil / Structural Engineer',
    icon: '🌉',
    field: 'Engineering',
    blurb: 'Design infrastructure that has to stand for decades and fail safely.',
    description:
      'Civil engineers design bridges, buildings, roads, and water systems, then oversee their construction. Egypt’s large infrastructure and new-city programmes keep demand steady, and Engineers Syndicate consultancy grades gate the senior design work.',
    education: "Faculty of Engineering (5 yrs) + Engineers Syndicate; consultancy grades come later",
    salaryRange: 'EGP 7–14k',
    outlook: 'Growing',
    dayToDay: [
      'Running structural calculations',
      'Reviewing drawings against codes',
      'Site inspections during construction',
      'Coordinating with contractors and planners',
    ],
    skills: ['Structural analysis', 'Codes & standards', 'Site judgement', 'Project coordination'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة). Civil is one of the largest engineering departments in Egypt and demand from the new-city programmes is real.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Faculty of Engineering, civil department',
        detail:
          'Five years, chosen after the preparatory year. Structural analysis, concrete design and soil mechanics are the spine.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Get on site, and learn the codes',
        detail:
          'Summer training on an active site is where you learn what drawings leave out. The Egyptian Code of Practice is the document your career is built on.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Engineers Syndicate registration',
        detail:
          'Mandatory. Your registration date starts the clock on the consultancy grades that come later.',
      },
      {
        kind: 'work',
        when: 'Years 0–10',
        title: 'Site engineer, then design or consultancy grades',
        detail:
          'Most begin as site engineers with a contractor. Design offices are the alternative; Syndicate consultancy grades, which need years of logged practice, are what let you sign senior design work — and what open Gulf recruitment.',
      },
    ],
    majorIds: ['civil-engineering', 'architecture'],
  },
  {
    id: 'chemical-engineer',
    title: 'Chemical / Process Engineer',
    icon: '🏭',
    field: 'Engineering',
    blurb: 'Turn reactions that work in a flask into industrial-scale processes.',
    description:
      'Chemical engineers design and optimise production processes across pharmaceuticals, energy, food, and materials. Safety analysis is a permanent part of the job, because the failure modes at industrial scale are severe.',
    education: "Faculty of Engineering (5 yrs) + Engineers Syndicate",
    salaryRange: 'EGP 9–18k',
    outlook: 'Stable',
    dayToDay: [
      'Modelling and optimising process flows',
      'Running safety and hazard reviews',
      'Troubleshooting plant performance',
      'Scaling lab processes to production',
    ],
    skills: ['Process simulation', 'Thermodynamics', 'Hazard analysis', 'Optimisation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة). High demand from petrochemicals and fertilisers keeps this department competitive.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Engineering, chemical or petrochemical department',
        detail:
          'Five years. Thermodynamics, reaction engineering and process control are the courses that follow you into work.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Plant training and a simulation package',
        detail:
          'Summer training in a real plant, and working knowledge of Aspen HYSYS. Take the process safety material seriously — at industrial scale, failure is not academic.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Engineers Syndicate registration',
        detail:
          'Required to practise, as with every engineering branch.',
      },
      {
        kind: 'work',
        when: 'Years 0–5',
        title: 'Process engineer in industry',
        detail:
          'Petrochemicals, fertilisers, pharmaceuticals, food and cement are the main Egyptian employers. Suez and Damietta hold much of the heavy industry, so expect to relocate or rotate.',
      },
    ],
    majorIds: ['chemical-engineering', 'chemistry'],
  },
  {
    id: 'architect',
    title: 'Architect',
    icon: '🏛️',
    field: 'Design',
    blurb: 'Design buildings that work as spaces, structures, and legal documents.',
    description:
      'Architects develop designs from brief to construction drawings, balancing client wishes against budget, code, and physics. Licensure takes years of logged practice after the degree, so treat the timeline realistically.',
    education: "Faculty of Engineering, architecture branch (5 yrs) + Engineers Syndicate",
    salaryRange: 'EGP 7–14k',
    outlook: 'Stable',
    dayToDay: [
      'Developing designs and drawings',
      'Meeting clients and consultants',
      'Checking designs against building codes',
      'Visiting sites during construction',
    ],
    skills: ['Spatial design', 'CAD & BIM', 'Building regulations', 'Client communication'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Maths branch',
        detail:
          'The Maths branch (علمي رياضة), for Faculty of Engineering. Some architecture programmes also set a drawing aptitude test.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Engineering, architecture department',
        detail:
          'Five years, chosen after the preparatory year. Design studio dominates the timetable and the all-nighters are real.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Master AutoCAD, Revit and a rendering tool',
        detail:
          'BIM has become the expectation rather than a bonus. Summer training in a design office is where you see how a drawing becomes a permit.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Engineers Syndicate registration',
        detail:
          'Required to practise. Your registration date starts the count towards the consultancy grades that let you sign work independently.',
      },
      {
        kind: 'work',
        when: 'Years 0–10',
        title: 'Design office, then licence grades',
        detail:
          'Start in a firm producing drawings under a senior architect. Egypt’s new cities and coastal developments drive most of the work; independent practice comes after years of logged experience.',
      },
    ],
    majorIds: ['architecture'],
  },
  {
    id: 'veterinarian',
    title: 'Veterinarian',
    icon: '🐾',
    field: 'Health',
    blurb: 'Diagnose and treat animals, from pets to livestock.',
    description:
      'Veterinary medicine is as academically demanding as human medicine and admission is famously competitive. Practice spans companion animals, farm work, and public health, and the emotional side — including euthanasia — is a real part of the role.',
    education: "Faculty of Veterinary Medicine (5 yrs) + Veterinary Syndicate",
    salaryRange: 'EGP 6–12k',
    outlook: 'Stable',
    dayToDay: [
      'Examining and diagnosing animals',
      'Performing surgery and procedures',
      'Advising owners on care',
      'Handling emergencies on call',
    ],
    skills: ['Clinical diagnosis', 'Surgical technique', 'Animal handling', 'Emotional resilience'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم). Veterinary Medicine is a five-year faculty entered directly from school.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Faculty of Veterinary Medicine',
        detail:
          'Five years covering anatomy, pathology, surgery and animal production. Academically it is close to human medicine in load.',
      },
      {
        kind: 'build',
        when: 'Years 3–5',
        title: 'Clinic and farm training',
        detail:
          'Split your training between companion animals and livestock — they are almost different professions, and Egypt has substantial demand in both.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Veterinary Syndicate registration',
        detail:
          'Registration with the Veterinary Syndicate (النقابة العامة للأطباء البيطريين) is required before you can practise.',
      },
      {
        kind: 'work',
        when: 'Years 0–5',
        title: 'Clinic, farm, or food safety',
        detail:
          'Small-animal clinics in cities, poultry and livestock production in the governorates, or public health and food inspection roles. Poultry is one of the largest employers in the country.',
      },
    ],
    majorIds: ['biology', 'veterinary-medicine'],
  },
  {
    id: 'dentist',
    title: 'Dentist',
    icon: '🦷',
    field: 'Health',
    blurb: 'Diagnose and treat oral health, with a strong practical craft element.',
    description:
      'Dentistry combines clinical diagnosis with fine manual work, and many dentists eventually run their own practice — which makes it a business as well as a clinical career. Entry is competitive and the training is long.',
    education: "Faculty of Dentistry (5 yrs + internship) + syndicate registration",
    salaryRange: 'EGP 8–18k',
    outlook: 'Growing',
    dayToDay: [
      'Examining patients and reading X-rays',
      'Performing fillings, extractions, and procedures',
      'Planning longer-term treatment',
      'Running or managing a practice',
    ],
    skills: ['Manual dexterity', 'Clinical diagnosis', 'Patient reassurance', 'Business sense'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم), with a score close to Medicine. Dentistry is entered directly from Thanaweya Amma.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Faculty of Dentistry',
        detail:
          'Five years plus an internship year. Clinical work on patients starts earlier here than in most medical training.',
      },
      {
        kind: 'gate',
        when: 'Internship',
        title: 'The امتياز year',
        detail:
          'A supervised year rotating through the clinical departments before independent practice.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Syndicate registration, then assist first',
        detail:
          'Register with the dental syndicate, then work as an assistant in an established clinic. The manual craft develops through repetition and cannot be rushed.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or open a practice',
        detail:
          'Orthodontics, implants, endodontics — specialisation needs a Master’s or fellowship. Many dentists eventually open a clinic, which means learning to run a small business as well.',
      },
    ],
    majorIds: ['biology', 'chemistry', 'dentistry'],
  },
  {
    id: 'dietitian',
    title: 'Dietitian / Nutritionist',
    icon: '🥗',
    field: 'Health',
    blurb: 'Use nutrition clinically to manage disease and improve health.',
    description:
      'Dietitians assess nutritional needs and design plans for patients with diabetes, kidney disease, allergies, and more. "Dietitian" is a protected title in many countries while "nutritionist" often is not — the accredited route matters.',
    education: "Home Economics or Science (Nutrition), or a clinical nutrition diploma",
    salaryRange: 'EGP 6–11k',
    outlook: 'Growing',
    dayToDay: [
      'Assessing patients’ nutritional status',
      'Designing therapeutic meal plans',
      'Counselling patients on changes',
      'Working with medical teams',
    ],
    skills: ['Nutritional assessment', 'Counselling', 'Evidence appraisal', 'Clear explanation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم), for Home Economics (nutrition division), Science, or Agriculture.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Nutrition degree',
        detail:
          'Four years. Biochemistry, physiology and therapeutic nutrition are the courses that separate a clinical dietitian from a general nutrition graduate.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Hospital training',
        detail:
          'Clinical placements in hospital nutrition departments. Diabetes and kidney disease are where the demand in Egypt is concentrated.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Clinical nutrition diploma',
        detail:
          'A postgraduate clinical nutrition diploma is what qualifies you for hospital work. Without it you are limited to general wellness advice — and the distinction matters to employers.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Clinic, hospital, or your own practice',
        detail:
          'Hospital departments, private clinics, sports nutrition, or independent practice. This field has a large unqualified fringe, so credentials are worth stating clearly.',
      },
    ],
    majorIds: ['nutrition-dietetics', 'biology', 'medicine'],
  },
  {
    id: 'counsellor',
    title: 'Counsellor / Therapist',
    icon: '💬',
    field: 'Health',
    blurb: 'Provide talking therapy — a shorter route than clinical psychology.',
    description:
      'Counsellors and psychotherapists help clients work through anxiety, grief, relationships, and addiction. It typically requires a Master’s plus supervised hours rather than a doctorate, making it a faster path into therapeutic work.',
    education: "Psychology degree + postgraduate diploma in counselling",
    salaryRange: 'EGP 6–12k',
    outlook: 'Growing',
    dayToDay: [
      'Running individual or group sessions',
      'Building treatment plans with clients',
      'Keeping confidential case notes',
      'Attending own clinical supervision',
    ],
    skills: ['Active listening', 'Therapeutic technique', 'Boundary setting', 'Self-awareness'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Science or Literature branch',
        detail:
          'Both reach Psychology or Social Work depending on the faculty.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Psychology or Social Work degree',
        detail:
          'Four years. This is the shorter route into therapeutic work than clinical psychology — a real difference in years and cost.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Listening practice, supervised',
        detail:
          'Volunteer with helplines or NGO support programmes. Supervised listening hours are the foundation of the craft.',
      },
      {
        kind: 'gate',
        when: 'Years 4–6',
        title: 'Postgraduate diploma in counselling',
        detail:
          'A diploma plus supervised practice hours, rather than the doctorate the clinical route demands. CBT and similar modality training is taken alongside.',
      },
      {
        kind: 'grow',
        when: 'Years 5+',
        title: 'Practice, with your own supervision',
        detail:
          'School counselling, NGOs, private practice, or corporate wellbeing. Keeping your own supervision and clear boundaries is not optional — it is what keeps you able to do the work.',
      },
    ],
    majorIds: ['psychology', 'social-work', 'medicine'],
  },
  {
    id: 'forensic-scientist',
    title: 'Forensic Scientist',
    icon: '🧫',
    field: 'Science',
    blurb: 'Analyse physical evidence to support criminal investigations.',
    description:
      'Forensic scientists process DNA, toxicology, and trace evidence in the lab, and may testify to their findings in court. The real work is slower and far more procedural than television suggests — chain of custody is everything.',
    education: "Faculty of Science (chemistry or biology); most posts sit under the Forensic Medicine Authority",
    salaryRange: 'EGP 7–13k',
    outlook: 'Stable',
    dayToDay: [
      'Analysing samples in the lab',
      'Documenting chain of custody',
      'Writing findings into formal reports',
      'Testifying as an expert witness',
    ],
    skills: ['Lab technique', 'Meticulous documentation', 'Impartiality', 'Courtroom communication'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم), for Faculty of Science — chemistry or biology.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Science — chemistry or biology',
        detail:
          'Four years. Analytical chemistry and molecular biology are the directly relevant strands.',
      },
      {
        kind: 'build',
        when: 'Years 3–4',
        title: 'Analytical lab technique, done meticulously',
        detail:
          'This job is procedure. Chromatography, spectroscopy and DNA methods, with documentation habits good enough to survive cross-examination.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Apply to the Forensic Medicine Authority',
        detail:
          'The Forensic Medicine Authority (مصلحة الطب الشرعي), under the Ministry of Justice, holds most forensic posts in Egypt. Entry is through government appointment, so the process is slow and formal — apply early and expect to wait.',
      },
      {
        kind: 'grow',
        when: 'Years 2+',
        title: 'Specialise — DNA, toxicology, or trace',
        detail:
          'Each strand becomes its own expertise, and senior analysts testify as expert witnesses. A postgraduate degree strengthens both the appointment and the courtroom standing.',
      },
    ],
    majorIds: ['criminology', 'chemistry', 'biology'],
  },
  {
    id: 'geologist',
    title: 'Geologist',
    icon: '🪨',
    field: 'Science',
    blurb: 'Investigate the ground — for resources, hazards, and construction.',
    description:
      'Geologists map subsurface conditions for energy, mining, groundwater, and construction projects, and assess hazards like landslides and earthquakes. Fieldwork is often remote and rotational.',
    education: "Faculty of Science (geology); oil, gas and mining pay the most",
    salaryRange: 'EGP 10–22k',
    outlook: 'Stable',
    dayToDay: [
      'Field mapping and sample collection',
      'Interpreting seismic and borehole data',
      'Assessing ground and hazard risk',
      'Writing technical site reports',
    ],
    skills: ['Field mapping', 'Data interpretation', 'GIS', 'Technical writing'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Thanaweya Amma — Science branch',
        detail:
          'The Science branch (علمي علوم), for Faculty of Science — geology department.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Science — geology',
        detail:
          'Four years. Field camps are the part everyone remembers, and the part employers ask about.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Field mapping and subsurface data',
        detail:
          'Learn to read seismic and borehole logs, and get comfortable with GIS. Petroleum geology courses are what oil and gas employers screen for.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Oil and gas, mining, or groundwater',
        detail:
          'Petroleum companies in the Western Desert and Gulf of Suez pay several times what other geology work does, on rotational schedules away from home. Mining, groundwater and construction ground investigation are the alternatives.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or postgraduate study',
        detail:
          'Reservoir, exploration, hydrogeology or engineering geology. This field tracks commodity cycles closely — hiring swings with oil prices, so build savings when it is good.',
      },
    ],
    majorIds: ['geology', 'environmental-science'],
  },
  {
    id: 'policy-analyst',
    title: 'Policy Analyst',
    icon: '📋',
    field: 'Public Sector',
    blurb: 'Research options and advise on what a government or body should do.',
    description:
      'Policy analysts evaluate evidence, model the impact of proposals, and write the briefs decision-makers actually read. Writing concisely under time pressure is the core skill — a good analyst can compress a month of research into two pages.',
    education: "Economics & Political Science, or a public policy postgraduate",
    salaryRange: 'EGP 9–17k',
    outlook: 'Stable',
    dayToDay: [
      'Reviewing evidence and existing policy',
      'Modelling costs and likely impact',
      'Writing briefing papers',
      'Consulting stakeholders and experts',
    ],
    skills: ['Policy analysis', 'Concise writing', 'Data literacy', 'Stakeholder consultation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Literature branch is the usual route',
        detail:
          'The Literature branch (أدبي) for Economics and Political Science; the Maths branch also works for the economics side.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Economics & Political Science, or Economics',
        detail:
          'Four years. Cairo University’s Faculty of Economics and Political Science is the traditional route, and its network matters in this field.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn to write two pages, and read data',
        detail:
          'The core skill is compressing a month of research into a brief someone will actually read. Statistics and Excel do the other half.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Think tank, ministry, or international organisation',
        detail:
          'ECES, ministry research units, and the Cairo offices of the UN agencies and World Bank are the main employers. Internships are the usual way in.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Postgraduate study, then specialise',
        detail:
          'A public policy Master’s — often abroad through Chevening or Fulbright — is close to standard. Specialisations follow the money: economic, health, education, or environmental policy.',
      },
    ],
    majorIds: ['political-science', 'economics', 'public-health', 'sociology', 'urban-planning', 'philosophy'],
  },
  {
    id: 'paralegal',
    title: 'Paralegal / Legal Assistant',
    icon: '📑',
    field: 'Law',
    blurb: 'Do substantive legal work without the full qualification route.',
    description:
      'Paralegals research case law, draft documents, and manage case files under a lawyer’s supervision. It is a genuine legal career in its own right, and also a common way to test the field before committing to law school.',
    education: "Faculty of Law, or a legal studies diploma",
    salaryRange: 'EGP 5–9k',
    outlook: 'Growing',
    dayToDay: [
      'Researching case law and precedent',
      'Drafting and proofing legal documents',
      'Organising case files and evidence',
      'Liaising with clients and courts',
    ],
    skills: ['Legal research', 'Document drafting', 'Organisation', 'Discretion'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Literature branch is the usual route',
        detail:
          'The Literature branch (أدبي), for Faculty of Law or a legal studies diploma.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Law, or a legal studies diploma',
        detail:
          'The same degree as lawyers take, or a shorter diploma route. Either supports this work.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn drafting and legal research',
        detail:
          'Contract drafting, document management, and finding precedent quickly. Strong English opens the corporate and international firms, where the work is better paid.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Legal assistant at a firm or company',
        detail:
          'Law firms, corporate legal departments and the compliance teams at banks all hire at this level. It is real legal work, not merely administrative.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise — or qualify fully',
        detail:
          'Corporate compliance, contract management, or intellectual property. Plenty of paralegals register with the Bar and move into practice, having tested the field first.',
      },
    ],
    majorIds: ['law', 'criminology', 'political-science'],
  },
  {
    id: 'journalist',
    title: 'Journalist / Reporter',
    icon: '📰',
    field: 'Communication',
    blurb: 'Find out what is happening and explain it to the public.',
    description:
      'Journalists research stories, interview sources, verify facts, and write to deadline. The industry has contracted and freelancing is common, so a body of published work matters more than any particular degree.',
    education: "Faculty of Mass Communication + published work; Journalists Syndicate for staff posts",
    salaryRange: 'EGP 6–12k',
    outlook: 'Competitive',
    dayToDay: [
      'Chasing leads and interviewing sources',
      'Verifying facts and documents',
      'Writing to tight deadlines',
      'Pitching stories to editors',
    ],
    skills: ['Interviewing', 'Fact-checking', 'Fast clear writing', 'Persistence'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Literature branch is the usual route',
        detail:
          'The Literature branch (أدبي), for Faculty of Mass Communication. Read widely in both Arabic and English from now — it is the whole preparation.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Faculty of Mass Communication',
        detail:
          'Four years across journalism, broadcast and public relations. Cairo University’s faculty is the traditional route; AUC and private universities are the alternative.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Get published, anywhere',
        detail:
          'Student papers, online outlets, your own reporting on a story nobody else is covering. Clippings are the currency of this field and nobody asks for your transcript.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Junior reporter, or freelance',
        detail:
          'Newsrooms, online outlets, and the Cairo bureaux of international agencies. Freelancing is common because staff posts are scarce — expect to build income from several places at once.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, and join the syndicate',
        detail:
          'A beat — economics, health, sport, investigations — makes you harder to replace. Journalists Syndicate membership requires qualifying staff employment and brings real professional protections.',
      },
    ],
    majorIds: ['communications', 'english-literature', 'history', 'political-science'],
  },
  {
    id: 'editor',
    title: 'Editor / Copywriter',
    icon: '✒️',
    field: 'Communication',
    blurb: 'Shape other people’s writing, or produce the words a brand runs on.',
    description:
      'Editors structure and sharpen text for publication; copywriters produce it for marketing and product. Both live or die on judgement about audience — knowing what to cut is most of the craft.',
    education: "Al-Alsun, Arts, or Mass Communication, plus a portfolio",
    salaryRange: 'EGP 6–12k',
    outlook: 'Stable',
    dayToDay: [
      'Editing drafts for structure and clarity',
      'Writing headlines and marketing copy',
      'Maintaining a style guide',
      'Briefing and coaching writers',
    ],
    skills: ['Editing', 'Style and voice', 'Audience judgement', 'Deadline discipline'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Literature branch is the usual route',
        detail:
          'The Literature branch (أدبي), for Al-Alsun, Arts or Mass Communication. Al-Alsun has its own language aptitude requirements — check them early.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Al-Alsun, Arts (English), or Mass Communication',
        detail:
          'Four years. Language depth is the qualification; translation training from Al-Alsun transfers unusually well into editing work.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Build a portfolio, and pick a style guide',
        detail:
          'Edit for student publications, write copy for small businesses, take freelance jobs. Learn one style guide properly so your decisions are consistent rather than instinctive.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Publisher, agency, or freelance',
        detail:
          'Publishing houses, content agencies and marketing teams all hire. Bilingual editors are in short supply in Egypt and can charge accordingly.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise — copywriting pays more',
        detail:
          'Editorial work at a publisher, or brand copywriting in marketing, which pays noticeably better. Both lead to content strategy and to steady remote work for foreign clients.',
      },
    ],
    majorIds: ['english-literature', 'communications'],
  },
  {
    id: 'museum-curator',
    title: 'Museum Curator / Archivist',
    icon: '🏺',
    field: 'Arts & Culture',
    blurb: 'Care for collections and build the exhibitions the public sees.',
    description:
      'Curators research and interpret collections, plan exhibitions, and oversee conservation; archivists catalogue and preserve records. Posts are scarce and competitive, and volunteering or internships are close to expected before hiring.',
    education: "Faculty of Archaeology or Arts (history), usually plus postgraduate study",
    salaryRange: 'EGP 5–10k',
    outlook: 'Competitive',
    dayToDay: [
      'Researching and cataloguing objects',
      'Planning exhibitions and displays',
      'Overseeing conservation and storage',
      'Writing interpretation and labels',
    ],
    skills: ['Research', 'Cataloguing', 'Conservation awareness', 'Public interpretation'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Literature branch',
        detail:
          'The Literature branch (أدبي), for Faculty of Archaeology or Arts (history). Archaeology is one of Egypt’s genuinely distinctive academic fields.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Archaeology, or Arts (history)',
        detail:
          'Four years. Egyptology, Islamic and Coptic archaeology are separate specialisations — choose knowing the job market differs for each.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Excavation seasons and museum volunteering',
        detail:
          'Field seasons and museum internships are close to mandatory before hiring. Languages matter: French and German open academic literature that Arabic and English do not.',
      },
      {
        kind: 'gate',
        when: 'Graduation',
        title: 'Ministry of Tourism and Antiquities appointment',
        detail:
          'Most posts sit under the Ministry, and appointment is a slow formal process. The Grand Egyptian Museum and the national museums are the flagship employers.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Postgraduate study, then specialise',
        detail:
          'An MA is expected for curatorial work; a PhD for research posts. Conservation, collections management and exhibition curation diverge from here.',
      },
    ],
    majorIds: ['history', 'anthropology'],
  },
  {
    id: 'film-producer',
    title: 'Film / Video Producer',
    icon: '🎥',
    field: 'Arts & Culture',
    blurb: 'Make productions actually happen — money, people, and schedule.',
    description:
      'Producers assemble funding, crew, and schedule, then keep a production on track. It is the least glamorous and most decisive role on a set, and the work is overwhelmingly project-based rather than salaried.',
    education: "Higher Institute of Cinema or Mass Communication; credits matter most",
    salaryRange: 'Highly variable',
    outlook: 'Competitive',
    dayToDay: [
      'Budgeting and securing funding',
      'Hiring crew and booking locations',
      'Managing the shooting schedule',
      'Solving problems as they arise on set',
    ],
    skills: ['Budgeting', 'Negotiation', 'Logistics', 'Staying calm under pressure'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'The Higher Institute of Cinema sets its own entrance exam and interview, separate from Tansik.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Higher Institute of Cinema, or Mass Communication',
        detail:
          'Four years. The institute is the prestige route and its network is a real part of what you are buying.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Work on sets — any sets',
        detail:
          'Production assistant on student films, adverts, anything. This industry hires on credits and trust, and both are built from the bottom.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Production assistant, then coordinator',
        detail:
          'Cairo remains the centre of Arabic-language production. The work is project-based rather than salaried, so income arrives in bursts — budget accordingly.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Line producer, then your own projects',
        detail:
          'Move from executing schedules to controlling budgets. Streaming platforms commissioning Arabic content have expanded the market substantially.',
      },
    ],
    majorIds: ['film-media-production', 'communications'],
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    icon: '🎞️',
    field: 'Design',
    blurb: 'Assemble raw footage into something that holds attention.',
    description:
      'Editors choose takes, set pacing, and shape the story in post-production — arguably where a film is really written. Demand has expanded well beyond film into social, corporate, and online content.',
    education: "Mass Communication, Applied Arts, or a showreel",
    salaryRange: 'EGP 6–12k',
    outlook: 'Growing',
    dayToDay: [
      'Reviewing and logging footage',
      'Cutting sequences for pace and clarity',
      'Colour grading and sound balancing',
      'Working through client revisions',
    ],
    skills: ['Editing software', 'Pacing & rhythm', 'Colour and sound basics', 'Taking direction'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'No requirement. Start cutting footage on whatever you have.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Mass Communication, Applied Arts — or a reel instead',
        detail:
          'The degree is genuinely optional here. What gets you hired is a reel and a reputation for hitting deadlines.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Learn Premiere or DaVinci, then edit constantly',
        detail:
          'Cut weddings, student films, YouTube content — anything with real footage and a real deadline. Add colour grading and basic sound; both are billable on their own.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Production house, agency, or freelance',
        detail:
          'Cairo’s advertising and content industry runs on freelance editors. Rates rise fast once people trust you to deliver on time.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Specialise, or move up the chain',
        detail:
          'Long-form film, commercials, or social content at volume. Many editors move into directing or producing, since editing teaches story structure better than any other role.',
      },
    ],
    majorIds: ['film-media-production', 'graphic-design'],
  },
  {
    id: 'management-consultant',
    title: 'Management Consultant',
    icon: '💼',
    field: 'Business',
    blurb: 'Advise organisations on strategy, operations, and change.',
    description:
      'Consultants diagnose business problems and recommend fixes across short client engagements. It offers unusually fast exposure to senior decision-making, at the cost of long hours and frequent travel.',
    education: "Commerce, Economics, or Engineering; MBA for advancement",
    salaryRange: 'EGP 15–30k',
    outlook: 'Growing',
    dayToDay: [
      'Interviewing client staff',
      'Analysing operational and financial data',
      'Building recommendation decks',
      'Presenting findings to executives',
    ],
    skills: ['Structured problem solving', 'Financial analysis', 'Presenting', 'Working at pace'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'Commerce, Economics and Engineering all feed this field; Engineering needs the Maths branch.',
      },
      {
        kind: 'study',
        when: 'Years 1–5',
        title: 'Commerce, Economics, or Engineering',
        detail:
          'The firms recruit heavily from a short list of faculties and universities. AUC, GUC and the top public faculties are where they run their campus rounds.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Case practice and a visible record',
        detail:
          'Case interviews are the entire screening process and can be trained for. Case competitions and consulting clubs are the standard preparation.',
      },
      {
        kind: 'work',
        when: 'Years 0–3',
        title: 'Analyst at a firm',
        detail:
          'Cairo offices of the global firms, regional firms, and the Big Four advisory arms. The hours are genuinely long; the exposure to senior decisions is genuinely unusual for someone that junior.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'MBA, or exit into industry',
        detail:
          'Consulting is often a springboard: an MBA then a return at a higher grade, or a move into a strategy or operations role at a client. Both are normal and expected.',
      },
    ],
    majorIds: ['business', 'economics', 'mathematics', 'accounting-finance'],
  },
  {
    id: 'sales-executive',
    title: 'Sales / Account Executive',
    icon: '📞',
    field: 'Business',
    blurb: 'Find customers, understand their problem, and close the deal.',
    description:
      'Sales roles are among the most accessible graduate entry points in business, and among the most directly measured — performance is visible in numbers every month. Commission means earnings vary widely.',
    education: "Any degree; measured performance matters more than the certificate",
    salaryRange: 'EGP 6–12k + commission',
    outlook: 'Stable',
    dayToDay: [
      'Prospecting and qualifying leads',
      'Running demos and client meetings',
      'Negotiating terms and pricing',
      'Maintaining the pipeline in a CRM',
    ],
    skills: ['Listening', 'Negotiation', 'Resilience to rejection', 'Pipeline management'],
    roadmap: [
      {
        kind: 'school',
        when: 'School',
        title: 'Any branch',
        detail:
          'No requirement at all. This is one of the most open graduate paths in business.',
      },
      {
        kind: 'study',
        when: 'Years 1–4',
        title: 'Any degree',
        detail:
          'The certificate matters less here than almost anywhere else. What is screened for is how you talk to a stranger who does not want to talk to you.',
      },
      {
        kind: 'build',
        when: 'Years 2–4',
        title: 'Get rejection practice',
        detail:
          'Fundraising for a student organisation, or any job dealing with the public. Handling refusal without taking it personally is the actual skill.',
      },
      {
        kind: 'work',
        when: 'Years 0–2',
        title: 'Sales development or account executive',
        detail:
          'Real estate, pharmaceuticals, technology and financial services all hire in volume. Commission means earnings vary widely — understand the split before signing.',
      },
      {
        kind: 'grow',
        when: 'Years 3+',
        title: 'Move upmarket',
        detail:
          'Enterprise and B2B sales pay far more than volume selling. From there: key accounts, sales management, or the move into business development and partnerships.',
      },
    ],
    majorIds: ['business', 'marketing', 'communications'],
  },
]

// Browse order, same idea as majors.js: append a career anywhere above and it
// still lands beside its field. Stable sort keeps the written order within a
// field, and an unlisted field sorts to the end.
const fieldOrder = [
  'Technology',
  'Engineering',
  'Health',
  'Science',
  'Research',
  'Business',
  'Design',
  'Arts & Culture',
  'Communication',
  'Education',
  'Social Impact',
  'Public Sector',
  'Law',
]

const fieldRank = (field) => {
  const index = fieldOrder.indexOf(field)
  return index === -1 ? fieldOrder.length : index
}

export const careers = [...careerList].sort((a, b) => fieldRank(a.field) - fieldRank(b.field))

export const careerFields = [...new Set(careers.map((c) => c.field))].sort()

// The six kinds a roadmap step can be. Each one carries an icon and a label
// together, on purpose: the timeline distinguishes steps by shape and colour,
// and neither of those survives a colour-blind reader or a screen reader on
// its own. `gate` is the one that matters most — a registration, licence or
// exam series you cannot legally practise without, as opposed to a
// certification that merely helps — so the page also prints it in words.
export const roadmapStages = {
  school: { icon: '📚', label: 'School' },
  study: { icon: '🎓', label: 'Study' },
  build: { icon: '🛠️', label: 'Practice' },
  gate: { icon: '🔑', label: 'Required' },
  work: { icon: '💼', label: 'Work' },
  grow: { icon: '📈', label: 'Grow' },
}

export const getCareer = (id) => careers.find((c) => c.id === id)

// Majors link to careers through `majorIds` above, so this derives the reverse
// lookup rather than duplicating the relationship in majors.js.
export const getCareersForMajor = (majorId) =>
  careers.filter((c) => c.majorIds.includes(majorId))
