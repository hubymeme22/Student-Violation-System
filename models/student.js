import mongoose from "mongoose";
const Schema = mongoose.Schema

// defining properties of student
const studentSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  adviser: {
    type: String,
    required: true
  },
  studentDetails: {
    contact: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    sex: {
      type: String,
      required: true,
      enum: ['Male', 'Female', 'Other']
    },
    fullName: {
      first: {
        type: String,
        required: true
      },
      middle: {
        type: String
      },
      last: {
        type: String,
        required: true
      }
    },
    familyContact: {
      fatherFullName: {
        type: String,
        required: true
      },
      fatherContactNumber: {
        type: String,
        required: true
      },
      motherFullName: {
        type: String,
        required: true
      },
      motherContactNumber: {
        type: String,
        required: true
      },
      guardianFullName: {
        type: String,
        required: true
      },
      guardianContactNumber: {
        type: String,
        required: true
      }
    }
  },
  violations: [{
    category: {
      type: String,
      required: true,
      enum:[] // still to be added based on request.
    },
    specific: {
      type: String,
      required: true,
    //   enum:[] //add if needed
    }
  }],
},{ timestamps: true });

const Student = mongoose.model('Student', studentSchema);
export default Student;
