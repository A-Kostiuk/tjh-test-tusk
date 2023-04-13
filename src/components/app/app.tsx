import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/default';
import { Normalize } from 'styled-normalize';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home-page/home-page';
import { CoursesPage } from '../pages/courses-page/courses-page';
import { GlobalStyle } from './styles';
import { PageWrapper } from '../layouts/page-wrapper/page-wrapper';
import { Provider } from 'react-redux';
import { store } from '../../store';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Normalize />
          <GlobalStyle />
          <Routes>
            <Route path={'/'} element={<PageWrapper />}>
              <Route index element={<HomePage />} />
              <Route path={'/courses'} element={<CoursesPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
