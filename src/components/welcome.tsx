import * as React from 'react';

interface IProps {}

interface IState {}

class Welcome extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <h2>MAKE YOUR VOICE HEARD</h2>
        <div>
          Turn your passive participation into
          active resistance. Facebook likes and Twitter retweets
          can’t create the change you want to see.
          Calling your Government on the phone can.
        </div>
        <h4>Spend 5 minutes, make 5 calls.</h4>
      </div>
    );
  }
}

export default Welcome;
