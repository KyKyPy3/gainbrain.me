import * as React from 'react';
import * as i18next from 'i18next';
import * as XHR from '../node_modules/i18next-xhr-backend/bin/index.js';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Work from './components/work';
import Education from './components/education';
import Other from './components/other';

import './styles/body.css';

interface IAppProps {
  loaded: boolean;
}

export default class App extends React.Component<IAppProps, any> {
  constructor(props: IAppProps, context: any) {
    super(props, context);

    this.state = {
      loaded: false
    };
  }

  public componentWillMount(): void {
    i18next
      .use(XHR)
      .init({
        debug: true,
        dynamicLoad: true,
        fallbackLng: 'rus',
        lng: 'rus',
        resGetPath: 'locales/__lng__/__ns__.json',
      }, (err: any, t: any) => {
        this.setState({
           loaded: true
        });
      });
  }

  public render(): React.ReactElement<{}> {
    if (this.state.loaded === true) {
      return(
        <div>
          <Header />
          <Main />
          <Work />
          <Education />
          <Other />
          <Footer />
        </div>
      );
    } else {
      return(
        <div>Loading...</div>
      );
    }
  }
}
