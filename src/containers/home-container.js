import { connect } from 'react-redux';
import Home from '../home/home';

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);