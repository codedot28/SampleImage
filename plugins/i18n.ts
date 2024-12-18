import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      'en': {
        home: 'Home',
        about: 'About',
        naver: 'Naver',
        admin: 'Admin',
      },
      'ko': {
        home: '홈',
        about: '어바웃',
        naver: '네이버',
        admin: '관리자',
      },
    },
  });

  vueApp.use(i18n);
});