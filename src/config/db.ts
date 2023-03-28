import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async (): Promise<void> => {
	const { MONGO_URI, DATABASE_NAME } = process.env;

	try {
		if (MONGO_URI) {
			await mongoose.connect(MONGO_URI, {
				dbName: DATABASE_NAME,
			});

			console.log("Connected to MongoDB successfully 🚀");
		} else {
			console.log("Could not read MONGO_URI:", MONGO_URI);
		}
	} catch (error) {
		console.error("Failed to connect to DB with error: ", error);
	}
};
