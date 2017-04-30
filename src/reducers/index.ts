import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import issueListReducer from './reducer_issues';
import activeIssueReducer from './reducer_active_issue';
import { IIssue } from '../model';

export interface IApplicationState {
  routing: any;
  issues: IIssue[];
  activeIssue: IIssue;
}

const reducers = combineReducers<IApplicationState>({
  routing,
  issues: issueListReducer,
  activeIssue: activeIssueReducer
});

export default reducers;
