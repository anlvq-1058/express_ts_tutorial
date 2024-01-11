import express from "express";

import { home } from "../controllers/Api/Home";

export default (router: express.Router) => {
  router.get("/", home);
};
