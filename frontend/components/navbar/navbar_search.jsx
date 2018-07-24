import React from 'react';
import { search } from '../../actions/search_actions';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import SearchResults from '../search/search_results';

class NavbarSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
    this.props.search(this.state.query);
  }

  render() {
    return (
      <div className="search-navbar-container" >
        <form className="search-form-navbar">
          <i className="fas fa-search fa-lg"></i>
          <DebounceInput
            minLength={2}
            debounceTimeout={500}
            onChange={this.handleChange} placeholder="Search by team, artist, event, or venue" />
        </form>
        <div className="search-results-container-navbar">
          { this.state.query.length >= 2 ? <SearchResults /> : null}
        </div>
      </div>
    );
  }
};

const mSP = state => {
  return {
    results: state.ui.search
  };
};

const mDP = dispatch => {
  return {
    search: query => dispatch(search(query))
  };
};

export default connect(mSP, mDP)(NavbarSearchBox);
