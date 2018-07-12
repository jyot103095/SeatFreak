export const fetchEvent = (eventId) => {
  return $.ajax({
    method: "GET",
    url: `/api/events/${eventId}`
  });
};
