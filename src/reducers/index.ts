import { routerReducer as routing, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import issueListReducer from './reducer_issues';
import activeIssueReducer from './reducer_active_issue';
import locationReducer from './reducer_location';
import { IIssue } from '../model';

export interface IApplicationState {
  routing: RouterState;
  issues: IIssue[];
  activeIssue: IIssue;
}

const reducers = combineReducers<IApplicationState>({
  routing,
  issues: issueListReducer,
  activeIssue: activeIssueReducer,
  location: locationReducer
});

export default reducers;
