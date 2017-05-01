import * as React from 'react';
import IssueListContainer from './issue-list-container';
import CallDetailContainer from './call-detail-container';

interface IProps {}

interface IState {}

export class Main extends React.Component<IProps, IState> {

  public render() {
    return (
      <div>
        <div><IssueListContainer /></div>
        <div><CallDetailContainer /></div>
      </div>
    );
  }
}

export default Main;
