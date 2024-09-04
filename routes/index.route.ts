import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the Smart India Hackathon 2020!');
});


export default router;
