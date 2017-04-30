import * as React from 'react';
import { NavLink } from 'react-router-dom';
import glamorous from 'glamorous';

const NavBorder = glamorous.div({
  position: 'fixed',
  border: 'auto 0',
  padding: '2px 80px',
  width: '80%'
});

const NavSpan = glamorous.span({
  padding: '4px'
});

export interface IProps {}

const Navigation: React.SFC<IProps> = (props: IProps) => (
    <div>
      <hr style={{border: '2px solid darkgray', width: '90%'}}/>
      <NavBorder>
        <NavSpan>
          <NavLink className="navlink" to="/" activeStyle={{color: 'red'}} exact={true}>Home</NavLink>
        </NavSpan>
        <NavSpan>
          <NavLink className="navlink" to="/about" activeStyle={{color: 'red'}}>About</NavLink>
        </NavSpan>
      </NavBorder>
    </div>
);

export default Navigation;
