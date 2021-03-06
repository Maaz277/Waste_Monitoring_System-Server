module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  router.post("/add", (req,res)=>{

    // const info = new Info({
    //     _id: new mongoose.Types.ObjectId(),
    //     type: req.body.type,
    //     depot: req.body.depot
    // })
    // info.save()
    // .then(result => {
    //     console.log(result)
    //     res.status(201).json({
    //         message: "Info added for this product",
    //         Info: result
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json({
    //         error: err
    //     })
    // })

    res.status(201).send({
      message: "success"
    })
  });

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  app.use("/api", router);
};
