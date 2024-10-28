const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  // Read token from cookies
  const token = req.cookies.authToken;

  if (!token) return res.redirect("/login");

  const user = getUser(token);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  // Read token from cookies
  const token = req.cookies.authToken;

  if (!token)
    return res.status(401).json({ error: "Authorization token missing" });

  const user = getUser(token);

  if (!user) return res.status(401).json({ error: "Invalid token" });

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};

// const { getUser } = require('../service/auth')

// async function restrictToLoggedinUserOnly(req, res, next) {
//     const userUid = req.headers["Authorization"];

//     if (!userUid) return res.redirect("/login");
//     const token = UserUid.split("Bearer ")[1];
//     const user = getUser(token);

//     if (!user) return res.redirect("/login");

//     req.user = user;
//     next();
// }

// async function checkAuth(req, res, next) {
//     const userUid = req.headers["authorization"];
//     const token = userUid.split("Bearer")[1];
//     const user = getUser(token);

//     req.user = user;
//     next();
// }

// module.exports = {
//     restrictToLoggedinUserOnly,
//     checkAuth,
// };
