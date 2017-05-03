import * as React from 'react';
import Navigation from './navigation';
import glamorous from 'glamorous';

interface IProps {
  readonly title: string;
  readonly children?: any;
}

interface IState {}

class Layout extends React.Component<IProps, IState> {
  render() {
    const TitleStyle = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      paddingTop: '15px',
      color: 'blue'
    });
    return (
      <div>
        <header>
          <TitleStyle>{this.props.title}</TitleStyle>
          <hr style={{border: '2px solid darkgray', width: '80%'}}/>
        </header>
        <main className="container">
          {this.props.children}
        </main>
        <footer>
          <Navigation/>
        </footer>
      </div>
    );
  }
}

export default Layout;
