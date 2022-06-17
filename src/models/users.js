const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false
  },
  doAt: {
    type: Date,
    default: Date.now()
  }
});

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  password: String,
  admin: Boolean,
  tasks: [TaskSchema]
});

module.exports = mongoose.model('user', UserSchema);

