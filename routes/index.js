import express from "express"
import Index from "../pages/index.js"
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(Index())
})

export default router