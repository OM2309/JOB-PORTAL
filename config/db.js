import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to MongoDB successfully 🙏')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
  }
}

export default connectDB
