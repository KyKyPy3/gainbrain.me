import * as React from 'react';

export default class Other extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <h2>Иностранные языки</h2>
        <ul type="square">
          <li>Английский: технический (чтение профессиональной литературы, деловая переписка)</li>
        </ul>
      </div>
    )
  }
}
