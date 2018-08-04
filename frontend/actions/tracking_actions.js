import * as TrackingApiUtil from '../util/tracking_api_util';

export const RECEIVE_TRACKED_ITEM = "RECEIVE_TRACKED_ITEM";
export const RECEIVE_UNTRACKED_ITEM = "RECEIVE_UNTRACKED_ITEM";

export const receiveTrackedItem = item => {
	return {
		type: RECEIVE_TRACKED_ITEM,
		item
	};
};

const receiveUntrackedItem = item => {
	return {
		type: RECEIVE_UNTRACKED_ITEM,
		item
	};
};

export const track = item => dispatch => {
  return TrackingApiUtil.trackItem(item).then(
    item => dispatch(receiveTrackedItem(item)),
  );
}

export const untrack = item => dispatch => {
  return TrackingApiUtil.untrackItem(item).then(
    item => dispatch(receiveUntrackedItem(item)),
  );
}