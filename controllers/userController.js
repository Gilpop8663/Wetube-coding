import routes from "../routes";

export const getJoin = (req, res) => res.render("Join", { pageTitle: "Join" });

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    //To Do : Register User
    //To Do : Log user in
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) =>
  res.render("Login", { pageTitle: "Log in" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //TO DO : Process Log Out
  res.redirect(routes.home);
};
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
