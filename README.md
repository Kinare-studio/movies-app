# MOVIES - APP (Приложение для поиска фильмов)

## DEPLOY LINK [<a href="https://movie-app-aston.netlify.app/">MOVIES APP </a>]

### В проекте используется библиотека компонентов и набор утилит для создания интерфейсов на Material Design System от Google.

Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

### React

- [x] Функциональные компоненты c хуками в приоритете над классовыми
- [x] Разделение на умные и глупые компоненты
- Умные: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/FilmList.jsx">FilmList </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/SuggestMovies.jsx">SuggestMovies </a>],[<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/SearchBar.jsx">SearchBar </a>] и т.д.
- Глупые: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/Header.jsx">Header </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/FilmCard.jsx">FilmCard </a>],[<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/Preloader.jsx">Preloader </a>] и т.д.
- [x] Рендеринг списков: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/FilmList.jsx">FilmList </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/SuggestMovies.jsx">SuggestMovies </a>]
- [x] Реализована хотя бы одна форма:[<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/SearchBar.jsx">SearchBar </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/pages/Login.jsx">Login </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/pages/Signup.jsx">Signup </a>]
- [ ] Есть применение Контекст API:
- [ ] Есть применение предохранителя:
- [x] Есть хотя бы один кастомный хук:[<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/hooks/useDebounce.jsx">useDebounce </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/hooks/useOutside.js">useOutside </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/hooks/useLocalStorage.js">useLocalStorage </a>]
- [x] Хотя бы несколько компонентов используют PropTypes: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/FilmCard.jsx">FilmCard </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/SuggestMovies.jsx">SuggestMovies </a>]
- [x] Поиск не должен триггерить много запросов к серверу: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/hooks/useDebounce.jsx">useDebounce </a>] используется в компоненте [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/components/SearchBar.jsx">SearchBar </a>]
- [x] Есть применение lazy + Suspense: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/routes/AppRoutes.jsx">AppRoutes </a>]

### Redux

- [x] Используем Modern Redux with Redux Toolkit: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/store.jsx">store </a>]
- [ ] Используем слайсы:
- [ ] Есть хотя бы одна кастомная мидлвара:
- [x] Используется RTK Query: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/api/MoviesApi.jsx">MoviesApi </a>]
- [x] Используется Transforming Responses: [<a href="https://github.com/Kinare-studio/movies-app/blob/develop/src/api/transformResponse.js">transformResponse </a>]

## 2 уровень (необязательный)

- [x] Настроен CI/CD
