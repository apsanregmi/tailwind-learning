// models/signup.js

import mongoose from 'mongoose';
import validator from 'validator';

const SignupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format',
    },
  },
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subscribeNewsletter: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
const SignupModel = mongoose.models.Signup || mongoose.model('Signup', SignupSchema);

export default SignupModel;
