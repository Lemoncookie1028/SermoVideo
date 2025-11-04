const blockedWords = [
  'stupid', 'idiot', 'dumb', 'moron', 'fool', 'retard', 'trash', 'pathetic',
  'loser', 'noob', 'jerk', 'clown', 'weirdo', 'ugly', 'crybaby', 'failure','SHUT UP','shut up',
  'hate', 'toxic', 'reported', 'bully', 'worthless', 'nobody', 'annoying', 'shutup', 'getlost',
  'spam', 'scam', 'fake', 'bot', 'clickhere', 'freemoney', 'subscribe', 'giveaway',
  'followme', 'cheap', 'promo', 'buynow', 'discount', 'limitedoffer',
  'crud', 'dang', 'heck', 'frick', 'fuck', 'shoot', 'darn', 'butt',
  'fight', 'attack', 'revenge', 'destroy', 'punch', 'beat',
  'worst', 'terrible', 'garbage', 'awful', 'horrible', 'disgusting', 'sucks', 'bad', 'useless', 'hopeless', 'fail',
  'racist', 'sexist', 'homophobic', 'bigot', 'hatespeech','nigger',
  'nude', 'nsfw', 'explicit', 'sex', 'porn',  'nasty',
  'bomb', 'shoot', 'stab', 'murder', 'terrorist', 'die', 'blood',
  'suicide', 'killmyself', 'endmylife', 'cutting',
  'troll', 'cry', 'whine', 'rage', 'mad', 'angry',
  'giftcard', 'crypto', 'bitcoin', 'telegram',  'dmme', 'sendmoney', 'cashapp', 'paypal', 'donate',
  'ez', 'trashcan', 'rekt', 'owned', 'ggez','ts',
];

const leetMap = {
  a: '[a@4]', b: '[b8]', c: '[c(¢<]', d: '[d)]', e: '[e3]', f: '[fph]', g: '[g96]', h: '[h#]',
  i: '[i1!|l]', j: '[j]', k: '[k<]', l: '[l1!|i]', m: '[m]', n: '[nñ]', o: '[o0]', p: '[p9]',
  q: '[q9]', r: '[r]', s: '[s5$z]', t: '[t7+]', u: '[uµv]', v: '[v]', w: '[wvv]', x: '[x%]',
  y: '[y¥]', z: '[z2s$]'
};