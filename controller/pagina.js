const No = require("../model/No");

const getAll = async (req, res) => {
  const group = await No.find();
  res.render("index", { group });
};

const admin = async (req, res) => {
  const group = await No.find();
  res.render("admin", { group, no: null, noDel: null });
};

const createNo = async (req, res) => {
  const no = req.body;
  await No.create(no);
  res.redirect("/admin");
};

const pageno = async (req, res) => {
  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    no = await No.findByIdAndUpdate({ _id: id });
    const group = await No.find();
    res.render("nopage", { group, no });
  }
};

const editOrDelete = async (req, res) => {
  const { id, action } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    no = await No.findByIdAndUpdate({ _id: id });
    const group = await No.find();
    if (action == "edit") {
      res.render("admin", { group, no, noDel: null });
    } else {
      res.render("admin", { group, no: null, noDel: no });
    }
  }
};

const updateNo = async (req, res) => {
  const newNo = req.body;
  await No.updateOne({ _id: req.params.id }, newNo);
  res.redirect("/admin");
};

const deleteNo = async (req, res) => {
  await No.deleteOne({ _id: req.params.id });
  res.redirect("/admin");
};

module.exports = {
  getAll,
  admin,
  createNo,
  pageno,
  editOrDelete,
  updateNo,
  deleteNo,
};
