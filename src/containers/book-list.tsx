import * as React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
import {IBook} from '../model';

// interface IBookListProps {
//   books: IBook[];
//   activeBook: IBook;
// }

interface IStateProps {
  books: IBook[];
}

interface IDispatchProps {
  selectBook: IBook;
}

class BookList extends React.Component<IStateProps & IDispatchProps, void> {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/**
 * Assigns parts of state to bookList props
 *
 * @param {any} props
 * @returns
 */
function mapStateToProps(state) {
  // what is returned here will show up
  // as props inside of bookList
  return {
    // key = individual prop
    books: state.books
  };
}

/**
 * Anything returned from this function will end
 * up as props on the on the BookList container
 * @param {any} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result
  // will be passed to all of our reducers
  return bindActionCreators({selectBook}, dispatch);
}

/**
 * Promotes BookList from a component to a container.
 * It needs to know about the new distach method, selectBook.
 * Makes it available as a prop.
 */
export default connect<IStateProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps)(BookList);
// this is the only export
