import React from 'react';
import { withTranslation, WithTranslation } from '@wix/wix-i18n-config';
import s from './App.scss';

/* <-- To remove demo stuff just copy-paste:
  \{?/\*\s?<--([\n\n]|.)*?-->\s?\*\/\}?
  to your search input with RegExp enabled and remove everything matched.
--> */

interface AppProps extends WithTranslation {}

class App extends React.Component<AppProps> {
  /* <-- Feel free to remove this lifecycle hook and state */
  /* <-- Please also remove `yoshi-template-intro` from your package.json */
  state = {
    TemplateIntro: () => null,
  };
  async componentDidMount() {
    const { default: TemplateIntro } = await import('yoshi-template-intro');
    this.setState({ TemplateIntro });
  } /* --> */

  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <h2 className={s.title} data-hook="app-title">
          {t('app.title', { who: 'Yoshi' })}
        </h2>

        {/* <-- Feel free to remove TemplateIntro */}
        <this.state.TemplateIntro />
        {/* --> */}
      </div>
    );
  }
}

export default withTranslation()(App);
