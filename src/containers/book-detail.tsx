import * as React from 'react';
import { connect } from 'react-redux';
import {IBook} from '../model';

interface IStateProps {
  book: IBook;
}

class BookDetail extends React.Component<IStateProps, void> {

  render() {
    // At startup, an action is fired
    // that we don't handle, so default
    // state is returned (null in this case)
    if (!this.props.book) {
      return (
        <div>Please select a book</div>
      );
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect<IStateProps, void, void>(mapStateToProps)(BookDetail);
