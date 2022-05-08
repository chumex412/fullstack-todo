const express = require('express');
const Users = require('../models/users');
const router = express.Router();
const userRepo = require('../repository/users');

// Registration route
router.post('/register', async function(req, res) {
  const { name, email, password, admin } = req.body;

  const currentUser = await userRepo.create({ name, email, password, admin });

  Users.findOne({ email: email.toLowerCase() }, function(err, user) {

    if(user) {
      res.send({ success: false, message: 'User already exist' });
    } else {
      const newUser = new Users({ ...currentUser, tasks: [] });

      newUser.save(error => {
        if(error) {
          res.status(500).json({ message: 'An error occurred', error })
        } else {
          res.status(200).json({ success: true, message: 'User successfully registered' })
        }
      })
    }
  })
} )

// login route
router.post('/login', async function (req, res) {
  const { email, password } = req.body;

  Users.findOne({ email: email.toLowerCase() }, async function(err, user) {
    if(user) {
      const validPassword = await userRepo.comparePasswords(user.password, password);

      if(validPassword) {

        res.status(200).json({
          success: true, 
          message: 'Login successful',
          user: {
            userId: user._id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            tasks: user.tasks
          }
        })
      } else {
        res.json({
          success: false,
          message: 'Wrong login credentials'
        })
      }
    }
  })
});

router.get('/', async function(req, res) {
  try {
    const users = await Users.find();

    const usersData = users.map(user => {
      return {
        name: user.name,
        email: user.email,
        userId: user._id,
        admin: user.admin,
        tasks: user.tasks
      }
    })

    res.status(200).json({
      success: true,
      message: 'All users successfully retrieved',
      users: usersData
    })
  } catch(err) {
    res.json({
      success: false,
      message: 'Unable to retrieve list of users'
    })
  }
})

// Get task
router.get('/user/:id', async function(req, res) {
  const { id } = req.params;

  await Users.findById({ _id: id }, function (err, user) {
    if(err) {
      res.json({ 
        success: false, 
        message: 'Failed to retrieve your task, check your network', 
        error: err 
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Task retrieved successfully',
        tasks: user.tasks
      })
    }
  }).clone()
})

// Add task to user account
router.put('/user/add-task/:id', async function(req, res) {
  const { id } = req.params;

  await Users.findById({ _id: id }, function (err, user) {
    
    if(err) {
      res.json({ success: false, error: err })
    } else {
      user.tasks.push(req.body);

      user.save(function (error) {
        if(error) {
          res.json({ success: false, error })
        } else {
          
          res.status(200).json({
            success: true, 
            message: 'Task added successfully',
            tasks: user.tasks
          })
        }
      })
    }
  }).clone()
})

// Update task item as completed
router.put('/user/task-update/:id', async function(req, res) {
  const { id } = req.params;

  await Users.findById({ _id: id }, function (err, user) {
  
    if(err) {
      res.json({ success: false, error: err, message: 'Failed to update task' })
    } else {
      user.tasks = req.body;

      user.save(function(error) {
        if(error) {
          res.json({ success: false, error, message: 'Failed to update task' })
        } else {
          res.status(200).json({
            success: true, 
            message: 'Task updated successfully',
            tasks: user.tasks
          })
        }
      })
    }
  }).clone()
}) 

// Remove user selected task
router.put('/user/remove-task/:id', async function(req, res) {
  const { id } = req.params;

  await Users.findById({ _id: id }, function (err, user) {
    if(err) {
      res.json({ success: false, error: err, message: 'Failed to remove task' })
    } else {
      user.tasks = req.body;

      user.save(function(error) {
        if(error) {
          res.json({ success: false, error, message: 'Failed to remove task' })
        } else {
          res.status(200).json({
            success: true, 
            message: 'Task removed successfully',
            tasks: user.tasks
          })
        }
      })
    }
  }).clone()
}) 

module.exports = router;