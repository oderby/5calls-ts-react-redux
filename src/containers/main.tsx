import * as React from 'react';
import glamorous from 'glamorous';
import IssueListContainer from './issue-list-container';
import CallDetailContainer from './call-detail-container';

 export class Main extends React.Component<void, void> {

  public render() {
    const Title = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'blue'
    });

    return (
      <div className="container">
        <div>
          <Title>5 Calls Prototype</Title>
        </div>
        <div>
          <div><IssueListContainer /></div>
          <div><CallDetailContainer /></div>
        </div>
      </div>
    );
  }
}

export default Main;
