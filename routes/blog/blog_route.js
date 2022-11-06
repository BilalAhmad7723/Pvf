let express = require('express');
let router = express.Router();

let blogSchema = require('./blog_schema');

router.route('/get-blog').get((req, res, next) => {
  blogSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data)
      }
    })
})
router.route('/add-blog').post((req, res, next) => { //Add uni
  blogSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You Add new Blog Successfully!",
        status: 200,
        data:data
      });
    }
  })
});


router.route('/edit-blog/:id').get((req, res, next) => {
  blogSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! here is id",
        data,
      });
    }
  })
})

router.route('/update-blog/:id').put((req, res, next) => {
  blogSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      res.status(404).json({
        message: "Sorry your Blog cannot be added",
        error: err.message,
      });
      return next(error);
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You have successfully Update Blog",
        data,
      });
    }
  })
})

router.route('/delete-blog/:id').delete((req, res, next) => {
  blogSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        msg: data
      })
    }
  })
})


module.exports = router;