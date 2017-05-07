import {connect, Dispatch} from 'react-redux';
import {clearAddress, setAddress} from '../actions/index';
import {bindActionCreators} from 'redux';
import Location from '../components/location';

interface IStateProps {
  readonly location: string;
  readonly isValid: boolean;
  readonly isLoading: boolean;
}

interface IDispatchProps {
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

function mapStateToProps(state): IStateProps {
  return {
    location: state.location.address || state.location.cachedCity,
    isValid: !state.location.invalidAddress,
    isLoading: state.location.fetchingLocation || state.location.validatingLocation
  };
}

function mapDispatchToProps(dispatch: Dispatch<IDispatchProps>): IDispatchProps {
  return bindActionCreators({setLocation: setAddress, clearLocation: clearAddress}, dispatch);
}

export default connect<IStateProps, IDispatchProps, {}>(
    mapStateToProps, mapDispatchToProps)(Location);
