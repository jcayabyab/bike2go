const passport = require("passport");

const redirectAfterLogin = "/";
const redirectAfterLogout = "/";

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect(redirectAfterLogin);
    }
  );

  app.get("/api/current-user", (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect(redirectAfterLogout);
  });
};
