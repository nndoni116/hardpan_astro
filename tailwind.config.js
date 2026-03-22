/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base:   '#FAF9F6', // --color-base（背景）
        header: '#FAF9F6', // --color-header
        text:   '#2D2926', // --color-text（メインテキスト）
        text2:  '#a19e9e', // --color-text2（サブテキスト・hover）
        text3:  '#666666', // --color-text3（説明文）
        main:   '#F0EDE5', // --color-main（セクション背景）
        main2:  '#F5F5F5', // --color-main2（ABOUTセクション背景）
        accent: '#D7C4A3', // --color-accent
        sub:    '#E0E0E0', // --color-sub（フッター背景・NEWSセクション背景）
        sub2:   '#444444', // --color-sub2
        sub3:   '#FFFFFF', // --color-sub3
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      lineHeight: {
        relaxed: '1.8',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
};
