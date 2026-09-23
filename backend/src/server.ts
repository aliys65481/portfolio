import { app } from "./app";
import { connectDatabase } from "./config";



const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(8000, () => {
            console.log("------ My Project is running successfully ------");
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }

}

startServer();