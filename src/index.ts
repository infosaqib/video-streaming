import express, { Application, Request, Response } from "express";

const app: Application = express();

// Middleware
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
  res.status(200).send("Server running 🚀");
});

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
