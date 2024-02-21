import register from "../controllers/AuthenticationController.js";
import AuthenticationControllerPolicy from "../policies/AuthenticationControllerPolicy.js";

export default (app) => {
  app.post("/register", AuthenticationControllerPolicy.register, register);
};
