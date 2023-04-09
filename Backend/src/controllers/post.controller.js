const express=require("express")

const router= express.Router();

const Post=require("../models/post.model")

router.post("", async function (req, res) {
    try {
      const data = await Post.create(req.body);
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("", async function (req, res) {
    try {
      const data= await Post.find().populate().lean().exec();
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const user = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  router.delete("", async function (req, res) {
    try {
      const data= await Post.deleteMany()
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;
  