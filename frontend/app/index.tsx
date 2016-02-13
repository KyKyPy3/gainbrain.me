import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Main extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return(
      <div>Test react</div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
