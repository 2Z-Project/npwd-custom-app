import React, { useState } from 'react';
import { NuiProvider } from 'react-fivem-hooks';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IPhoneSettings } from '@project-error/npwd-types';
import { i18n } from 'i18next';
import {
  Theme,
  StyledEngineProvider,
  Paper,
  // Typography,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import ThemeSwitchProvider from './ThemeSwitchProvider';
import { HomeRounded, InfoRounded } from '@mui/icons-material';
import Header, { HEADER_HEIGHT } from './components/Header';
import { path } from '../npwd.config';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem;
  max-height: calc(100% - 3.5rem - ${HEADER_HEIGHT});
  overflow: auto;
`;

// const LinkItem = styled(Link)`
//   font-family: sans-serif;
//   text-decoration: none;
// `;

// const Footer = styled.footer`
//   margin-top: auto;
// `;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

const App = (props: AppProps) => {
  // const history = useHistory();
  // const [count, setCount] = useState(0);
  // const { data } = useNuiEvent<string>({ event: 'RANDOM' });

  const { pathname } = useLocation();
  const [page, setPage] = useState(pathname);

  const handleChange = (_e: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode={props.theme.palette.mode}>
        <Container square elevation={0}>
          <Header>Tiktok App</Header>
          <Content>

            {/* <Footer>
              <LinkItem to="/">
                <Typography>Home</Typography>
              </LinkItem>
            </Footer> */}
          </Content>

          <BottomNavigation value={page} onChange={handleChange} showLabels>
            <BottomNavigationAction
              label={'Home'}
              value="/home"
              component={NavLink}
              icon={<HomeRounded />}
              to={path}
            />
            <BottomNavigationAction
              label={'About'}
              value="/about"
              color="secondary"
              component={NavLink}
              icon={<InfoRounded />}
              to={path}
            />
          </BottomNavigation>
        </Container>
      </ThemeSwitchProvider>
    </StyledEngineProvider>
  );
};

const WithProviders: React.FC<AppProps> = (props) => (
  <NuiProvider>
    <App {...props} />
  </NuiProvider>
);

export default WithProviders;
