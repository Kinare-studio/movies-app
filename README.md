# MOVIES - APP (Приложение для поиска фильмов)

## DEPLOY LINK [<a href="https://movie-app-aston.netlify.app/">MOVIES APP </a>]

### В проекте используется библиотека компонентов и набор утилит для создания интерфейсов на Material Design System от Google.

Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использую LocalStorage.

### React

- [x] Функциональные компоненты c хуками в приоритете над классовыми [<a href="https://github.com/Kinare-studio/movies-app/tree/main/src/components">components</a>]
- [x] Разделение на умные и глупые компоненты
- Умные: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/pages/Signup.jsx">Signup </a>],[<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/FilmList.jsx">FilmList </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/SearchBar.jsx">SearchBar </a>] и т.д.
- Глупые: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/SuggestMovies.jsx">SuggestMovies </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/FilmCard.jsx">FilmCard </a>] и т.д.
- [x] Рендеринг списков: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/FilmList.jsx">FilmList </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/SuggestMovies.jsx">SuggestMovies </a>]
- [x] Реализована хотя бы одна форма:[<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/SearchBar.jsx">SearchBar </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/pages/Login.jsx">Login </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/pages/Signup.jsx">Signup </a>]
- [x] Есть применение Контекст API: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/context/ColorContext.jsx">ColorContext </a>] используется в компоненте [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/Header.jsx">Header </a>]
- [x] Есть применение предохранителя: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/App.jsx">App </a>] пакет react-error-boundary;
- [x] Есть хотя бы один кастомный хук:[<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/hooks/useDebounce.jsx">useDebounce </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/hooks/useOutside.js">useOutside </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/hooks/usePersistentValue.js">usePersistentValue </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/hooks/useSearchHistoryManagement.js">useSearchHistoryManagement </a>]
- [x] Хотя бы несколько компонентов используют PropTypes: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/BtnFavor.jsx">BtnFavor </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/BtnMore.jsx">BtnMore </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/FavoriteCards.jsx">FavoriteCards </a>], [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/FilmCard.jsx">FilmCard </a>] и др.
- [x] Поиск не должен триггерить много запросов к серверу: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/hooks/useDebounce.jsx">useDebounce </a>] используется в компоненте [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/components/SearchBar.jsx">SearchBar </a>]
- [x] Есть применение lazy + Suspense: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/routes/AppRoutes.jsx">AppRoutes </a>]

### Redux

- [x] Используем Modern Redux with Redux Toolkit: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/store.jsx">store </a>]
- [x] Используем слайсы: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/redux/authSlice.js">authSlice </a>]
- [x] Есть хотя бы одна кастомная мидлвара: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/redux/AuthMiddleware.js">AuthMiddleware </a>]
- [x] Используется RTK Query: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/api/MoviesApi.jsx">MoviesApi </a>]
- [x] Используется Transforming Responses: [<a href="https://github.com/Kinare-studio/movies-app/blob/main/src/api/transformResponse.js">transformResponse </a>]

## 2 уровень (необязательный)

- [x] Настроен CI/CD
