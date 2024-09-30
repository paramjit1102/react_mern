const Router = require("router");
const productsControllers=require('./productsController')
const route = new Router({
    prefix: "/products",
});
route.get("/", productsControllers.getAllProducts);
module.exports = route;
