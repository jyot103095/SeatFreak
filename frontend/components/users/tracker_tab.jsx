import React from 'react';
import TrackerTabItem from './tracker_tab_item';
import { connect } from 'react-redux';

class TrackerTab extends React.Component {

	render () {
		let type = this.props.type;
		if (this.props.type === "Artist" || this.props.type === "Team") {
			type = "Performer";
		}

		let trackerTabItems = this.props.trackedItems.map((item, idx) => <TrackerTabItem key={idx} type={type} item={item} />);

		let length = this.props.trackedItems.length || "no";

		let typeStr = this.props.type;
		if (length === "no" || length > 1) {
			typeStr += "s";
		}

		return (
			<div className="tracker-tab">
				<h1 className="tracker-tab-count">You're tracking {length} {typeStr}</h1>
				<div className="tracker-items">
					{ trackerTabItems }
				</div>
			</div>
		);
	}
}

const mSP = (state, ownProps) => {
	let trackedItems = state.entities.currentUser.trackedItems; 
	let trackedEvents = trackedItems.trackedEvents.map(eventId => state.entities.events[eventId] || []);
	let trackedPerformers = trackedItems.trackedPerformers.map(performerId => state.entities.performers[performerId] || []);
	let trackedVenues = trackedItems.trackedVenues.map(venueId => state.entities.venues[venueId] || []);	

	let trackedArtists = trackedPerformers.filter(performer => performer.classification === "Music");
	let trackedTeams = trackedPerformers.filter(performer => performer.classification === "Sports");

	if (ownProps.type === "Event") {
		trackedItems = trackedEvents;
	} else if (ownProps.type === "Artist") {
		trackedItems = trackedArtists;
	} else if (ownProps.type === "Team") {
		trackedItems = trackedTeams;
	} else if (ownProps.type === "Venue") {
		trackedItems = trackedVenues;
	}

	return {
		trackedItems
	};
};

export default connect(mSP)(TrackerTab);