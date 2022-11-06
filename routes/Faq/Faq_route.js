let express = require('express');
let router = express.Router();

let FaqSchema = require('./Faq_schema');

router.route('/get-faq').get((req, res, next) => {
  FaqSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data)
      }
    })
})

router.route('/add-faq').post((req, res, next) => {
  FaqSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Your Question saved Successfully!",
        status: 200,
        data:data
      });
    }
  })
});


router.route('/edit-faq/:id').get((req, res, next) => {
  FaqSchema.findById(req.params.id, (error, data) => {
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

router.route('/update-faq/:id').put((req, res, next) => {
  console.log("update Faq")
  FaqSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      res.status(404).json({
        message: "Sorry your faq list cannot be added",
        error: err.message,
      });
      return next(error);
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You have successfully Update faq",
        data:data,
      });
    }
  })
})

router.route('/delete-faq/:id').delete((req, res, next) => {
  FaqSchema.findByIdAndRemove(req.params.id, (error, data) => {
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