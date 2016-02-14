import * as React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Work from './components/work';
import Education from './components/education';
import Other from './components/other';

import './styles/body.css';


export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
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
  }
}
