const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const db = require("../config/db");


// ================= REGISTER =================

exports.register = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role
    } = req.body;


    const hashedPassword =
    await bcrypt.hash(password, 10);


    const query = `
      INSERT INTO company_admins
      (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `;


    db.query(

      query,

      [
        name,
        email,
        hashedPassword,
        role
      ],

      (error, result) => {

        if (error) {

          return res.status(500).json({
            message:
            "Registration Failed",
            error
          });

        }


        res.status(201).json({

          message:
          "Admin Registered Successfully"

        });

      }

    );

  }

  catch (error) {

    res.status(500).json({
      message:
      "Server Error"
    });

  }

};


// ================= LOGIN =================

exports.login = (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;


    const query = `
      SELECT *
      FROM company_admins
      WHERE email = ?
    `;


    db.query(

      query,

      [email],

      async (error, results) => {

        if (error) {

          return res.status(500).json({
            message:
            "Server Error"
          });

        }


        if (results.length === 0) {

          return res.status(401).json({
            message:
            "Invalid Email"
          });

        }


        const user = results[0];


        const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );


        if (!isMatch) {

          return res.status(401).json({
            message:
            "Invalid Password"
          });

        }


        const token =
        jwt.sign(

          {
            id: user.id,
            role: user.role
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "1d"
          }

        );


        res.status(200).json({

          message:
          "Login Successful",

          token,

          user: {

            id: user.id,

            name: user.name,

            email: user.email,

            role: user.role

          }

        });

      }

    );

  }

  catch (error) {

    res.status(500).json({
      message:
      "Server Error"
    });

  }

};