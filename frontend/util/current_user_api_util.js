export const updateUser = user => {
  return $.ajax({
    method: "patch",
    url: `/api/users/${user.id}`,
    data: {
      user
    }
  });
};

export const fetchCurrentUser = () => {
	return $.ajax({
		method: "get",
		url: `/api/users`,
	});
};