export const trackItem = item => {
	return $.ajax({
		method: "POST",
		url: "/api/trackings",
		data: {
			tracking: item
		}
	});
};

export const untrackItem = item => {
	return $.ajax({
		method: "DELETE",
		url: "/api/trackings",
		data: {
			tracking: item
		}
	});
};