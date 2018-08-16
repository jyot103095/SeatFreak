import React from 'react';
import { search } from '../../actions/search_actions';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { withRouter } from 'react-router-dom';
import SearchResults from '../search/search_results';

class NavbarSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({query: ""});
    }
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
            minLength={3}
            debounceTimeout={500}
            onChange={this.handleChange} placeholder="Search by team, artist, event, or venue" 
            value={this.state.query}
          />
        </form>
        <div className="search-results-container-navbar">
          { this.state.query.length >= 3 ? <SearchResults navbar={true} /> : null}
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

export default withRouter(connect(mSP, mDP)(NavbarSearchBox));
