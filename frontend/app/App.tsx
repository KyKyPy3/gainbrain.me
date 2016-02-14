import * as React from 'react';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return(
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
