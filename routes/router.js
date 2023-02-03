const express = require("express");
const router = express.Router();

const pageprincipal = require("../controller/pagina");

router.get("/", pageprincipal.getAll);
router.get("/admin", pageprincipal.admin);
router.post("/create", pageprincipal.createNo);
router.get("/page/:id", pageprincipal.pageno);
router.get("/by/:id/:action", pageprincipal.editOrDelete);
router.post("/update/:id", pageprincipal.updateNo);
router.get("/delete/:id", pageprincipal.deleteNo);

module.exports = router;