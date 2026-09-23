import mongoose from "mongoose";
async function connectDatabase() {
    const mongoConnectionUrl = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}?authSource=${process.env.MONGODB_AUTH_SOURCE}`
    
    await mongoose.connect(mongoConnectionUrl);
}
export {connectDatabase};

// mongodb://admin:admin@localhost:27017/?authSource=admin