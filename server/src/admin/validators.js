const { check } = require('express-validator')

module.exports = {
  requireEmail: (
    check('email')
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage('Must be a valid email')
      .custom(async function(email) {

      })
  ),
  requirePassword: (
    check('password')
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password be between 8 and 20")
  ),
  requireConfirmPassword: (
    check('confirm_password')
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password be between 8 and 20")
      .custom(async function(confirm_password, {req}) {
        if(confirm_password !== req.body.password) {
          throw new Error ("Passwords must match")
        }
      })
  )
}