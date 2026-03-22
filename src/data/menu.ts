export type MenuCategory = 'NEW_ARRIVAL' | 'SEASONAL' | 'STANDARD';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  category: MenuCategory;
  imagePath: string;
  price?: number;
}

export interface SideMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'SOUP' | 'DRINK';
}

export interface LunchSet {
  id: string;
  name: string;
  description: string;
  contents: string;
  price: number;
  imagePath: string;
}

export const menuItems: MenuItem[] = [
  // NEW ARRIVAL
  {
    id: 'new-01',
    name: '焼きナッツの「カンパーニュ・バトン」',
    description: 'どこを噛んでもナッツの香ばしさと油脂分が感じられ、パンというよりも「ナッツの塊」を食べているような贅沢な食感です。',
    category: 'NEW_ARRIVAL',
    imagePath: '/images/menu/campagne-nuts.jpg',
  },
  {
    id: 'new-02',
    name: '無塩バターと蜂蜜の「ハード・クイニーアマン」',
    description: '一般的な甘いお菓子パンとは一線を画す、圧倒的な噛み応えと、キャラメリゼされた表面の苦味。甘さを最小限に抑えた「大人のハードスイーツ」です。',
    category: 'NEW_ARRIVAL',
    imagePath: '/images/menu/aman.jpg',
  },
  {
    id: 'new-03',
    name: '粗挽き黒胡椒と岩塩の「ブラック・バゲット」',
    description: '噛むたびに胡椒の刺激が弾ける、非常にドライで力強い味。食事パンというよりは、チーズや肉料理に合わせるための「道具としてのパン」です。',
    category: 'NEW_ARRIVAL',
    imagePath: '/images/menu/black-baguette.jpg',
  },
  // SEASONAL
  {
    id: 'sea-01',
    name: 'ショコラ・リュスティック',
    description: '2月限定。高カカオチョコを贅沢に練り込みました。',
    category: 'SEASONAL',
    imagePath: '/images/menu/menu-season1.jpg',
  },
  {
    id: 'sea-02',
    name: '柚子のルヴァン',
    description: '冬限定。柚子の香りが自家製酵母とよく合います。',
    category: 'SEASONAL',
    imagePath: '/images/menu/menu-season2.jpg',
  },
  {
    id: 'sea-03',
    name: '栗とカシューナッツ',
    description: '秋から冬の人気商品。ゴロゴロした栗が贅沢。',
    category: 'SEASONAL',
    imagePath: '/images/menu/menu-season3.jpg',
  },
  // STANDARD
  { id: 'std-01', name: 'プレーン・カンパーニュ', category: 'STANDARD', imagePath: '/images/menu/campagne.jpg' },
  { id: 'std-02', name: '全粒粉パン', category: 'STANDARD', imagePath: '/images/menu/whole-wheat-bread.jpg' },
  { id: 'std-03', name: '石窯バケット', category: 'STANDARD', imagePath: '/images/menu/baguette.jpg' },
  { id: 'std-04', name: 'リュスティック', category: 'STANDARD', imagePath: '/images/menu/rustic.jpg' },
  { id: 'std-05', name: 'チーズ・クッペ', category: 'STANDARD', imagePath: '/images/menu/cheese-pan.jpg' },
  { id: 'std-06', name: 'ベーコンエピ', category: 'STANDARD', imagePath: '/images/menu/bacon-epi.jpg' },
  { id: 'std-07', name: 'フランスパン', category: 'STANDARD', imagePath: '/images/menu/french-bread.jpg' },
  { id: 'std-08', name: 'クイニーアマン', category: 'STANDARD', imagePath: '/images/menu/kouign-amann.jpg' },
  { id: 'std-09', name: 'あんバター', category: 'STANDARD', imagePath: '/images/menu/an-butter.jpg' },
  { id: 'std-10', name: 'ノア・エ・レザン', category: 'STANDARD', imagePath: '/images/menu/nuts-raison-pan.jpg' },
  { id: 'std-11', name: '宇治抹茶とホワイトチョコのバゲット', category: 'STANDARD', imagePath: '/images/menu/macha-pan.jpg' },
  { id: 'std-12', name: '食パン', category: 'STANDARD', imagePath: '/images/menu/shoku-pan.jpg' },
];

export const sideMenuItems: SideMenuItem[] = [
  {
    id: 'soup-01',
    name: '季節のポタージュ',
    description: '旬の野菜をたっぷり使った、とろみのある温かいスープ。',
    price: 500,
    type: 'SOUP',
  },
  {
    id: 'soup-02',
    name: '10種野菜のミネストローネ',
    description: '国産小麦のパンに合う、トマトベースの力強い味わい。',
    price: 600,
    type: 'SOUP',
  },
  {
    id: 'drink-01',
    name: '自家焙煎コーヒー（Hot / Ice）',
    description: 'パンの香ばしさを引き立てる、深煎りのオリジナルブレンド。',
    price: 400,
    type: 'DRINK',
  },
  {
    id: 'drink-02',
    name: 'オーガニック・アールグレイ',
    description: '華やかな香りが広がる、無農薬の茶葉を使用した紅茶。',
    price: 500,
    type: 'DRINK',
  },
];

export const lunchSets: LunchSet[] = [
  {
    id: 'lunch-01',
    name: 'バゲットとカンパーニュのポタージュセット',
    description: '石窯バゲット・プレーン・カンパーニュ・季節のポタージュ・お飲み物',
    contents: '石窯バゲット、プレーン・カンパーニュ、季節のポタージュ、自家焙煎コーヒーorオーガニック・アールグレイ',
    price: 1300,
    imagePath: '/images/menu/lunch-set1.jpg',
  },
  {
    id: 'lunch-02',
    name: 'ノア・エ・レザンとクイニーアマンのコーヒーセット',
    description: 'ノア・エ・レザン・クイニーアマン・お飲み物',
    contents: 'ノア・エ・レザン、クイニーアマン、自家焙煎コーヒーorオーガニック・アールグレイ',
    price: 900,
    imagePath: '/images/menu/lunch-set2.jpg',
  },
  {
    id: 'lunch-03',
    name: 'ベーコンエピとチーズクッペのミネストローネセット',
    description: 'ベーコンエピ・チーズ・クッペ・10種野菜のミネストローネ・お飲み物',
    contents: 'ベーコンエピ、チーズ・クッペ、10種野菜のミネストローネ、自家焙煎コーヒーorオーガニック・アールグレイ',
    price: 1400,
    imagePath: '/images/menu/lunch-set3.jpg',
  },
];
