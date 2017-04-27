import * as React from 'react';
import glamorous from 'glamorous';
import BookList from './book-list';
import BookDetail from './book-detail';

 export class Main extends React.Component<void, void> {

  public render() {
    const Title = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'palevioletred'
    });

    return (
      <div>
        <div>
          <Title>Yeah it works</Title>
        </div>
        <div><BookList /></div>
        <div><BookDetail /></div>
      </div>
    );
  }
}

export default Main;
