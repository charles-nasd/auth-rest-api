import { Request, Response } from "express";
import createAccessToken from "../middlewares/createAccessToken";
import UserModel from "../models/userModel";
import getUserByEmail from "../services/userService";

type TResquestBody = {
	email: string;
	password: string;
};

const loginUser = async (req: Request, res: Response) => {
	const { email, password }: TResquestBody = req.body;

	try {
		if (!email || !password) {
			throw new Error("Please provide the required credentials!");
		}

		const user = await getUserByEmail(email);

		console.log("User data >>", user);
		res.sendStatus(201);
	} catch (error) {
		console.error(error);
		res.sendStatus(402);
	}
};

export default loginUser;
