const express = require("express");
const router = express.Router();
const todo = require("../controllers/todo");

router.get("/", todo.getItems);

router.post("/", todo.addItem);

router.delete("/", todo.deleteItem);

router.put("/", todo.editItem);

module.exports = router;
