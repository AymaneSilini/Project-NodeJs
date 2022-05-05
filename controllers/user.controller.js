const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

function getUsers (req, res) {
    User.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
    //get the logged user from the token
    console.log(req.user);
}
function getUser (req, res) {
    User.findOne({userId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`User id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postUser (req, res) {
    if (!req.body.alias) {
        return res.status(400).send('Missing User\'s alias');
    }
    const user = new User({
        alias:req.body.alias,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        alias : req.body.alias,
        password: req.body.password,
        mail: req.body.mail
    });
    user.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putUser (req, res) {
    if (!req.body.alias) {
        return res.status(400).send('Missing User\'s alias');
    }
    User.findOneAndUpdate({userId: req.params.id}, {
        name:req.body.name,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        alias : req.body.alias,
        password: req.body.password,
        mail: req.body.mail
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteUser (req, res) {
    User.findOneAndDelete({userId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

async function login (req, res){

    // Our login logic starts here
  try {
    // Get user input
    const { mail, password } = req.body;

    // Validate user input
    if (!(mail && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ mail });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { _id: user._id, mail, userIid: user.userId},
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      user.save();
      // user
      res.status(200).json(user);
      res.send(`mail: ${mail} password: ${password}`);
    }
    else {
        res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
}






async function register(req,res){

    // Our register logic starts here
  try {
    // Get user input
    const { alias, firstname, lastname, mail, password } = req.body;

    // Validate user input
    if (!(mail && password && firstname && lastname && alias)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ mail });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
        firstname,
        lastname,
        alias,
        mail: mail.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { _id: user._id, mail, userIid: user.userId },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    user.save();


    //emailer 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nodejstestlp@gmail.com',
          pass: 'nodejstestlp38'
        }
      });
      
      var mailOptions = {
        from: 'nodejstestlp@gmail.com',
        to: user.mail,
        subject: 'Registration email',
        text: 'GG ' + user.alias + ', your account have been successfully created with this email : ' + user.mail
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }

}
module.exports = {
    getUsers, getUser, postUser, putUser, deleteUser, register, login,
}
