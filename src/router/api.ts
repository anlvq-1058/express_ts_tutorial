import express from "express";
import home from "./home";

const router = express.Router();

export default (): express.Router => {
  home(router);
  return router;
};
