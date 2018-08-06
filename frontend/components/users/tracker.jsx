import React from 'react';
import { requestCurrentUser } from '../../actions/current_user_actions'; 
import TrackerTab from './tracker_tab';
import { connect } from 'react-redux';

class Tracker extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
      selected: 1
    };
	}

	componentDidMount() {
		this.props.requestUser();
	}

	render() {
		let tab = () => {
			if (this.state.selected === 1) {
				return (<TrackerTab type="Event" />);
			} else if (this.state.selected === 2) {
				return (<TrackerTab type="Artist" />);
			} else if (this.state.selected === 3) {
				return (<TrackerTab type="Team" />);
			} else if (this.state.selected === 4) {
				return (<TrackerTab type="Venue" />);
			}
		} 

		return (
			<div className="performers-index-container" >
        <header className="main-content-splash">
        	<div className="block-shade"></div>
        	<div className="main-content-splash-image">
        		<div className="upwards-shade"></div>
        		<div className="right-shade"></div>
        		<div className="left-shade"></div>
        		<div className="main-clear-space"></div>
        	</div>
          <div className="main-content-splash-info">
          	<h1 className="main-content-splash-name">Tracker</h1>
          </div>
        </header>
        <div className="main-content-content">
        	<div className="tracker-tabs">
        		<h2 className={this.state.selected === 1 ? "active-tab" : null}
              onClick={() => this.setState({ selected: 1 })}>My Events</h2>
            <h2 className={this.state.selected === 2 ? "active-tab" : null}
              onClick={() => this.setState({ selected: 2 })}>My Artists</h2>
            <h2 className={this.state.selected === 3 ? "active-tab" : null}
              onClick={() => this.setState({ selected: 3 })}>My Teams</h2>
            <h2 className={this.state.selected === 4 ? "active-tab" : null}
              onClick={() => this.setState({ selected: 4 })}>My Venues</h2>
          </div>
          { tab() }
        </div>
      </div>
    );
	}
}

const mDP = dispatch => {
	return {
		requestUser: () => dispatch(requestCurrentUser())
	};
};

export default connect(null, mDP)(Tracker);