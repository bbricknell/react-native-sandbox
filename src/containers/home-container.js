import { connect } from 'react-redux';
import { Home } from '../components/home/home';
import { getTestText } from '../actions/test-actions';

function mapStateToProps(state) {
  return {
    text: state.test.text,
    data: state.test.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getText: () => {
      dispatch(getTestText());
    }
  };
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);