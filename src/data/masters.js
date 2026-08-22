// Egyptian postgraduate routes (compiled August 2026).
//
// This file covers what comes after the bachelor: the Egyptian diploma →
// master's → doctorate ladder, the professional and clinical qualifications
// that sit beside it, and the funded routes abroad that Egyptians actually
// use. Funding itself lives in ./scholarships.js — entries here point at it
// rather than repeating award details that change every year.
//
// `majorIds` is the single source of truth for how majors and master's
// connect, exactly as it is in ./careers.js. Major pages ask which entries
// point at them, so the link is only ever written once. Every id must match an
// entry in ./majors.js; an id that doesn't match is skipped silently rather
// than crashing the page.
//
// `route` says where the qualification is realistically taken, not where it is
// theoretically possible. `length` is the usual full-time duration in Egypt —
// part-time study alongside a job is common and stretches all of these.

const masterList = [
  {
    id: 'postgraduate-diploma',
    title: 'Postgraduate Diploma',
    icon: '📜',
    field: 'Research',
    route: 'In Egypt',
    length: '1–2 years',
    entry: 'Any relevant bachelor degree; entry is far less competitive than a master’s',
    blurb: 'The first rung of the Egyptian postgraduate ladder, and the one most students miss.',
    description:
      'The دبلوم is a taught postgraduate qualification that sits below a master’s, and in Egypt it is often the required step before one. Many faculties will not admit you to a master’s until you have completed the diploma and reached a grade threshold in it. It is also a qualification in its own right — the educational diploma for teachers and the clinical nutrition diploma are both diplomas, not master’s degrees.',
    whatItUnlocks: [
      'Admission to a master’s at the same faculty',
      'Professional qualification on its own in teaching, counselling and clinical nutrition',
      'A cheaper, shorter way to test whether postgraduate study suits you',
    ],
    funding: 'Fees at public universities are modest and most people self-fund while working.',
    majorIds: ['education', 'psychology', 'nutrition-dietetics', 'social-work', 'business', 'nursing', 'public-health'],
  },
  {
    id: 'moeid-track',
    title: 'The معيد Track',
    icon: '🏫',
    field: 'Research',
    route: 'In Egypt',
    length: '5–8 years to doctorate',
    entry: 'Top of your graduating class, appointed by the faculty',
    blurb: 'Get paid to teach while the university funds your master’s and doctorate.',
    description:
      'A معيد is a demonstrator appointed by their own faculty straight after graduation, usually from the top handful of the year. You teach tutorials and lab sessions, and the university funds and expects you to complete a master’s and then a doctorate. It is the standard route into Egyptian academia and it is genuinely competitive — the appointment is made on your bachelor grade, so this is decided before you graduate, not after.',
    whatItUnlocks: [
      'A funded route through master’s and doctorate',
      'A permanent academic post — مدرس مساعد, then مدرس, then upward',
      'The strongest position from which to win a scholarship abroad',
    ],
    funding: 'Salaried by the university, with fees covered. The salary is low; the security is high.',
    majorIds: ['biology', 'chemistry', 'physics', 'mathematics', 'computer-science', 'medicine', 'pharmacy', 'civil-engineering', 'mechanical-engineering', 'electrical-engineering', 'chemical-engineering', 'law', 'economics', 'sociology', 'history', 'philosophy'],
  },
  {
    id: 'phd',
    title: 'Doctorate (PhD)',
    icon: '🔬',
    field: 'Research',
    route: 'Egypt or abroad',
    length: '3–6 years',
    entry: 'A master’s degree, plus a supervisor willing to take you',
    blurb: 'Original research, examined by thesis — the entry ticket to academia.',
    description:
      'The دكتوراه is examined on a thesis that has to contain something new. In Egypt it follows the master’s rather than replacing it, which makes the full ladder longer than the direct-entry doctorates common in the US. Finding a supervisor whose research you actually want to do matters more than the university’s name — you will work with that person for years.',
    whatItUnlocks: [
      'University teaching posts and research-institute appointments',
      'Industrial research roles in pharmaceuticals, energy and technology',
      'Nothing much outside research — it is a specialist qualification, not a general upgrade',
    ],
    funding: 'The معيد track funds it in Egypt. Abroad, doctorates are usually salaried or fully funded — see Scholarships.',
    majorIds: ['biology', 'chemistry', 'physics', 'mathematics', 'computer-science', 'data-science', 'geology', 'environmental-science', 'medicine', 'pharmacy', 'psychology', 'economics', 'sociology', 'political-science', 'history', 'philosophy', 'anthropology', 'civil-engineering', 'mechanical-engineering', 'electrical-engineering', 'chemical-engineering'],
  },
  {
    id: 'funded-masters-abroad',
    title: 'Funded Master’s Abroad',
    icon: '✈️',
    field: 'Research',
    route: 'Abroad',
    length: '1–2 years',
    entry: 'Good bachelor grade, English test, references, and a clear reason for the specific programme',
    blurb: 'How the application actually works, and how far ahead it has to start.',
    description:
      'Fully funded master’s places abroad are competitive but not rare — Egypt is eligible for Fulbright, Chevening, DAAD, Erasmus Mundus, MEXT, Türkiye Bursları and Stipendium Hungaricum, and Egyptians win them every year. The single biggest mistake is starting late: most deadlines fall roughly a year before the course begins, and the English test, references and personal statement all have to exist before that.',
    whatItUnlocks: [
      'A degree recognised internationally, often in one year rather than two',
      'A research network outside Egypt, which matters if you intend to stay in academia',
      'A realistic route to working abroad afterwards, depending on the country’s visa rules',
    ],
    funding: 'This is what the Scholarships section is for — every award listed there links to its official page.',
    majorIds: ['computer-science', 'data-science', 'economics', 'political-science', 'public-health', 'environmental-science', 'civil-engineering', 'mechanical-engineering', 'electrical-engineering', 'chemical-engineering', 'business', 'sociology', 'urban-planning', 'english-literature'],
  },
  {
    id: 'msc-computer-science',
    title: 'MSc Computer Science',
    icon: '💻',
    field: 'Technology',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Bachelor from Computers & AI, Engineering, or Science (maths)',
    blurb: 'Depth in systems, theory or software engineering beyond what four years covers.',
    description:
      'A research master’s in computing, taken at Egyptian faculties part-time by people already working, or full-time abroad. In Egypt it is worth being clear-eyed about the return: employers in software hire on demonstrated work rather than on this degree, so take it because you want the research, the teaching route, or a move abroad — not as a substitute for a portfolio.',
    whatItUnlocks: [
      'The academic ladder — the معيد track and then a doctorate',
      'Research posts at institutes and corporate labs',
      'Immigration routes that score points for a postgraduate degree',
    ],
    funding: 'Public university fees are low. Abroad, DAAD and Erasmus Mundus fund computing heavily.',
    majorIds: ['computer-science', 'information-systems', 'mathematics'],
  },
  {
    id: 'msc-artificial-intelligence',
    title: 'MSc Artificial Intelligence',
    icon: '🤖',
    field: 'Technology',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Computing, engineering or mathematics bachelor; strong maths expected',
    blurb: 'The one postgraduate computing degree Egyptian employers do ask about.',
    description:
      'AI and machine learning is the area where a master’s carries real weight with employers, because the maths behind it is genuinely hard to self-teach to research depth. Egyptian programmes run at Cairo, Ain Shams, Nile University and Zewail City among others; abroad it is one of the most oversubscribed subjects, so apply widely.',
    whatItUnlocks: [
      'Machine learning engineer and research scientist roles',
      'Work at the research labs of multinationals with Cairo offices',
      'A doctorate, if the research turns out to suit you',
    ],
    funding: 'Some Egyptian programmes carry industry-sponsored places — ask the department directly.',
    majorIds: ['computer-science', 'data-science', 'mathematics', 'electrical-engineering'],
  },
  {
    id: 'msc-data-science',
    title: 'MSc Data Science & Analytics',
    icon: '📊',
    field: 'Technology',
    route: 'Egypt or abroad',
    length: '1–2 years',
    entry: 'Any quantitative bachelor — computing, statistics, economics, engineering',
    blurb: 'The usual conversion route for people arriving from another quantitative subject.',
    description:
      'Data science master’s programmes exist largely as conversion degrees: they take economists, mathematicians and engineers and add the programming and statistics that the job needs. If your bachelor was already Computers & AI or Statistics, the return is smaller — you would be paying for material you have covered.',
    whatItUnlocks: [
      'A move into data work from a non-computing degree',
      'Analytics roles at banks, telecoms and consultancies',
      'The quantitative half of a research career in almost any field',
    ],
    funding: 'Widely offered part-time in Egypt for working professionals; Chevening funds it often.',
    majorIds: ['data-science', 'mathematics', 'economics', 'computer-science', 'physics'],
  },
  {
    id: 'msc-cybersecurity',
    title: 'MSc Cybersecurity',
    icon: '🔐',
    field: 'Technology',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Computing or engineering bachelor; networking knowledge assumed',
    blurb: 'Worth it for the research and policy side — less so for the hands-on roles.',
    description:
      'Security is a field where certifications usually beat degrees for practitioner jobs, so be deliberate about why you want this one. It earns its place if you are heading towards security architecture, cryptography research, or the governance and national-infrastructure side, where a master’s is expected and certifications are not enough.',
    whatItUnlocks: [
      'Security architecture and governance roles',
      'Cryptography and security research',
      'Posts at banks and national bodies that require a postgraduate degree',
    ],
    funding: 'NTI and ITIDA subsidise security training, though not usually degree programmes.',
    majorIds: ['computer-science', 'information-systems', 'electrical-engineering'],
  },
  {
    id: 'msc-bioinformatics',
    title: 'MSc Bioinformatics & Genomics',
    icon: '🧬',
    field: 'Research',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Biology, pharmacy, medicine or computing bachelor',
    blurb: 'The hybrid degree that supplies the half of the job your bachelor skipped.',
    description:
      'Bioinformatics needs real biology and real programming, and almost nobody leaves a bachelor with both. This master’s is where that gap closes, which is why it is effectively required for the field rather than optional. Zewail City, Nile University and several Egyptian faculties run programmes, and it is a strong subject for funded study abroad.',
    whatItUnlocks: [
      'Bioinformatics posts at research institutes and pharmaceutical companies',
      'Remote analysis work for international research groups',
      'Genomics research, which is expanding faster than the supply of people who can do both halves',
    ],
    funding: 'Well covered by DAAD and Erasmus Mundus; some Egyptian research institutes fund places.',
    majorIds: ['biology', 'data-science', 'computer-science', 'pharmacy', 'medicine'],
  },
  {
    id: 'msc-engineering',
    title: 'MSc Engineering',
    icon: '⚙️',
    field: 'Engineering',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Engineering bachelor and Engineers Syndicate registration',
    blurb: 'Taken part-time alongside work by most Egyptian engineers who take it.',
    description:
      'Engineering master’s degrees in Egypt are usually studied part-time over several years while working, in the same department you graduated from. They matter most for the design and consultancy side of the profession and for teaching posts; on site, logged experience and Syndicate grades count for more.',
    whatItUnlocks: [
      'Design and consultancy work rather than site execution',
      'Teaching posts and the route to a doctorate',
      'A stronger position for Gulf recruitment, where degrees are screened',
    ],
    funding: 'Public faculty fees are modest; employers sometimes contribute for part-time study.',
    majorIds: ['mechanical-engineering', 'electrical-engineering', 'civil-engineering', 'chemical-engineering'],
  },
  {
    id: 'msc-renewable-energy',
    title: 'MSc Renewable Energy',
    icon: '🔆',
    field: 'Engineering',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Engineering or physical science bachelor',
    blurb: 'Aimed squarely at Egypt’s solar and wind build-out.',
    description:
      'Egypt has committed to large solar and wind capacity, and Benban alone changed the local job market for this specialism. Programmes cover generation, grid integration, storage and the economics of energy projects — the last of which is what separates an engineer who can design a plant from one who can get it financed.',
    whatItUnlocks: [
      'Roles on solar, wind and grid projects',
      'Energy consultancy and feasibility work',
      'International development and climate finance posts',
    ],
    funding: 'DAAD funds energy engineering heavily, and several Egyptian–German programmes exist.',
    majorIds: ['electrical-engineering', 'mechanical-engineering', 'chemical-engineering', 'environmental-science', 'physics'],
  },
  {
    id: 'msc-construction-management',
    title: 'MSc Construction & Project Management',
    icon: '🏗️',
    field: 'Engineering',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Engineering or architecture bachelor, usually with site experience',
    blurb: 'The move from building things to running the people who build them.',
    description:
      'A management degree for people who came up through engineering — contracts, claims, scheduling, cost control and risk. Egypt’s new-city and infrastructure programmes and the Gulf construction market both hire for exactly this combination, and it is one of the clearer cases where the degree changes what you are allowed to run.',
    whatItUnlocks: [
      'Project and programme management on large sites',
      'Contracts and claims roles, which pay well and are chronically short-staffed',
      'Gulf recruitment, where formal project qualifications are screened for',
    ],
    funding: 'Commonly self-funded part-time; some contractors sponsor staff.',
    majorIds: ['civil-engineering', 'architecture', 'urban-planning', 'mechanical-engineering'],
  },
  {
    id: 'egyptian-fellowship',
    title: 'Egyptian Fellowship',
    icon: '🩺',
    field: 'Health',
    route: 'In Egypt',
    length: '4–6 years',
    entry: 'Medical or dental degree, internship completed, and a competitive entrance exam',
    blurb: 'The clinical specialisation route — the Egyptian equivalent of a residency.',
    description:
      'الزمالة المصرية is run by the Ministry of Health rather than a university, and it trains doctors and dentists into specialists through supervised hospital practice plus examinations. It is the main alternative to a university master’s for clinical specialisation, and it is the more practice-heavy of the two. Places are allocated by examination and are genuinely competitive in the popular specialties.',
    whatItUnlocks: [
      'Recognition as a specialist (أخصائي) and then consultant (استشاري)',
      'The pay and autonomy that only come after specialisation',
      'Recognition in several Gulf countries, which recruit Egyptian specialists heavily',
    ],
    funding: 'Trainees are salaried hospital staff throughout, so this route does not need paying for.',
    majorIds: ['medicine', 'dentistry'],
  },
  {
    id: 'clinical-masters',
    title: 'Clinical Master’s (ماجستير)',
    icon: '🏥',
    field: 'Health',
    route: 'In Egypt',
    length: '3–5 years',
    entry: 'Medical degree, internship completed, and a faculty place',
    blurb: 'The university route to specialising, run alongside hospital work.',
    description:
      'The university master’s is the other half of Egyptian clinical specialisation, taken at your faculty rather than through the Ministry. It is more academic than the Fellowship and leads naturally to a doctorate (دكتوراه) and an academic career. Many doctors hold both routes in view and choose on whether they want to end up in a university hospital or in practice.',
    whatItUnlocks: [
      'Specialist registration, as with the Fellowship',
      'The academic ladder towards a doctorate and a teaching post',
      'University hospital appointments',
    ],
    funding: 'Faculty fees, paid while working as a resident. The معيد track covers it for those appointed.',
    majorIds: ['medicine', 'dentistry', 'pharmacy'],
  },
  {
    id: 'mph',
    title: 'Master of Public Health',
    icon: '🌍',
    field: 'Health',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Medicine, nursing, science or social science bachelor',
    blurb: 'The standard qualification for epidemiology and health policy work.',
    description:
      'The MPH is effectively the entry requirement for epidemiology, health policy and international health work. It takes doctors, nurses, biologists and statisticians and teaches them study design, biostatistics, health economics and programme evaluation. It is one of the most commonly funded subjects for Egyptians studying abroad.',
    whatItUnlocks: [
      'Epidemiology posts at the Ministry of Health and surveillance units',
      'WHO, UNICEF and NGO roles, several of which have Cairo offices',
      'Health policy and programme evaluation work',
    ],
    funding: 'A frequent Fulbright and Chevening subject; Egyptian faculties of public health are far cheaper.',
    majorIds: ['public-health', 'medicine', 'nursing', 'biology', 'nutrition-dietetics', 'data-science'],
  },
  {
    id: 'msc-clinical-pharmacy',
    title: 'MSc Clinical Pharmacy',
    icon: '💊',
    field: 'Health',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'Pharmacy degree and Pharmacists Syndicate registration',
    blurb: 'The move from dispensing to advising on treatment inside a care team.',
    description:
      'Clinical pharmacy puts the pharmacist on the ward rather than behind the counter, reviewing therapy alongside doctors. It is the strongest ceiling available to Egyptian pharmacy graduates who want to stay clinical, and hospital demand for it has grown steadily. Regulatory affairs is the other well-paid postgraduate direction from pharmacy.',
    whatItUnlocks: [
      'Hospital clinical pharmacist posts',
      'Pharmacovigilance and regulatory affairs roles',
      'Teaching posts in faculties of pharmacy',
    ],
    funding: 'Faculty fees, usually paid while working. Some hospital groups sponsor staff.',
    majorIds: ['pharmacy'],
  },
  {
    id: 'msc-nursing',
    title: 'MSc Nursing',
    icon: '🩹',
    field: 'Health',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'Nursing degree, internship completed, and clinical experience',
    blurb: 'The route to specialist practice, teaching and nursing administration.',
    description:
      'A nursing master’s specialises you — critical care, paediatrics, midwifery, community health — or moves you into administration and teaching. It is also the qualification that most changes a nurse’s pay and standing in Egypt, where the gap between a bachelor-level nurse and a specialist is substantial.',
    whatItUnlocks: [
      'Specialist and advanced practice roles',
      'Nursing education posts in faculties and institutes',
      'Nursing administration and quality management',
    ],
    funding: 'Faculty fees; the معيد track applies in nursing faculties as it does elsewhere.',
    majorIds: ['nursing'],
  },
  {
    id: 'msc-physical-therapy',
    title: 'MSc Physical Therapy',
    icon: '🦵',
    field: 'Health',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'Physical therapy degree and clinical experience',
    blurb: 'Specialisation in a field where the specialist and the generalist are paid very differently.',
    description:
      'Egyptian physical therapy master’s programmes specialise you into orthopaedics, neurology, paediatrics, sports or women’s health. Sports rehabilitation in particular pays well, since clubs hire directly and the work is visible. Many therapists take the degree while running their own practice.',
    whatItUnlocks: [
      'Specialist clinical practice at a higher rate',
      'Sports club and athlete rehabilitation posts',
      'Teaching in faculties of physical therapy',
    ],
    funding: 'Faculty fees, generally self-funded alongside clinical work.',
    majorIds: ['physical-therapy'],
  },
  {
    id: 'ma-clinical-psychology',
    title: 'MA Clinical Psychology',
    icon: '🛋️',
    field: 'Health',
    route: 'In Egypt',
    length: '2–4 years',
    entry: 'Psychology bachelor, usually a postgraduate diploma first, plus supervised hours',
    blurb: 'The qualifying route into clinical practice — and a long one.',
    description:
      'Clinical psychology in Egypt is reached through a diploma and then a master’s, with supervised practice hours throughout. Plan for the full runway rather than discovering it midway: this is years of work after the bachelor. Counselling is the shorter parallel route if therapeutic work rather than assessment is what you want.',
    whatItUnlocks: [
      'Clinical assessment and diagnosis, which counselling does not cover',
      'Hospital and clinic posts',
      'Independent practice, after supervised hours',
    ],
    funding: 'Faculty fees, usually self-funded while working in a related role.',
    majorIds: ['psychology'],
  },
  {
    id: 'msc-clinical-nutrition',
    title: 'Clinical Nutrition Diploma & MSc',
    icon: '🥗',
    field: 'Health',
    route: 'In Egypt',
    length: '1–3 years',
    entry: 'Nutrition, science, medicine or pharmacy bachelor',
    blurb: 'What separates a clinical dietitian from a general nutrition graduate.',
    description:
      'Hospital nutrition work requires the clinical qualification, not just the bachelor. The diploma comes first and is enough for most clinical posts; the master’s follows for those heading into teaching or research. This field has a large unqualified fringe in Egypt, so the credential does real work in distinguishing you.',
    whatItUnlocks: [
      'Hospital clinical nutrition departments',
      'Therapeutic practice with diabetes and renal patients',
      'Teaching and research posts',
    ],
    funding: 'Diploma fees are low; commonly taken part-time while working.',
    majorIds: ['nutrition-dietetics', 'biology', 'medicine', 'pharmacy'],
  },
  {
    id: 'msc-veterinary',
    title: 'MSc Veterinary Medicine',
    icon: '🐾',
    field: 'Health',
    route: 'In Egypt',
    length: '2–4 years',
    entry: 'Veterinary degree and Veterinary Syndicate registration',
    blurb: 'Specialisation into surgery, poultry, food safety or laboratory diagnostics.',
    description:
      'Veterinary master’s degrees in Egypt follow the departments — surgery, internal medicine, poultry diseases, food hygiene, pathology. Poultry and food safety are where the industry demand concentrates, given the scale of Egyptian poultry production, while companion-animal surgery is where the urban private practice money is.',
    whatItUnlocks: [
      'Specialist practice and referral work',
      'Senior roles in poultry and livestock production',
      'Food safety and public health inspection posts',
    ],
    funding: 'Faculty fees; the معيد track applies for those appointed at graduation.',
    majorIds: ['veterinary-medicine'],
  },
  {
    id: 'msc-science',
    title: 'MSc in a Science Discipline',
    icon: '🧪',
    field: 'Science',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'Faculty of Science bachelor with a good grade',
    blurb: 'The standard next step out of Faculty of Science, and usually the معيد route.',
    description:
      'Biology, chemistry, physics, mathematics and geology all run master’s degrees at Egyptian faculties of Science, examined by thesis. For most graduates this is the point at which research either becomes the career or clearly does not. Pick the supervisor before the topic — the relationship lasts years and determines what you actually get to work on.',
    whatItUnlocks: [
      'The doctorate, and with it academic and research-institute posts',
      'Industrial R&D in pharmaceuticals, energy, food and materials',
      'Teaching posts at universities and technical institutes',
    ],
    funding: 'Public faculty fees are low; the معيد track funds it outright for those appointed.',
    majorIds: ['biology', 'chemistry', 'physics', 'mathematics', 'geology'],
  },
  {
    id: 'msc-environmental-management',
    title: 'MSc Environmental Science & Management',
    icon: '🌱',
    field: 'Science',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Science, engineering or geography bachelor',
    blurb: 'Impact assessment, water and climate work — where the funded projects are.',
    description:
      'Environmental postgraduate work in Egypt tracks the money: water resources, impact assessment, climate adaptation and pollution control, much of it funded through international programmes. That makes grant writing and project management part of the skill set rather than an afterthought.',
    whatItUnlocks: [
      'Senior consultancy roles preparing impact assessments',
      'International organisation and donor-funded project posts',
      'Environment ministry and regulatory positions',
    ],
    funding: 'Well funded abroad through DAAD and Erasmus Mundus; some UN-linked programmes fund locally.',
    majorIds: ['environmental-science', 'biology', 'chemistry', 'civil-engineering', 'geology', 'chemical-engineering'],
  },
  {
    id: 'msc-petroleum-geology',
    title: 'MSc Petroleum Geology',
    icon: '🪨',
    field: 'Science',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Geology or geophysics bachelor',
    blurb: 'The specialisation the Egyptian energy industry actually recruits on.',
    description:
      'Reservoir characterisation, seismic interpretation and basin analysis, aimed at the exploration side of oil and gas. Egyptian faculties have strong links to the industry, and companies sometimes sponsor staff through it. Be aware the field is cyclical — hiring rises and falls with oil prices, and the degree does not insulate you from that.',
    whatItUnlocks: [
      'Reservoir and exploration geologist roles, which pay several times general geology work',
      'Consultancy in seismic and subsurface interpretation',
      'Gulf and North African energy sector recruitment',
    ],
    funding: 'Sometimes sponsored by employers; otherwise faculty fees.',
    majorIds: ['geology', 'physics', 'environmental-science'],
  },
  {
    id: 'mba',
    title: 'MBA',
    icon: '💼',
    field: 'Business',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Any bachelor plus several years of work experience — the experience is the real requirement',
    blurb: 'A network and a pivot, bought at the cost of two years and real money.',
    description:
      'The MBA is a general management degree taken after work experience, not instead of it — applying straight from a bachelor wastes it. In Egypt, AUC, ESLSCA, Maastricht and the Arab Academy run recognised programmes, and many people study part-time while employed. Be honest about the reason: the value is concentrated in the network and in the ability to switch function or industry.',
    whatItUnlocks: [
      'A move from a technical role into management',
      'A switch of industry or function that your CV would not otherwise allow',
      'Consulting and corporate strategy recruitment',
    ],
    funding: 'The most expensive option here, and usually self-funded. Some employers sponsor part-time study.',
    majorIds: ['business', 'accounting-finance', 'marketing', 'economics', 'mechanical-engineering', 'computer-science', 'civil-engineering'],
  },
  {
    id: 'msc-finance',
    title: 'MSc Finance & Investment',
    icon: '💹',
    field: 'Business',
    route: 'Egypt or abroad',
    length: '1–2 years',
    entry: 'Commerce, economics or a quantitative bachelor',
    blurb: 'The academic counterpart to the CFA — and they are not interchangeable.',
    description:
      'A finance master’s goes deeper into valuation, derivatives, risk and financial econometrics than a commerce bachelor does. In Egypt it competes directly with the CFA for the same time and money: the CFA is cheaper and more recognised by employers for investment roles, while the master’s travels better internationally and opens academic work. Plenty of people do both, in that order.',
    whatItUnlocks: [
      'Investment banking, asset management and private equity recruitment',
      'Risk and treasury roles at banks',
      'The quantitative finance route, if paired with real programming',
    ],
    funding: 'Chevening funds finance regularly; Egyptian private university fees are substantial.',
    majorIds: ['accounting-finance', 'economics', 'business', 'mathematics', 'data-science'],
  },
  {
    id: 'msc-supply-chain',
    title: 'MSc Logistics & Supply Chain',
    icon: '📦',
    field: 'Business',
    route: 'Egypt or abroad',
    length: '1–2 years',
    entry: 'Commerce, engineering or business bachelor',
    blurb: 'Unusually well matched to where Egypt actually sits on the map.',
    description:
      'Egypt’s position on the Suez Canal makes logistics a genuinely local strength rather than an imported specialism, and the Arab Academy for Science, Technology and Maritime Transport is built around exactly this. Programmes cover network design, procurement, inventory modelling and international trade operations.',
    whatItUnlocks: [
      'Senior planning and procurement roles at manufacturers and FMCG companies',
      'Port, shipping and freight-forwarding management',
      'Gulf logistics recruitment, which draws heavily on Egyptian graduates',
    ],
    funding: 'Frequently employer-sponsored, since companies benefit directly.',
    majorIds: ['business', 'mechanical-engineering', 'information-systems', 'economics'],
  },
  {
    id: 'mpp',
    title: 'Master of Public Policy',
    icon: '📋',
    field: 'Public Sector',
    route: 'Egypt or abroad',
    length: '1–2 years',
    entry: 'Social science, economics or law bachelor',
    blurb: 'Close to standard for policy work, and heavily funded abroad.',
    description:
      'Public policy and public administration master’s degrees teach evidence appraisal, cost modelling and the discipline of writing a brief someone will actually read. Cairo University’s Faculty of Economics and Political Science and AUC both run programmes, and it is among the most commonly funded subjects for Egyptians on Chevening and Fulbright.',
    whatItUnlocks: [
      'Think tank and ministry research posts',
      'UN agency and World Bank roles, several with Cairo offices',
      'Development sector programme and policy work',
    ],
    funding: 'One of the strongest subjects for Chevening and Fulbright applications from Egypt.',
    majorIds: ['political-science', 'economics', 'sociology', 'public-health', 'urban-planning', 'law'],
  },
  {
    id: 'msc-urban-planning',
    title: 'MSc Urban Planning & Design',
    icon: '🏙️',
    field: 'Public Sector',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Planning, architecture, engineering or geography bachelor',
    blurb: 'Aimed at the new cities programme and at the informal areas question.',
    description:
      'Egyptian planning postgraduate work splits between the new desert communities and the upgrading of existing informal areas — two very different problems that dominate the profession here. Programmes cover transport, housing policy, GIS analysis and planning law.',
    whatItUnlocks: [
      'Senior posts at the New Urban Communities Authority and GOPP',
      'Planning consultancy and international development work',
      'Heritage and informal areas specialisation',
    ],
    funding: 'Faculty fees in Egypt; well funded abroad through Erasmus Mundus and DAAD.',
    majorIds: ['urban-planning', 'architecture', 'civil-engineering', 'environmental-science', 'sociology'],
  },
  {
    id: 'llm',
    title: 'LLM (Master of Laws)',
    icon: '⚖️',
    field: 'Law',
    route: 'Egypt or abroad',
    length: '1–2 years',
    entry: 'Law degree; abroad, usually Bar registration and some practice',
    blurb: 'Specialisation into the commercial areas that pay, or a route to international practice.',
    description:
      'Egyptian LLM study specialises you into commercial, international, maritime or intellectual property law. An LLM taken abroad is a different proposition again: it opens international arbitration and cross-border commercial work, which is where the highest-paid Egyptian lawyers concentrate. Note it does not by itself let you practise in that country.',
    whatItUnlocks: [
      'Corporate and commercial practice at international firms',
      'International arbitration, a strong Cairo speciality',
      'Academic posts in faculties of law',
    ],
    funding: 'Chevening funds law regularly; Egyptian faculty fees are otherwise modest.',
    majorIds: ['law', 'criminology', 'political-science'],
  },
  {
    id: 'ma-social-work',
    title: 'MA Social Work',
    icon: '🤝',
    field: 'Social Impact',
    route: 'In Egypt',
    length: '2–3 years',
    entry: 'Social work bachelor and field experience',
    blurb: 'The step from case work into designing and running programmes.',
    description:
      'A social work master’s moves you from carrying a caseload to planning services, managing programmes and supervising other workers. That shift matters in Egypt because it is also where pay improves — case work is badly paid relative to its responsibility, and programme management at larger NGOs and international organisations is not.',
    whatItUnlocks: [
      'Programme and grant management at NGOs and international organisations',
      'Supervision and training roles',
      'Teaching posts in faculties of social work',
    ],
    funding: 'Faculty fees; some NGOs support staff study.',
    majorIds: ['social-work', 'sociology', 'psychology', 'public-health'],
  },
  {
    id: 'ma-mass-communication',
    title: 'MA Mass Communication',
    icon: '📰',
    field: 'Communication',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Mass communication, arts or social science bachelor',
    blurb: 'Worth it for research, teaching and strategy — not for getting a reporting job.',
    description:
      'Newsrooms hire on published work, so be clear this degree is not a route into reporting. It earns its place if you are heading towards media research, communication strategy, teaching, or the policy side of media regulation, all of which do ask for it.',
    whatItUnlocks: [
      'Media research and audience analysis posts',
      'Communication strategy roles at organisations and agencies',
      'Teaching in faculties of mass communication',
    ],
    funding: 'Faculty fees; media studies is funded reasonably often by Chevening and DAAD.',
    majorIds: ['communications', 'english-literature', 'political-science', 'sociology'],
  },
  {
    id: 'ma-translation',
    title: 'MA Translation & Interpreting',
    icon: '🗣️',
    field: 'Communication',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Al-Alsun, arts or languages bachelor with strong second-language command',
    blurb: 'An Egyptian strength, and a qualification that travels.',
    description:
      'Al-Alsun’s translation tradition is genuinely well regarded, and conference interpreting is a scarce, well-paid skill across the Arab world. Programmes split between written translation — legal, technical, literary — and simultaneous interpreting, which is a different discipline requiring different training.',
    whatItUnlocks: [
      'Conference and simultaneous interpreting, which pays by the day and pays well',
      'Certified legal and technical translation',
      'International organisation language posts, including UN bodies',
    ],
    funding: 'Faculty fees are modest; the qualification pays back quickly in freelance rates.',
    majorIds: ['english-literature', 'communications'],
  },
  {
    id: 'med',
    title: 'Master of Education',
    icon: '🍎',
    field: 'Education',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Education degree, or a subject degree plus the educational diploma',
    blurb: 'The route into curriculum work, leadership and international school pay scales.',
    description:
      'Egyptian teachers reach postgraduate study through the educational diploma first, then the master’s. It specialises into curriculum design, educational technology, special education or administration. The international school sector — where Egypt’s teaching pay ceiling actually is — screens for postgraduate qualifications and curriculum training such as IB or IGCSE.',
    whatItUnlocks: [
      'Subject leadership and school administration',
      'Curriculum design and teacher training roles',
      'International school hiring at a higher band',
    ],
    funding: 'Faculty fees are low and it is usually taken part-time while teaching.',
    majorIds: ['education', 'psychology', 'mathematics', 'biology', 'physics', 'chemistry', 'english-literature', 'history'],
  },
  {
    id: 'ma-egyptology',
    title: 'MA Egyptology & Archaeology',
    icon: '🏺',
    field: 'Arts & Culture',
    route: 'In Egypt',
    length: '2–4 years',
    entry: 'Archaeology or history bachelor, plus excavation experience',
    blurb: 'The one field where studying in Egypt is the international advantage.',
    description:
      'Egyptology is studied here with material nowhere else has, and Egyptian faculties of archaeology are correspondingly serious about it. Specialisation splits between Egyptology, Islamic and Coptic archaeology, and conservation — each with a different job market. Languages matter more than students expect: French and German open a large share of the scholarship.',
    whatItUnlocks: [
      'Curatorial posts, including at the Grand Egyptian Museum',
      'Excavation and mission work with Egyptian and foreign teams',
      'Conservation and collections management',
    ],
    funding: 'Faculty fees are low. Foreign missions occasionally fund Egyptian postgraduate students.',
    majorIds: ['history', 'anthropology'],
  },
  {
    id: 'ma-film',
    title: 'MA Film & Media Production',
    icon: '🎬',
    field: 'Arts & Culture',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Cinema, mass communication or arts bachelor, plus a body of work',
    blurb: 'Judged on the reel you arrive with as much as the degree you leave with.',
    description:
      'The Higher Institute of Cinema runs the recognised Egyptian postgraduate route, and its network is a substantial part of what the qualification is worth in an industry that hires on credits and trust. Abroad, film master’s programmes are expensive and rarely fully funded — worth knowing before planning around one.',
    whatItUnlocks: [
      'Directing and senior production roles',
      'Teaching at cinema and media institutes',
      'Access to co-production and festival networks',
    ],
    funding: 'Rarely funded abroad. In Egypt, institute fees are manageable.',
    majorIds: ['film-media-production', 'communications', 'graphic-design'],
  },
  {
    id: 'ma-design',
    title: 'MA Design',
    icon: '🎨',
    field: 'Design',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Applied arts, fine arts or architecture bachelor, plus a portfolio',
    blurb: 'The teaching and research route — hiring still runs on the portfolio.',
    description:
      'Design employers hire on case studies, so a master’s does not replace a portfolio and should not be taken as though it will. It does open teaching posts at faculties of applied and fine arts, design research, and the strategic end of the field — service design and design management, where the reasoning matters more than the visual craft.',
    whatItUnlocks: [
      'Teaching posts at faculties of applied and fine arts',
      'Design research and strategy roles',
      'A structured way to change specialism, into UX or service design',
    ],
    funding: 'Faculty fees in Egypt; design is funded occasionally through Erasmus Mundus.',
    majorIds: ['graphic-design', 'architecture', 'film-media-production'],
  },
  {
    id: 'ma-philosophy',
    title: 'MA Philosophy',
    icon: '🤔',
    field: 'Arts & Culture',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'Philosophy bachelor, or a related humanities degree with philosophy coursework',
    blurb: 'Islamic philosophy is where Egyptian faculties are genuinely distinctive.',
    description:
      'Egyptian faculties of Arts run philosophy master’s degrees by thesis, with unusual depth in Islamic philosophy and its transmission of the Greek tradition — an area where studying here is an advantage rather than a compromise. The Western tracks cover ethics, epistemology, logic and philosophy of mind as they do anywhere.',
    whatItUnlocks: [
      'The doctorate and university teaching posts',
      'Editorial and research work at cultural institutions and publishers',
      'Ethics and policy roles, where structured argument is the transferable skill',
    ],
    funding: 'Faculty fees are low. The معيد track is the realistic funded route.',
    majorIds: ['philosophy', 'history', 'political-science', 'law', 'psychology'],
  },
  {
    id: 'ma-english-literature',
    title: 'MA English & Comparative Literature',
    icon: '📚',
    field: 'Arts & Culture',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'English or Al-Alsun bachelor with strong language command',
    blurb: 'Literature, linguistics or comparative study — and often the route into teaching it.',
    description:
      'Master’s study at Al-Alsun and the Arts faculties splits between literary study, applied linguistics and comparative literature, the last of which reads Arabic and English traditions against each other. Applied linguistics is the more employable branch, feeding language teaching and the TEFL and curriculum market.',
    whatItUnlocks: [
      'University and language-institute teaching posts',
      'Applied linguistics and curriculum development work',
      'The doctorate, for those staying in academia',
    ],
    funding: 'Faculty fees are modest; Chevening and Fulbright fund literature less often than policy subjects.',
    majorIds: ['english-literature', 'communications', 'education'],
  },
  {
    id: 'ma-sociology-anthropology',
    title: 'MA Sociology & Anthropology',
    icon: '👥',
    field: 'Social Impact',
    route: 'Egypt or abroad',
    length: '2–3 years',
    entry: 'Sociology, anthropology or social science bachelor',
    blurb: 'The research training that development and evaluation work actually runs on.',
    description:
      'Beyond academia, this is the degree behind a large share of the research jobs at NGOs, donor programmes and international organisations — the people who design the surveys and run the fieldwork. Egyptian programmes are strong on rural sociology, migration and urban informality, all of which are live local research questions.',
    whatItUnlocks: [
      'Research and monitoring-and-evaluation posts at NGOs and UN agencies',
      'Policy research at think tanks',
      'The doctorate and academic posts',
    ],
    funding: 'Well funded abroad through Chevening and DAAD; Egyptian faculty fees are low.',
    majorIds: ['sociology', 'anthropology', 'social-work', 'psychology'],
  },
  {
    id: 'msc-criminology-forensics',
    title: 'MSc Criminology & Forensic Science',
    icon: '🧫',
    field: 'Law',
    route: 'In Egypt',
    length: '2–3 years',
    entry: 'Law, social work or science bachelor, depending on the branch',
    blurb: 'Two different degrees under one heading — pick the branch deliberately.',
    description:
      'The criminology branch is social-scientific: crime patterns, policy, corrections and juvenile justice. The forensic branch is laboratory science — DNA, toxicology and trace evidence — and is entered from chemistry or biology rather than law. Most forensic posts in Egypt sit under the Forensic Medicine Authority, so the appointment process matters as much as the qualification.',
    whatItUnlocks: [
      'Forensic laboratory posts under the Forensic Medicine Authority',
      'Expert witness standing, which grows with seniority',
      'Crime policy and corrections research',
    ],
    funding: 'Faculty fees; forensic staff are commonly supported by their employing authority.',
    majorIds: ['criminology', 'law', 'chemistry', 'biology', 'psychology'],
  },
  {
    id: 'msc-marketing',
    title: 'MSc Marketing',
    icon: '📣',
    field: 'Business',
    route: 'Egypt or abroad',
    length: '1–2 years',
    entry: 'Commerce, business or mass communication bachelor',
    blurb: 'Take the analytical version — the creative half is learned on the job.',
    description:
      'Marketing master’s programmes are worth most where they are quantitative: marketing analytics, consumer research and pricing, rather than brand theory. Egyptian agencies and brand teams hire on campaign results, so this degree competes for your time against simply running campaigns — choose it for the research and analytics depth, or for a move into strategy.',
    whatItUnlocks: [
      'Marketing analytics and consumer insight roles',
      'Brand and marketing strategy posts',
      'Teaching in commerce and business faculties',
    ],
    funding: 'Private university fees are substantial; public faculties are far cheaper part-time.',
    majorIds: ['marketing', 'business', 'communications', 'data-science'],
  },
  {
    id: 'msc-architecture',
    title: 'MSc Architecture',
    icon: '🏛️',
    field: 'Design',
    route: 'Egypt or abroad',
    length: '2 years',
    entry: 'Architecture bachelor and Engineers Syndicate registration',
    blurb: 'Heritage conservation is the branch where Egypt leads rather than follows.',
    description:
      'Egyptian architecture master’s programmes specialise into design, environmental and sustainable design, housing, or heritage conservation — and the conservation track is internationally significant, given what there is here to conserve. Note that the degree does not replace the logged practice years that Syndicate consultancy grades require.',
    whatItUnlocks: [
      'Heritage conservation and restoration work',
      'Sustainable and environmental design specialisation',
      'Teaching posts, and the research route to a doctorate',
    ],
    funding: 'Faculty fees; conservation attracts occasional UNESCO and foreign-mission funding.',
    majorIds: ['architecture', 'urban-planning', 'civil-engineering'],
  },
]

// Browse order, same idea as careers.js: append an entry anywhere above and it
// still lands beside its field. Stable sort keeps the written order within a
// field, and an unlisted field sorts to the end. Research leads because the
// generic ladder — diploma, معيد, doctorate, funded study abroad — is what a
// student needs to understand before any single subject's programme.
const fieldOrder = [
  'Research',
  'Technology',
  'Engineering',
  'Health',
  'Science',
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

export const masters = [...masterList].sort((a, b) => fieldRank(a.field) - fieldRank(b.field))

export const masterFields = [...new Set(masters.map((m) => m.field))].sort()

export const masterRoutes = [...new Set(masters.map((m) => m.route))].sort()

export const getMaster = (id) => masters.find((m) => m.id === id)

// Majors link to postgraduate routes through `majorIds` above, so this derives
// the reverse lookup rather than duplicating the relationship in majors.js.
export const getMastersForMajor = (majorId) =>
  masters.filter((m) => m.majorIds.includes(majorId))
