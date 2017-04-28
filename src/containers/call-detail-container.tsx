import { connect } from 'react-redux';
import {IIssue} from '../model';
import CallDetail from '../components/call-detail';

interface IStateProps {
  issue: IIssue;
}

function mapStateToProps(state) {
  return {
    issue: state.activeIssue
  };
}

export default connect<IStateProps, void, void>(mapStateToProps)(CallDetail);
