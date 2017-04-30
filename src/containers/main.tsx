import * as React from 'react';
import glamorous from 'glamorous';
import IssueListContainer from './issue-list-container';
import CallDetailContainer from './call-detail-container';
import Navigation from '../components/navigation';


 export class Main extends React.Component<void, void> {

  public render() {
    const Title = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'blue'
    });

    return (
      <div>
        <div className="container">
          <div>
            <Title>5 Calls Prototype</Title>
          </div>
          <div>
            <div><IssueListContainer /></div>
            <div><CallDetailContainer /></div>
          </div>
        </div>
          <Navigation/>
      </div>
    );
  }
}

export default Main;
