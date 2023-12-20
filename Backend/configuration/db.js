import mongoose from "mongoose"

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_String);
        console.info('Connected to', mongoose.connection.name)
    } catch (error) {
        console.error(error)
    }
}