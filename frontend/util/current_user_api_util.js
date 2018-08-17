export const updateUser = user => {
  return $.ajax({
    method: "patch",
    url: `/api/users/${user.get("id")}`,
    data: user,
    contentType: false,
    processData: false
  });
};

export const fetchCurrentUser = () => {
	return $.ajax({
		method: "get",
		url: `/api/users`,
	});
};