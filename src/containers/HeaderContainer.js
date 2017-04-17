import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { searchTermChanged } from '../store/actions';

const { string } = PropTypes;

class HeaderContainer extends React.Component {

  handleSearch() {
    return (event) => {
      this.props.dispatch(searchTermChanged(event.target.value));
    };
  }

  searchItem() {
    return () => {
      console.log(this);
    };
  }

  render() {
    return (<Header
      title="Home"
      value={this.props.searchTerm}
      handleSearch={this.handleSearch()}
      searchItem={this.searchItem()}
    />);
  }
}

HeaderContainer.propTypes = {
  searchTerm: string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

// const mapActionsToProps()
export default connect(mapStateToProps)(HeaderContainer);
