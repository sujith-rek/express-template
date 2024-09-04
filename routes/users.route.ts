import { getSomeUser } from "../controllers/users.controller";

import Router from "express";
import interceptor from "../middleware/middleware";

const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test',interceptor(),getSomeUser);

export default router;
