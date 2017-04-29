import {connect, Dispatch} from 'react-redux';
import {selectIssue} from '../actions/index';
import {bindActionCreators} from 'redux';
import {IIssue} from '../model';
import IssueList from '../components/issue-list';

interface IStateProps {
  issues: IIssue[];
}

interface IDispatchProps {
  selectIssue: (issue: IIssue) => void;
}

function mapStateToProps(state): IStateProps {
  return {
    issues: state.issues
  };
}

function mapDispatchToProps(dispatch: Dispatch<IDispatchProps>): IDispatchProps {
  return bindActionCreators({selectIssue}, dispatch);
}

export default connect<IStateProps, IDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(IssueList);
