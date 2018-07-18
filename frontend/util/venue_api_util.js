export const fetchVenue = venueId => {
  return $.ajax({
    method: "GET",
    url: `/api/venues/${venueId}`
  });
};

export const fetchVenues = () => {
  return $.ajax({
    method: "GET",
    url: `/api/venues`
  });
};
