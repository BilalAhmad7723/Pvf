let express = require('express');
let router = express.Router();

let appointmentSchema = require('./appointment_schema');

router.route('/get-appointment').get((req, res, next) => {
  appointmentSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data)
      }
    })
})

router.route('/book-appointment').post((req, res, next) => { //Add uni
    appointmentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Your appointment has been Booked Please come visit on your selected time!",
        status: 200,
        data:data
      });
    }
  })
});


router.route('/edit-appointment/:id').get((req, res, next) => {
    appointmentSchema.findById(req.params.id, (error, data) => {
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

router.route('/update-appointment/:id').put((req, res, next) => {
    appointmentSchema.findByIdAndUpdate(req.params.id, {
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
        data,
      });
    }
  })
})

router.route('/delete-appointment/:id').delete((req, res, next) => {
    console.log(req)
    appointmentSchema.findByIdAndRemove(req.params.id, (error, data) => {
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