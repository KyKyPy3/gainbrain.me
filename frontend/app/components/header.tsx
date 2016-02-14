import * as React from 'react';
import '../styles/header.css';

export default class Header extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <header className='header'>
        <h1>Ефременко Роман</h1>
        <p>Москва, ул. Академика Капицы, д.244, кв. 416
        <br />моб. тел.: +7 (962) 910-1111 - email: <a href='mailto:xxx@gmail.com'>xxx@gmail.com</a></p>
      </header>
    );
  }
}
