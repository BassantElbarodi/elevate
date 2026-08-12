// Scholarships open to Egyptian students (compiled August 2026).
//
// Deadlines move every single year, and some programmes pause intake without
// notice. Nothing here lists a date for that reason — always open the official
// link and check the current round before planning around it.
//
// Every entry was checked against the awarding body's own page or an official
// government source. Where a requirement is stated inconsistently across
// sources (Chevening's work-experience threshold, for example), this data
// deliberately does not repeat a number — go to the official page for it.

const scholarshipList = [
  {
    id: 'sawiris-distinction',
    title: 'Sawiris Distinction Scholarship',
    icon: '🏅',
    type: 'Study in Egypt',
    level: 'Undergraduate',
    funding: 'Fully funded',
    description:
      'Up to 50 awards a year for outstanding graduates of Egyptian public high schools — the single best-targeted scholarship for Thanaweya Amma students who cannot pay private-university fees. It covers tuition, accommodation if you study outside your home governorate, a living stipend, books, a laptop, and English-language training.',
    eligibility: [
      'Egyptian public high school graduates',
      'Strong Thanaweya Amma results',
      'Demonstrated financial need',
    ],
    institutions: 'Nile University, Zewail City, E-JUST, Ain Shams, Alexandria, Assiut',
    url: 'https://sawirisfoundation.org/scholarships/sds/',
    tags: ['Public school', 'Fully funded', 'Egypt'],
  },
  {
    id: 'auc-scholarships',
    title: 'AUC Scholarships & Financial Aid',
    icon: '🏛️',
    type: 'Study in Egypt',
    level: 'Undergraduate',
    funding: 'Full and partial awards',
    description:
      'The American University in Cairo runs a large scholarship programme alongside need-based financial aid, including awards aimed specifically at public-school graduates and at economically disadvantaged students. More than 500 students study at AUC on scholarships.',
    eligibility: [
      'Egyptian nationals (most awards)',
      'Academic merit, and financial need for aid-based awards',
      'Separate application from admission — check both deadlines',
    ],
    institutions: 'The American University in Cairo',
    url: 'https://www.aucegypt.edu/admissions/scholarships',
    tags: ['Merit', 'Need-based', 'Cairo'],
  },
  {
    id: 'nile-university',
    title: 'Nile University Scholarships',
    icon: '🎓',
    type: 'Study in Egypt',
    level: 'Undergraduate',
    funding: 'Full and partial awards',
    description:
      'Nile University offers merit and need-based awards, and hosts the fully funded Sawiris Distinction Scholarship covering the full duration of study across all schools except Biotechnology.',
    eligibility: ['Egyptian nationals', 'Thanaweya Amma or equivalent certificates'],
    institutions: 'Nile University',
    url: 'https://www.nu.edu.eg/scholarship',
    tags: ['Merit', 'Fully funded', 'Giza'],
  },
  {
    id: 'zewail-city',
    title: 'Zewail City Scholarships',
    icon: '🔬',
    type: 'Study in Egypt',
    level: 'Undergraduate',
    funding: 'Full and partial awards',
    description:
      'A research-focused science and technology university with merit awards for high-achieving science and maths students, and a partner institution for the Sawiris Distinction Scholarship. Admission runs through its own aptitude tests rather than Tansik alone.',
    eligibility: [
      'Strong science or maths Thanaweya Amma results',
      'Zewail City admission tests',
    ],
    institutions: 'Zewail City of Science, Technology and Innovation',
    url: 'https://www.zewailcity.edu.eg/',
    tags: ['STEM', 'Research', 'Merit'],
  },
  {
    id: 'amideast-egypt',
    title: 'AMIDEAST Egypt — scholarship portal',
    icon: '🧭',
    type: 'Study in Egypt',
    level: 'All levels',
    funding: 'Varies',
    description:
      'Not a single scholarship but the organisation that administers many of them in Egypt, including Fulbright and Sawiris programmes. Worth checking first, because it aggregates pre-college, undergraduate, graduate, and professional opportunities in one place.',
    eligibility: ['Varies by programme', 'Most require Egyptian nationality'],
    institutions: 'Multiple, in Egypt and abroad',
    url: 'https://www.amideast.org/egypt/find-a-scholarship',
    tags: ['Portal', 'All levels', 'Start here'],
  },
  {
    id: 'fulbright-egypt',
    title: 'Fulbright Egyptian Student Program',
    icon: '🇺🇸',
    type: 'Study abroad',
    level: "Master's",
    funding: 'Fully funded',
    description:
      'A fully funded master’s in the United States for up to two years, covering tuition, a living stipend, travel, and health benefits. Open across all fields — humanities and arts as much as STEM — and there are separate tracks for PhD joint supervision and visiting researchers.',
    eligibility: [
      'Egyptian citizenship, and residing in Egypt',
      'Completed university degree',
      'Commitment to return to Egypt after the grant',
    ],
    institutions: 'United States universities',
    url: 'https://fulbright-egypt.org/program/student/',
    tags: ['USA', 'Fully funded', 'All fields'],
  },
  {
    id: 'chevening',
    title: 'Chevening Scholarships',
    icon: '🇬🇧',
    type: 'Study abroad',
    level: "Master's",
    funding: 'Fully funded',
    description:
      'The UK government’s flagship scholarship, funding a one-year master’s in full. Egypt is an eligible country and shortlisted candidates interview at the British Embassy in Cairo or the Consulate in Alexandria. Because UK master’s degrees run a single year, it is often the highest-value award an Egyptian graduate can win.',
    eligibility: [
      'Egyptian citizen, returning to Egypt after the course',
      'Undergraduate degree at UK 2:1 standard or equivalent',
      'Work experience required — check the official page for the current threshold',
    ],
    institutions: 'UK universities',
    url: 'https://www.chevening.org/scholarship/egypt/',
    tags: ['UK', 'Fully funded', 'Work experience'],
  },
  {
    id: 'daad',
    title: 'DAAD — German Academic Exchange',
    icon: '🇩🇪',
    type: 'Study abroad',
    level: "Master's & PhD",
    funding: 'Fully funded',
    description:
      'Germany’s academic exchange service funds postgraduate study and research, with a Cairo regional office and a scholarship track built around the German-Egyptian research relationship. GERLS in particular is designed for Egyptian STEM graduates pursuing doctoral research.',
    eligibility: [
      'Completed degree, usually with relevant work experience for development courses',
      'Requirements vary sharply between programme lines',
    ],
    institutions: 'German universities and research institutes',
    url: 'https://www.daad.de/en/',
    tags: ['Germany', 'STEM', 'Research'],
  },
  {
    id: 'erasmus-mundus',
    title: 'Erasmus Mundus Joint Masters',
    icon: '🇪🇺',
    type: 'Study abroad',
    level: "Master's",
    funding: 'Fully funded',
    description:
      'Around 3,000 scholarships a year across 160+ joint master’s programmes, and you study in at least two different European countries. Funding covers tuition, insurance, travel, and a monthly stipend of roughly €1,400 for up to 24 months. You apply to the individual programme, not to a central body.',
    eligibility: [
      'Open to students worldwide, Egypt included',
      'Bachelor’s degree in a relevant field',
      'Apply directly to each joint programme',
    ],
    institutions: 'Consortia of European universities',
    url: 'https://www.eacea.ec.europa.eu/scholarships/emjmd-catalogue_en',
    tags: ['Europe', 'Fully funded', 'Multi-country'],
  },
  {
    id: 'mext-japan',
    title: 'MEXT — Japanese Government Scholarship',
    icon: '🇯🇵',
    type: 'Study abroad',
    level: 'Undergraduate & postgraduate',
    funding: 'Fully funded',
    description:
      'Administered for Egyptians through the Embassy of Japan in Cairo, with separate tracks for undergraduate, research, and college-of-technology students. Undergraduate scholars get a full year of intensive Japanese before their degree begins, so no prior Japanese is needed.',
    eligibility: [
      'Egyptian nationality',
      'Age limits apply and differ by track',
      'Applications go through the Embassy of Japan in Egypt',
    ],
    institutions: 'Japanese universities',
    url: 'https://www.eg.emb-japan.go.jp/itpr_en/11_000001_00152.html',
    tags: ['Japan', 'Undergraduate', 'Language training'],
  },
  {
    id: 'turkiye-burslari',
    title: 'Türkiye Bursları',
    icon: '🇹🇷',
    type: 'Study abroad',
    level: 'All levels',
    funding: 'Fully funded',
    description:
      'Turkey’s government scholarship covers tuition, accommodation, a monthly stipend, health insurance, flights, and a year of Turkish language study. It places you at a university and department rather than you applying separately, and takes applicants at undergraduate through doctoral level.',
    eligibility: [
      'Open to international students including Egyptians',
      'Age limits by study level',
      'Single application window each year',
    ],
    institutions: 'Turkish universities',
    url: 'https://www.turkiyeburslari.gov.tr/',
    tags: ['Turkey', 'Fully funded', 'All levels'],
  },
  {
    id: 'stipendium-hungaricum',
    title: 'Stipendium Hungaricum',
    icon: '🇭🇺',
    type: 'Study abroad',
    level: 'All levels',
    funding: 'Fully funded',
    description:
      'Hungary’s government programme covers over 100 countries and funds tuition, dormitory accommodation, and a monthly stipend. Many degrees are taught in English with no mandatory language year, which makes it one of the more accessible European routes.',
    eligibility: [
      'Applicants from partner countries, Egypt included',
      'Nomination through the sending-country partner as well as the Hungarian application',
    ],
    institutions: 'Hungarian universities',
    url: 'https://stipendiumhungaricum.hu/',
    tags: ['Hungary', 'English-taught', 'Fully funded'],
  },
]

// Egyptian options first — they are open to far more students than the
// international programmes, which mostly need a completed degree.
const typeOrder = ['Study in Egypt', 'Study abroad']
const typeRank = (t) => {
  const i = typeOrder.indexOf(t)
  return i === -1 ? typeOrder.length : i
}

export const scholarships = [...scholarshipList].sort(
  (a, b) => typeRank(a.type) - typeRank(b.type),
)

export const scholarshipTypes = [...new Set(scholarships.map((s) => s.type))].sort()
