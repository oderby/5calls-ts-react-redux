import * as React from 'react';
import Layout from '../components/layout';
import About from '../components/about';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class AboutPage extends React.Component<IProps, IState> {
  render() {
    return (
      <Layout title={'About 5 Calls'}>
        <About/>
      </Layout>
    );
  }
}

export default AboutPage;
