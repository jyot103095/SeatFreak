export const updateUser = user => {
  return $.ajax({
    method: "patch",
    url: `/api/users/${user.id}`,
    data: {
      user
    }
  });
};
