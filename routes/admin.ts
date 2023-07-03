import {Router} from "express";

const router: Router = Router();

const postsController = require("../app/controllers/admin/posts.controller");
router.get("/posts", postsController.index);
router.get("/posts/create", postsController.create);
router.post("/posts", postsController.store);
router.get("/posts/:id/edit", postsController.edit);
router.put("/posts/:id", postsController.update);
router.delete("/posts/:id", postsController.delete);

const productsController = require("../app/controllers/admin/products.controller");
router.get("/products", productsController.index);
router.get("/products/create", productsController.create);
router.post("/products", productsController.store);
router.get("/products/:id/edit", productsController.edit);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);


module.exports = router;