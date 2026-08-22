// Arabic translation of ../wellbeing.js, keyed by the same ids.
// Fields left out fall back to the English entry, so this can be filled in
// progressively without breaking a page.
//
// `code` is deliberately untranslated: FOF, BOT and FA are short labels used
// as tags, and transliterating them would make them harder to recognise, not
// easier. The tone here matters more than literal fidelity — this page may be
// the first thing a student in real difficulty reads, so the Arabic keeps the
// English version's plainness and avoids clinical register.
const wellbeing = {
  'fear-of-failure': {
    title: 'الخوف من الفشل',
    tagline: 'حين تخاف ألا تكون كافيًا',
    description:
      'الشعور بأن درجة سيئة واحدة تُعرّفك. يظهر ذلك في تأجيل العمل حتى اللحظة الأخيرة، أو إعادة المهمة نفسها مرارًا حتى تصير «مثالية»، أو تجنّب مادة بأكملها بدلًا من المخاطرة بالتعثر فيها.',
    sessions: [
      'فهم الضغط الأكاديمي',
      'التعامل مع السعي إلى الكمال',
      'بناء عقلية أكثر صحة تجاه المذاكرة',
    ],
    signs: ['تأجيل أهم الأعمال', 'إعادة عمل انتهيت منه', 'تجنّب مادة بعينها'],
  },
  burnout: {
    title: 'الاحتراق النفسي',
    tagline: 'حين تكون مُنهَكًا، لا كسولًا',
    description:
      'الاحتراق النفسي ليس مجرد تعب، والراحة وحدها لا تعالجه. يتراكم عبر فترة طويلة من الضغط حتى يصير العمل الذي كنت تؤديه بسهولة مستحيلًا — ثم تلوم نفسك على ذلك، فيزداد الأمر سوءًا.',
    sessions: [
      'فهم الفرق بين الاحتراق النفسي والتعب',
      'التعافي دون شعور بالذنب',
      'استعادة طاقتك ودافعك',
    ],
    signs: ['النوم لم يعد يفيد', 'رهبة من أشياء كنت تستمتع بها', 'شعور بالخَدَر لا بالحزن'],
  },
  'future-anxiety': {
    title: 'القلق من المستقبل',
    tagline: 'حين لا تسير الأمور كما خططت',
    description:
      'مجموع في التنسيق يغلق بابًا، أو كلية تكتشف أنها لا تناسبك، أو خطة تتوقف عن أن يكون لها معنى. معظم الناس ينتهي بهم الحال في مكان لم يخططوا له أصلًا، وهذا أكثر اعتيادية بكثير مما يبدو في حينه.',
    sessions: [
      'فهم القلق من المستقبل',
      'التعامل مع عدم اليقين والتغيرات المفاجئة',
      'إيجاد طريقك حين تتغير خططك',
    ],
    signs: ['الدوران حول قرارات تبعد سنوات', 'مقارنة مسارك بمسار الجميع', 'الشعور بأنك متأخر'],
  },
}

export default wellbeing
