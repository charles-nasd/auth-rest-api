import { ROLES } from "../enum/roles";

const USERS = [
	{
		name: "Chinwendu Ekeh",
		email: "super_admin@gmail.com",
		password: "password",
		role: ROLES.super_admin,
	},
	{
		name: "Emeka Okezie",
		email: "admin@gmail.com",
		password: "password",
		role: ROLES.admin,
	},
	{
		name: "Ikechukwu Dijeh",
		email: "issuer@gmail.com",
		password: "password",
		role: ROLES.issuer,
	},
	{
		name: "Charles Ejiegbu",
		email: "investor@gmail.com",
		password: "password",
		role: ROLES.investor,
	},
	{
		name: "Christian Owazie",
		email: "broker@gmail.com",
		password: "password",
		role: ROLES.broker,
	},
	{
		name: "Chinedum Unor",
		email: "dda@gmail.com",
		password: "password",
		role: ROLES.dda,
	},
	{
		name: "Mercy Johnson",
		email: "trustee@gmail.com",
		password: "password",
		role: ROLES.trustee,
	},
];

export default USERS;
