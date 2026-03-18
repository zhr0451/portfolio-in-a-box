# Архитектура проекта

## Назначение

Проект представляет собой одностраничное портфолио на Astro. Текущая реализация близка к Astro-конвенциям: маршруты лежат в `src/pages`, layout вынесен в `src/layouts`, переиспользуемая кнопка лежит в `src/components`, а контент хранится отдельно в `src/data`.

## Структура файлов

```text
src/
  components/
    ActionButton.astro
  data/
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
  content.config.ts
public/
  buttons/
  fonts/
  media/
.github/workflows/
  astro.yml
astro.config.mjs
package.json
tsconfig.json
```

## Как работает страница

1. [src/pages/index.astro](/d:/code/web/portfolio/src/pages/index.astro) импортирует layout, данные и секционные компоненты.
2. Страница читает объект `site` из [src/data/site.ts](/d:/code/web/portfolio/src/data/site.ts) и передаёт его части в секции:
   - hero
   - experience
   - education
   - skills
   - projects
   - availability
   - footer
3. [src/layouts/BaseLayout.astro](/d:/code/web/portfolio/src/layouts/BaseLayout.astro) добавляет:
   - `<html>`, `<head>`, `<body>`
   - SEO/meta-теги
   - canonical URL
   - favicon
   - inline `@font-face`
4. Секционные компоненты рендерят соответствующие блоки страницы, а [src/components/ActionButton.astro](/d:/code/web/portfolio/src/components/ActionButton.astro) выводит одну иконку-ссылку.
5. [src/styles/global.css](/d:/code/web/portfolio/src/styles/global.css) задаёт токены, сетки, карточки, типографику и переключение языковых фрагментов.

## Поток данных

Сейчас поток данных простой и прямой:

- `site.ts` хранит весь контент страницы
- `index.astro` берёт данные и собирает страницу из секций
- `ActionButton.astro` получает часть данных через props
- язык `ru/en` переключается на клиенте через `localStorage` и `data-lang` на `<html>`

Это удобно для небольшого сайта, но при росте контента у файла `site.ts` быстро появится слишком много ответственности.

## Стили и ассеты

### Стили

- Tailwind подключён в [astro.config.mjs](/d:/code/web/portfolio/astro.config.mjs), но проект в основном опирается на обычный CSS в [src/styles/global.css](/d:/code/web/portfolio/src/styles/global.css)
- Сейчас `global.css` содержит:
  - дизайн-токены в `:root`
  - базовые стили
  - layout-классы
  - стили конкретных секций
  - правила локализации

Для текущего объема это приемлемо, но файл уже стал главным местом почти всей визуальной логики.

### Ассеты

- Кнопки, фото и favicon лежат в `public/`
- Шрифты тоже лежат в `public/fonts`
- Пути к публичным ассетам строятся через `import.meta.env.BASE_URL`, что важно из-за `base: "/portfolio-in-a-box/"`

Это рабочая схема для GitHub Pages. Самое чувствительное место здесь — шрифты и любые ассеты, если где-то случайно появится абсолютный путь без учета `BASE_URL`.

## Сборка и деплой

### Локальная разработка

- `pnpm dev` запускает Astro dev server
- `pnpm build` собирает статический сайт в `dist/`
- `pnpm preview` поднимает локальный preview билд

### Конфигурация Astro

[astro.config.mjs](/d:/code/web/portfolio/astro.config.mjs) задает:

- `site: "https://zhr0451.github.io"`
- `base: "/portfolio-in-a-box/"`
- Tailwind Vite plugin

Это значит, что сайт ориентирован на деплой в GitHub Pages внутри подкаталога репозитория.

### GitHub Actions

Workflow в [.github/workflows/astro.yml](/d:/code/web/portfolio/.github/workflows/astro.yml):

1. делает checkout
2. ставит pnpm и Node 22
3. устанавливает зависимости
4. запускает `pnpm astro build`
5. загружает `dist` как Pages artifact
6. деплоит artifact через `actions/deploy-pages`

Итог: процесс сборки и деплоя уже оформлен корректно для GitHub Pages.

## Оценка относительно Astro-конвенций

Что уже сделано хорошо:

- layout вынесен отдельно
- Интерфейсный компонент лежит вне `src/pages`
- данные лежат отдельно от шаблона
- `base` и `site` заданы явно
- проект остается статическим и простым

Что пока перегружено:

- [src/pages/index.astro](/d:/code/web/portfolio/src/pages/index.astro) всё ещё хранит часть логики композиции страницы
- [src/data/site.ts](/d:/code/web/portfolio/src/data/site.ts) стал единым контейнером для всех типов контента
- [src/styles/global.css](/d:/code/web/portfolio/src/styles/global.css) совмещает reset, tokens, layout и стили конкретных блоков
- inline-скрипт переключения языка живет прямо в странице
- [src/content.config.ts](/d:/code/web/portfolio/src/content.config.ts) есть, но пока не используется

## Как расширять проект сейчас

Если нужно добавить новую секцию без рефакторинга:

1. добавить данные в `src/data/site.ts`
2. отрендерить или обновить нужную секцию в компоненте страницы
3. дописать стили в `src/styles/global.css`
4. если есть новые публичные ассеты, положить их в `public/`

Это быстрый путь, но его лучше считать временным.

## Рекомендуемый план рефакторинга

### Этап 1. Разделить страницу на секции

Вынести из `index.astro` отдельные Astro-компоненты:

- `HeroSection.astro`
- `ExperienceSection.astro`
- `EducationSection.astro`
- `SkillsSection.astro`
- `ProjectsSection.astro`
- `AvailabilityBar.astro`
- `SiteFooter.astro`

Польза:
- короче главная страница
- проще читать и менять разметку
- легче переиспользовать блоки

### Этап 2. Разделить данные по доменам

Вместо одного большого `site.ts` можно сделать, например:

- `src/data/site.ts` — meta, person, locale labels
- `src/data/actions.ts`
- `src/data/experience.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`

Альтернатива для проектов и опыта: использовать Astro content collections.

Польза:
- меньше связности
- проще редактировать данные
- удобнее масштабировать контент

### Этап 3. Разгрузить глобальные стили

Разделить CSS хотя бы на:

- `base.css` — reset, tokens, typography, utilities
- `sections.css` или файлы по секциям

Либо перенести часть секционных стилей ближе к компонентам, если команда хочет локальнее держать визуальную логику.

Польза:
- проще находить стили
- меньше риск случайных регрессий

### Этап 4. Убрать клиентскую логику из страницы

Логику переключения языка лучше вынести в небольшой клиентский модуль или отдельный островок, если логика будет расти.

Польза:
- чище шаблон страницы
- проще тестировать и дорабатывать поведение

### Этап 5. Определиться с контент-моделью

Если проектов станет больше:

- хранить проекты как content collection
- добавить slug, tags, dates, links, cover
- при необходимости завести отдельные страницы проектов

Это будет уже более типичный для Astro подход к контентному сайту.

## Практический вывод

Сейчас архитектура подходит для компактного одностраничного портфолио. Главные риски не в неправильной конфигурации Astro, а в том, что страница, данные и стили начинают разрастаться в одном месте. Самый полезный следующий шаг без изменения поведения — разложить главную на секции-компоненты и разделить файл данных по предметным областям.
