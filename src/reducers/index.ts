import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import IssueListReducer from './reducer_issues';
import ActiveIssue from './reducer_active_issue';
import { IIssue } from '../model';

export interface IApplicationState {
  routing: any;
  issues: IIssue[];
  activeIssue: IIssue;
}

const reducers = combineReducers<IApplicationState>({
  routing,
  issues: IssueListReducer,
  activeIssue: ActiveIssue
});

export default reducers;
