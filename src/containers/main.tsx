import * as React from 'react';
import glamorous from 'glamorous';

export class Main extends React.Component<void, void> {

  public render() {
    const Title = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'palevioletred'
    });

    return (
      <div>
        <Title>Yeah it works</Title>
      </div>
    );
  }
}

export default Main;
