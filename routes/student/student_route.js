let express = require('express');
let router = express.Router();

let studentSchema = require('./student_schema');

router.route('/get_student').get((req, res, next) => {
  studentSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data);
      }
    })
})

router.route('/get-auth').post((req, res, next) => {
  const {user,password} = req.body;
  studentSchema.findOne({'user': user},(error, data) => {
      if (error) {
        return next(error)
      } else {
        if(user === data.user && password === data.password)
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

router.route('/add-student').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Student Register Successfully",
        data:data
      });
    }
  })
});


router.route('/edit-student/:id').get((req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
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

router.route('/search-active').get((req, res, next) => {
  studentSchema.find({ status: true } , (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data)
  }
})
})
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      res.status(404).json({
        message: "Sorry your student does not updated yet!",
        error: err.message,
      });
      return next(error);
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({
        message: "Cheers!! You have successfully Update Student",
        data,
      });
    }
  })
})

router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
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