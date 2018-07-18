export const fetchVenue = venueId => {
  return $.ajax({
    method: "GET",
    url: `/api/venues/${venueId}`
  });
};
