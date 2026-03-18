export const site = {
  meta: {
    title: "Zakhar Samokhvalov | Game Design & System Administration Portfolio",
    description:
      "Portfolio of Zakhar Samokhvalov, a game designer and system administrator focused on indie games, Linux administration, and frontend craft.",
  },
  localeLabels: {
    ru: "ru",
    en: "en",
  },
  common: {
    link: {
      en: "link",
      ru: "ссылка",
    },
  },
  hero: {
    greeting: {
      en: "welcome",
      ru: "привет",
    },
    intro: {
      en: "My name is Zakhar, I'm game designer & system administrator with a focus on indie-game design and linux administration.",
      ru: "Меня зовут Захар, я гейм-дизайнер и системный администратор с фокусом на инди-игры и linux-администрирование.",
    },
  },
  person: {
    name: "Zakhar Samokhvalov",
    summary: {
      en: "I'm a student game designer currently working as a system administrator. In my free time, I play TTRPGs, do extreme sports, and learn DevOps.",
      ru: "Я студент-геймдизайнер, который сейчас работает системным администратором. В свободное время играю в НРИ, занимаюсь экстремальным спортом и изучаю DevOps.",
    },
    photo: "media/photo_2026-03-15_19-53-33.jpg",
    availability: {
      en: "Currently available for hire",
      ru: "Сейчас открыт для предложений",
    },
    footerYear: "2026",
  },
  actions: [
    { label: "GitHub", href: "https://github.com/zhr0451", asset: "buttons/GitHub Button.svg" },
    { label: "itch.io", href: "https://svaika-games.itch.io/", asset: "buttons/Itch Button.svg" },
    { label: "Telegram", href: "https://t.me/wild1honeypie", asset: "buttons/Telegram Button.svg" },
    {
      label: "Mail",
      href: "mailto:1samokhvalov.zs@gmail.com",
      asset: "buttons/Email Button.svg",
    },
  ],
  experiences: [
    {
      label: {
        en: "Experience",
        ru: "Опыт",
      },
      role: {
        en: "System Administrator",
        ru: "Системный администратор",
      },
      place: "ComeForte",
      period: "2024 - now",
    },
    {
      label: {
        en: "Experience",
        ru: "Опыт",
      },
      role: {
        en: "Game Designer",
        ru: "Гейм-дизайнер",
      },
      place: "ITHub",
      period: "2025 - now",
    },
  ],
  skillGroups: [
    {
      title: {
        en: "Game Design",
        ru: "Гейм-дизайн",
      },
      items: ["Git", "Godot", "Unity", "GDScript", "C#", "Markdown", "Google Docs", "Documentation"],
    },
    {
      title: {
        en: "System Administration",
        ru: "Системное администрирование",
      },
      items: ["Linux", "Windows", "GitLab CI", "CRM", "GitHub Actions", "IP telephony", "Docker", "Python"],
    },
  ],
  projectGroups: [
    {
      title: {
        en: "Game Design",
        ru: "Гейм-дизайн",
      },
      items: [
        {
          name: "Gather your friends!",
          description: {
            en: "Game for Ludum Dare",
            ru: "Игра для Ludum Dare",
          },
          href: "",
        },
        {
          name: "CyberBANG!",
          description: {
            en: 'Reskin for the "Bang!" game.',
            ru: 'Рескин для игры "Bang!".',
          },
          href: "",
        },
      ],
    },
    {
      title: {
        en: "System Administration",
        ru: "Системное администрирование",
      },
      items: [
        {
          name: "ComeForte Web",
          description: {
            en: "Web project work for ComeForte.",
            ru: "Веб-проект для ComeForte.",
          },
          href: "",
        },
      ],
    },
  ],
} as const;
