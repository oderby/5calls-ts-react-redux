import * as React from 'react';
import Layout from '../components/layout';
import Main from '../containers/main';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {
}

interface IState {}

class HomePage extends React.Component<IProps, IState> {
  render() {
    return (
      <Layout title={'5 Calls Prototype'}>
        <Main/>
      </Layout>
    );
  }
}

export default HomePage;
