import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import Navigation from './navigation';

interface IProps /* extends RouteComponentProps<any> */ {};

const About: React.SFC<IProps> = (props: IProps) => (
  <div>
    <h1>About 5 Calls</h1>
    <Navigation/>
  </div>
);

export default About;
