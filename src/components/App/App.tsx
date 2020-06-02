import React from 'react';
import { withTranslation, WithTranslation } from '@wix/wix-i18n-config';
import s from './App.scss';
import { Page } from 'wix-style-react';
import getHeaderProps from './header-props';
import List from './List';
import ListInput from './ListInput';
import { observer } from 'mobx-react-lite';

interface AppProps extends WithTranslation {}

const App: React.FC<AppProps> = ({ t }) => {
  return (
    <Page className={s.root} height="100vh">
      <Page.Header {...getHeaderProps({ t })} />
      <Page.Content>
        <ListInput />
        <List />
      </Page.Content>
    </Page>
  );
};

export default withTranslation()(observer(App));
