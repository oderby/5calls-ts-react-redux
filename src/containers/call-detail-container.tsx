import { connect } from 'react-redux';
import {IIssue} from '../model';
import CallDetail from '../components/call-detail';

interface IStateProps {
  issue: IIssue;
}

function mapStateToProps(state): IStateProps {
  return {
    issue: state.activeIssue
  };
}

export default connect<IStateProps, {}, {}>(mapStateToProps)(CallDetail);
