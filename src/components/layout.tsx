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
    const Title = glamorous.h1({
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'blue'
    });
    return (
      <div>
        <header>
          <Title>{this.props.title}</Title>
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
