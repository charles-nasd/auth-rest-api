import { ROLES } from "../enum/roles";

const USERS = [
	{
		name: "Shaun Murphy",
		email: "admin@gmail.com",
		password: "password",
		role: ROLES.admin,
	},
	{
		name: "Steve Jobless",
		email: "issuer@gmail.com",
		password: "password",
		role: ROLES.issuer,
	},
	{
		name: "Gill Bates",
		email: "investor@gmail.com",
		password: "password",
		role: ROLES.investor,
	},
	{
		name: "Mionel Lessi",
		email: "broker@gmail.com",
		password: "password",
		role: ROLES.broker,
	},
	{
		name: "Ristiano Conaldo",
		email: "dda@gmail.com",
		password: "password",
		role: ROLES.dda,
	},
];

export default USERS;
