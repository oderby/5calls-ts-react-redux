import * as React from 'react';
import IssueListContainer from './issue-list-container';
import CallDetailContainer from './call-detail-container';
import Location from './location-container';

interface IProps {}

interface IState {}

export class Main extends React.Component<IProps, IState> {

  public render() {
    return (
      <div>
        <div><Location /></div>
        <div><IssueListContainer /></div>
        <div><CallDetailContainer /></div>
      </div>
    );
  }
}

export default Main;
