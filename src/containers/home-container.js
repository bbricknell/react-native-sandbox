import { connect } from 'react-redux';
import { Home } from '../home/home';

function mapStateToProps(state) {
  return {
    test: state.test.hello
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTest: () => {
      dispatch({type: 'TEST'});
    }
  };
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);