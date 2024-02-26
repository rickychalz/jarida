import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler";

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";

//Routes
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

dotenv.config();
connectDB();
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: false,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is live");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
