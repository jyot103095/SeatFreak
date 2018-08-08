import React from 'react';
import { untrack } from '../../actions/tracking_actions';
import { connect } from 'react-redux';

class TrackerTabItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageView: false
		};

		this.handleTracking = this.handleTracking.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}

	handleLoad() {
		this.setState({
			imageView: true
		});
	}

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

		return (
			<div className="tracker-tab-item">
				<div className="tracker-item-photo">
					<img src={this.props.item.photoUrl} onLoad={this.handleLoad} className={this.state.imageView ? "image-shown" : "image-hidden"}/>
				</div>
				<div className="tracker-item-info">
					<h2>{name}</h2>
					<h2><i class="fas fa-times fa-lg" onClick={this.handleTracking}></i></h2>
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