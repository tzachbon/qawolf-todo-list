import React from 'react';
import { PageHeaderProps, Text, TextButton } from 'wix-style-react';
import { Optional } from 'utility-types';
import { APP_CONSTANTS } from './constants';

interface HeaderProps extends Optional<PageHeaderProps> {}

const { TITLE, SUBTITLE, LINK, HREF } = APP_CONSTANTS.translationKeys.HEADER;

const getHeaderProps = ({ t }): HeaderProps => ({
  showBackButton: false,
  title: t(TITLE),
  subtitle: (
    <>
      <Text>{t(SUBTITLE)}</Text>{' '}
      <TextButton as="a" href={t(HREF)}>
        {t(LINK)}
      </TextButton>
    </>
  ),
});

export default getHeaderProps;
