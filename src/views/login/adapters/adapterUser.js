export const adapterUser = (user) => {
  return {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
};
