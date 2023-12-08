import 'server-only';

interface Dictionary {
  Index: {
    title: string;
  };
}

interface Dictionaries {
  en: () => Promise<Dictionary>;
  ar: () => Promise<Dictionary>;
}

const dictionaries: Dictionaries = {
  en: () =>
    import('../../../dictionaries/en.json').then((module) => module.default),
  ar: () =>
    import('../../../dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof Dictionaries) =>
  dictionaries[locale]();
