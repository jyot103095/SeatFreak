import React from 'react';
import { untrack } from '../../actions/tracking_actions';
import { connect } from 'react-redux';

class TrackerTabItem extends React.Component {
	handleTracking() {
		this.props.untrack({ trackable_type: this.props.type, trackable_id: this.props.item.id });
	}

	render() {
		let name;
		if (this.props.type === "Event") {
			name = this.props.item.title;
		} else {
			name = this.props.item.name;
		}

		let styles = {
      backgroundImage: `url(${this.props.item.photoUrl})`,
      backgroundSize: 'cover',
      overflow: 'hidden'
   	};

		return (
			<div className="tracker-tab-item">
				{ this.props.type !== "Event" ? 
					<div className="tracker-item-photo" style={styles}></div> 
					: null
				}
				<div className="tracker-item-info">
					<h2>{name}</h2>
					<h2><i className={`fa-heart fa-sm fas tracked`} onClick={this.handleTracking.bind(this)}></i></h2>
				</div>
			</div>
		);
	}
}

const mDP = dispatch => {
	return {
		untrack: item => dispatch(untrack(item))
	};
};

export default connect(null, mDP)(TrackerTabItem);