import * as React from 'react';
import { NavLink } from 'react-router-dom';
import glamorous from 'glamorous';

const NavBorderStyle = glamorous.div({
  position: 'fixed',
  border: 'auto 0',
  padding: '2px 80px',
  width: '80%'
});

const NavSpanStyle = glamorous.span({
  padding: '4px'
});

export interface IProps {}

const Navigation: React.SFC<IProps> = (props: IProps) => (
    <div>
      <hr style={{border: '2px solid darkgray', width: '90%'}}/>
      <NavBorderStyle>
        <NavSpanStyle>
          <NavLink className="navlink" to="/" activeStyle={{color: 'red'}} exact={true}>Home</NavLink>
        </NavSpanStyle>
        <NavSpanStyle>
          <NavLink className="navlink" to="/about" activeStyle={{color: 'red'}}>About</NavLink>
        </NavSpanStyle>
      </NavBorderStyle>
    </div>
);

export default Navigation;
