const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function getUsers (req, res) {
    User.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
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
        lastName: req.body.lastName,
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
        lastName: req.body.lastName,
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

function login (req, res){

}
async function register(req,res){

    // Our register logic starts here
  try {
    // Get user input
    const { alias, firstname, lastName, mail, password } = req.body;

    // Validate user input
    if (!(mail && password && firstname && lastName && alias)) {
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
        lastName,
        alias,
        mail: mail.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user.id, mail },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    user.save();

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }

}
module.exports = {
    getUsers, getUser, postUser, putUser, deleteUser, register, login,
}
