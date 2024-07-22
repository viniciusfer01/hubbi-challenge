const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/event");
const { checkAuth } = require("../util/auth");
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require("../util/validation");

const router = express.Router();

router.get("/characters", async (req, res, next) => {
  res.json({ message: "Characters" });
  // const data = req.body;
  // console.log(data);
  // console.log(req.token);
  // try {
  //   const charData = await fetch("https://swapi.dev/api/people/");
  //   res.json({ charData });
  // } catch (error) {
  //   next(error);
  // }
});

router.use(checkAuth);

router.get("/ships/:id", async (req, res, next) => {
  const shipId = req.params.id;

  console.log(req.token);
  try {
    const shipData = (await fetch(`https://swapi.dev/api/starships/${shipId}`))
      .json()
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  } catch (error) {
    next(error);
  }
});

// router.get("/ships/:id", async (req, res, next) => {
//   console.log(req.token);
//   const data = req.body;

//   let errors = {};

//   if (!isValidText(data.title)) {
//     errors.title = "Invalid title.";
//   }

//   if (!isValidText(data.description)) {
//     errors.description = "Invalid description.";
//   }

//   if (!isValidDate(data.date)) {
//     errors.date = "Invalid date.";
//   }

//   if (!isValidImageUrl(data.image)) {
//     errors.image = "Invalid image.";
//   }

//   if (Object.keys(errors).length > 0) {
//     return res.status(422).json({
//       message: "Adding the event failed due to validation errors.",
//       errors,
//     });
//   }

//   try {
//     await add(data);
//     res.status(201).json({ message: "Event saved.", event: data });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
