import express from 'express';
import router from "./src/routes/route";
import Topic from "./src/DB/DB_config";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/", router)

//DB연결 확인코드
try {
    Topic.sync()
    console.log("Database successfully connected");
} catch (error) {
    console.log("error: ", error);
    console.log("Database connect failed");
}

app.listen(3000, () => {
    console.log("connect to port 3000");
});