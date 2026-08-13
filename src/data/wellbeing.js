// Your Space — the wellbeing side of Elevate.
//
// These are peer support sessions about the pressure that comes with studying,
// not clinical treatment. That distinction is stated on the page itself, along
// with Egypt's national mental health line, because a student in real distress
// may well land here first and should not have to go looking.

export const wellbeingTopics = [
  {
    id: 'fear-of-failure',
    code: 'FOF',
    title: 'Fear of Failure',
    icon: '🌱',
    tagline: 'When you’re afraid of not being good enough',
    description:
      'The feeling that one bad grade defines you. It shows up as putting work off until the last moment, redoing the same task until it is "perfect", or avoiding a subject entirely rather than risk doing badly at it.',
    sessions: [
      'Understanding academic pressure',
      'Dealing with perfectionism',
      'Building a healthier study mindset',
    ],
    signs: ['Procrastinating on work that matters most', 'Redoing finished work', 'Avoiding a subject'],
  },
  {
    id: 'burnout',
    code: 'BOT',
    title: 'Burnout',
    icon: '🔋',
    tagline: 'When you’re exhausted, not lazy',
    description:
      'Burnout is not the same as being tired, and rest alone does not fix it. It builds up over a long stretch of pressure until work you used to manage easily feels impossible — and then you blame yourself for it, which makes it worse.',
    sessions: [
      'Understanding the difference between burnout and tiredness',
      'Recovering without guilt',
      'Rebuilding your energy and motivation',
    ],
    signs: ['Sleep no longer helps', 'Dreading things you used to enjoy', 'Feeling flat rather than sad'],
  },
  {
    id: 'future-anxiety',
    code: 'FA',
    title: 'Future Anxiety',
    icon: '🧭',
    tagline: 'When things don’t go as planned',
    description:
      'A Tansik score that closes a door, a faculty that turns out not to suit you, a plan that stops making sense. Most people end up somewhere they did not originally plan, and that is far more normal than it feels at the time.',
    sessions: [
      'Understanding future anxiety',
      'Dealing with uncertainty and unexpected changes',
      'Finding your way when your plans change',
    ],
    signs: ['Spiralling about decisions years away', 'Comparing your path to everyone else’s', 'Feeling behind'],
  },
]
