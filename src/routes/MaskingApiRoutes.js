import { maskItem } from "../controllers/MaskingApiController.js";

export default function registerRoutes(app) {
  app.route("/").patch(maskItem);
}
