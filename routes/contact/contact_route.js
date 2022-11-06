let express = require('express');
let router = express.Router();

let contactSchema = require('./contact_schema');

router.route('/get-contact').get((req, res, next) => {
  console.log("api callas conract")
  contactSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data)
      }
    })
})

router.route('/add-contact').post((req, res, next) => { //Add uni
    contactSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Your message send to administartor please wait for the responce!",
        status: 200,
        data:data
      });
    }
  })
});


router.route('/edit-contact/:id').get((req, res, next) => {
    contactSchema.findById(req.params.id, (error, data) => {
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

router.route('/update-contact/:id').put((req, res, next) => {
    contactSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      res.status(404).json({
        message: "Sorry your todo list cannot be added",
        error: err.message,
      });
      return next(error);
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You have successfully Update university",
        data:data,
      });
    }
  })
})

router.route('/delete-contact/:id').delete((req, res, next) => {
    contactSchema.findByIdAndRemove(req.params.id, (error, data) => {
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