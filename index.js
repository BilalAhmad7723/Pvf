let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
let mongoDb = require('./connection/db');
const StudentRoute = require('./routes/student/student_route');
const UniRoute = require('./routes/university/university_route');
const ContactRoute = require('./routes/contact/contact_route');
const AppointmentRoute = require('./routes/appointment/appointment_route');
const Blog = require('./routes/blog/blog_route');
const Payment = require('./routes/payment/payment');
const Faq = require('./routes/Faq/Faq_route');
require('dotenv').config()
const app = express();
mongoose.connect(mongoDb.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
console.log('Database connected!');
},
error => {
  console.log("Data Base Not Connected!", error);
}
)
app.use(cors());

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use('/uni', UniRoute);
app.use('/student', StudentRoute);
app.use('/contact', ContactRoute);
app.use('/appointment', AppointmentRoute);
app.use('/blog', Blog);
app.use('/payment',Payment);
app.use('/faq',Faq);
// --------------------------deployment------------------------------
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'));
})
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Connected on : ' + port)
})

app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});