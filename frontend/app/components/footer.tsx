import * as React from 'react';
import * as i18next from 'i18next';
import '../styles/footer.css';

export default class Footer extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <footer className='footer'>
        {i18next.t('test')}
      </footer>
    );
  }
}
