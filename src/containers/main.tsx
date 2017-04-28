import * as React from 'react';
import glamorous from 'glamorous';
import IssueList from './issue-list';
import CallDetail from './call-detail';

 export class Main extends React.Component<void, void> {

  public render() {
    const Title = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'palevioletred'
    });

    return (
      <div className="container">
        <div>
          <Title>5 Calls Prototype</Title>
        </div>
        <div>
          <div><IssueList /></div>
          <div><CallDetail /></div>
        </div>
      </div>
    );
  }
}

export default Main;
