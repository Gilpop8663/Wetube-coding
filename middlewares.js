import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "GilTube";
  res.locals.routes = routes;
  next();
};
