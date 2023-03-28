import { sign } from "jsonwebtoken";

const createAccessToken = (email: string, role: string) => {
	return sign({ email: email, role: role }, process.env.ACCESS_TOKEN_SECRET!, {
		expiresIn: "1d",
	});
};

export default createAccessToken;
