import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {selectIssue} from '../actions/index';
import {bindActionCreators} from 'redux';
import {IIssue} from '../model';

interface IStateProps {
  issues: IIssue[];
}

interface IDispatchProps {
  selectIssue: (issue: IIssue) => void;
}

class IssueList extends React.Component<IStateProps & IDispatchProps, void> {
  constructor(props) {
    super(props);
  }

  renderList() {
    if (!this.props.issues || this.props.issues.length === 0) {
      return (
        <li className="list-group-item">No issues are available</li>
      );
    }
    return this.props.issues.map((issue) => {
      return (
        <li key={issue.title}
        onClick={() => this.props.selectIssue(issue)}
        className="list-group-item">{issue.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/**
 * Assigns parts of state to IssueList props
 *
 * @param {any} props
 * @returns
 */
function mapStateToProps(state): IStateProps {
  // what is returned here will show up
  // as props inside of IssueList
  return {
    // key = individual prop
    issues: state.issues
  };
}

/**
 * Anything returned from this function will end
 * up as props on the on the IssueList container
 * @param {any} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch: Dispatch<IDispatchProps>): IDispatchProps {
  // Whenever selectIssue is called, the result
  // will be passed to all of our reducers
  return bindActionCreators({selectIssue}, dispatch);
}

/**
 * Promotes IssueList from a component to a container.
 * It needs to know about the new distach method, selectIssue.
 * Makes it available as a prop.
 */
export default connect<IStateProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps)(IssueList);
// this is the only export
