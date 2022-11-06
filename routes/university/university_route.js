let express = require('express');
let router = express.Router();

let uniSchema = require('./university_schema');
let contrySchema = require('./country_schema');

router.route('/get-university').get((req, res, next) => {
  console.log("Get University")
  uniSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data)
      }
    })
})

router.route('/get-auth').post((req, res, next) => {
  const {email,password} = req.body;
  uniSchema.findOne({'email': email},(error, data) => {
      if (error) {
        return next(error)
      } else {
        if(email === data.email && password === data.password)
        {
          res.set('Access-Control-Allow-Origin', '*');
         res.json({
          message: "Login Successfuly!",
          status: 200,
          data:data
         }) 
        }
        else {
          res.set('Access-Control-Allow-Origin', '*');
          res.json({
            message: "Wrong email & password!",
            status: 205,
            data:data
          })
        }
      }
    })
    
})



router.route('/add-university').post((req, res, next) => { //Add uni
  uniSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You Add new University Successfully!",
        status: 200,
        data:data
      });
    }
  })
});


router.route('/edit-university/:id').get((req, res, next) => {
  uniSchema.findById(req.params.id, (error, data) => {
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

router.route('/update-university/:id').put((req, res, next) => {
  uniSchema.findByIdAndUpdate(req.params.id, {
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

router.route('/delete-university/:id').delete((req, res, next) => {
  uniSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
// -------------------------------------------------------------
router.route('/get-country').get((req, res, next) => {
  contrySchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data)
      }
    })
})


router.route('/add-country').post((req, res, next) => { //Add uni
  contrySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You Add new Country Successfully!",
        status: 200,
        data:data
      });
    }
  })
});

router.route('/delete-country/:id').delete((req, res, next) => {
  contrySchema.findByIdAndRemove(req.params.id, (error, data) => {
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
router.route('/edit-country/:id').get((req, res, next) => {
  contrySchema.findById(req.params.id, (error, data) => {
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

router.route('/update-country/:id').put((req, res, next) => {
  contrySchema.findByIdAndUpdate(req.params.id, {
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

module.exports = router;