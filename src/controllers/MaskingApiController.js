import { recursiveMask } from "../utils/MaskingUtil.js";

export function maskItem(req, res) {
  res.status(200).send(recursiveMask(req.body));
}
