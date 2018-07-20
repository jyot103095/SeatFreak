export const search = query => {
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: {
      query
    }
  });
};
