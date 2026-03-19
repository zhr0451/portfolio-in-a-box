# Портфолио на Astro

Небольшой статический сайт-портфолио на Astro 6 и Tailwind CSS 4. Сейчас проект собран как одна страница с данными из одного файла и развёртывается на GitHub Pages.

## Стек

- Astro 6
- Tailwind CSS 4 через Vite-плагин
- TypeScript strict config
- pnpm
- GitHub Actions + GitHub Pages

## Быстрый старт

Требования:

- Node.js `>=22.12.0`
- `pnpm`

Команды:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Как устроен проект

- [src/pages/index.astro](/d:/code/web/portfolio/src/pages/index.astro) — единственная страница сайта
- [src/layouts/BaseLayout.astro](/d:/code/web/portfolio/src/layouts/BaseLayout.astro) — общий HTML-каркас, мета-теги и подключение шрифтов
- [src/components/ActionButton.astro](/d:/code/web/portfolio/src/components/ActionButton.astro) — кнопка действия для ссылок на GitHub, itch.io, Telegram и email
- [src/data/site.ts](/d:/code/web/portfolio/src/data/site.ts) — основной источник данных страницы
- [src/styles/global.css](/d:/code/web/portfolio/src/styles/global.css) — глобальные стили и все основные классы интерфейса
- [public/](/d:/code/web/portfolio/public) — статические файлы: иконки, кнопки, фото, шрифты
- [.github/workflows/astro.yml](/d:/code/web/portfolio/.github/workflows/astro.yml) — сборка и деплой на GitHub Pages

Подробное описание архитектуры и рекомендаций: [docs/architecture.md](/d:/code/web/portfolio/docs/architecture.md)

## Текущее поведение

- Контент страницы формируется из объекта `site`
- Локализация `ru/en` переключается на клиенте через встроенный скрипт
- Ассеты подключаются с учетом `base` через `import.meta.env.BASE_URL`
- Сайт собирается как статический и публикуется в GitHub Pages

## Что стоит знать перед расширением

- Сейчас данные, рендеринг и часть клиентской логики собраны вокруг одной страницы
- Для небольшого лендинга это нормально, но при росте контента удобнее будет вынести секции в отдельные компоненты
- `src/content.config.ts` пока пустой: коллекции контента ещё не используются

## Рекомендуемое направление развития

- Разбить главную страницу на секции-компоненты
- Перенести данные проектов в content collections или отдельные файлы данных
- Разделить глобальные стили на базовый слой и стили секций
- Оставить `src/pages/` только для маршрутов, а интерфейсные компоненты держать в `src/components/`
