export const isAuthenticated = () => {
    return localStorage.getItem("loggedInUser") ? true : false;
  };