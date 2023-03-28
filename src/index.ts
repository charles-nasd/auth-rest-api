import express, { Application } from "express";

const app: Application = express();

app.use(express.json()); // Parse incoming request body to JSON

const startServer = (port: string) => {
	try {
		app.listen(port, (): void => {
			console.log("Server is running successfully 🚀");
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

startServer(process.env.PORT ?? "4000");
