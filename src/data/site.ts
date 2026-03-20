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
      en: "My name is Zakhar. I'm a game designer and system administrator focused on indie game design and Linux administration.",
      ru: "Меня зовут Захар. Я гейм-дизайнер и системный администратор, специализирующийся на разработке инди-игр и администрировании Linux.",
    },
  },
  person: {
    name: "Zakhar Samokhvalov",
    summary: {
      en: "I'm a student game designer currently working as a system administrator. In my free time, I play TTRPGs, study computer science, and work on pet projects.",
      ru: "Я студент-геймдизайнер, который сейчас работает системным администратором. В свободное время я играю в НРИ, изучаю компьютерные науки и занимаюсь pet-проектами.",
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
      place: "ComeForte",
      period: "2024 - now",
    },
    {
      place: "ITHub",
      period: "2025 - now",
    },
  ],
  education: [
    {
      place: "ITHub – Game Design",
      period: "2025 - now",
    },
  ],
  skillGroups: [
    {
      title: {
        en: "Game Design",
        ru: "Гейм-дизайн",
      },
      items: ["Git", "Godot", "Unity", "GDScript", "C# (basics)", "Markdown", "Google Docs", "Documentation"],
    },
    {
      title: {
        en: "System Administration",
        ru: "Системное администрирование",
      },
      items: ["Linux", "Windows", "GitLab CI", "CRM", "GitHub Actions", "IP telephony", "Docker", "Python (basics)"],
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
            en: "A game made for Ludum Dare in Unity 3D.",
            ru: "Игра, созданная для Ludum Dare на Unity 3D.",
          },
          href: "https://ldjam.com/events/ludum-dare/58/gather-your-friends",
        },
        {
          name: "CyberBANG!",
          description: {
            en: 'A reskin of the game "Bang!".',
            ru: 'Рескин игры "Bang!".',
          },
          href: "https://svaika-games.itch.io/cyberbang",
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
          href: "http://test.comeforte24.ru/",
        },
      ],
    },
  ],
} as const;
