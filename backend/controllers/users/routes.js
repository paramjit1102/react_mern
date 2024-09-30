const Router = require("router");
const route = new Router();
const userController = require("./userController");
route.post("/", userController.createUser);
route.get("/users", userController.getAllUsers);
route.get("/users/:id", userController.getUserById);
route.put("/users/:id", userController.updateUser);
route.delete("/users/:id", userController.deleteUser);

module.exports = route;
