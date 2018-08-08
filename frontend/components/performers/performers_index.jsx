import React from 'react';
import { connect } from 'react-redux';
import {
  requestPerformers
} from '../../actions/performer_actions';
import Footer from '../footer';
import { withRouter, Link } from 'react-router-dom';

class PerformersIndex extends React.Component {
  componentDidMount() {
    this.props.requestPerformers(this.props.match.params.category);
  }

  componentDidUpdate(prevParams) {
    if (prevParams.category !== this.props.category) {
      this.props.requestPerformers(this.props.category);
    }
  }

  render() {
    let classification;

    const performerIndexItems = this.props.performers.map((performer, id) => {
      if (performer.classification === "Sports") {
        classification = `${this.props.category} Teams`;
      } else {
        classification = `${this.props.category} Artists`;
      }

      return (
        <tr key={performer.id}>
          <td className="performer-list-id">{id + 1}</td>
          <td>
            <div className="category-performer-item" >
              <Link to={`/performers/${performer.id}`}>{performer.name}</Link>
            </div>
          </td>
        </tr>
      );
    });

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
            <h3 className="main-content-route-info">
              <span><Link to="/" >Home</Link> / {this.props.category}</span>
            </h3>
            <h1 className="main-content-splash-name">{this.props.category} Tickets</h1>
          </div>
        </header>
        <div className="main-content-content" >
          <h1 className="performer-category-title">{classification}</h1>
          <table className="category-performers-list" >
            <tbody>
              {performerIndexItems}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

const mSP = (state, ownProps) => {
  const category = ownProps.match.params.category;
  const performers = Object.values(state.entities.performers).filter(performer => performer.category === category);
  return {
    performers,
    category
  };
};

const mDP = dispatch => {
  return {
    requestPerformers: category => dispatch(requestPerformers(category))
  };
};

export default withRouter(connect(mSP, mDP)(PerformersIndex));
