
# KA‑Lite (Starter)

A minimal, content‑driven learning site inspired by Khan Academy.
Built with **Vite + React (TypeScript)**, supports lessons with videos/markdown and interactive exercises (MCQ and numeric).
Learner progress is stored in **localStorage** for simplicity.

## Quick start

```bash
# 1) Unzip and enter the folder
npm install
npm run dev
# open http://localhost:5173
```

## Project structure

```
src/
  components/        # Lesson player + exercise widgets
  content/           # Courses & lessons (JSON)
  lib/               # Progress storage helpers
  routes/            # Home, Course, Lesson pages (React Router)
```

## How to add a course

1. Edit `src/content/courses.json`: add a new object with `slug`, `title`, etc.
2. Add lessons to `src/content/lessons.json` where `course` equals your course slug.
3. For each lesson add:
   - `title`, `summary`, `video` (YouTube id optional), and `markdown` (supports `**bold**`, LaTeX-like `\(x^2\)` is fine in text).
   - `exercises`: choose `mcq` or `numeric` kinds with prompt/choices/answers.
4. The UI will auto‑render your new course and lessons.

## Roadmap (what to build next)

- Accounts & sync (Supabase or NextAuth) instead of localStorage
- More exercise types: code runner, drag‑and‑drop, graphing
- Mastery system: streaks, spaced repetition, skill tree
- Creator Studio: web editor for lessons/exercises with versioning
- Analytics: per‑learner progress, item difficulty (IRT), A/B testing
- Accessibility & i18n: full keyboard support, screen reader labels, translations
- Mobile‑first theming and offline (PWA)

## License

MIT — feel free to adapt and extend.
