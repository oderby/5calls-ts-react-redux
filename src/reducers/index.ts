import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import IssueListReducer from './reducer_issues';
import ActiveIssue from './reducer_active_issue';



const reducers = combineReducers<any>({
  routing,
  issues: IssueListReducer,
  activeIssue: ActiveIssue
});

export default reducers;
