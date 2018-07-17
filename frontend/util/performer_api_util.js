export const fetchPerformer = performerId => {
  return $.ajax({
    method: "GET",
    url: `/api/performers/${performerId}`
  });
};

export const fetchPerformers = category => {
  return $.ajax({
    method: "GET",
    url: `/api/performers/${category}/events`
  });
};
