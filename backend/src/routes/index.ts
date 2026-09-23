import { Router } from "express"
import projectRouter from "../modules/projects/projects.routes"
import authRouter from "../modules/auth/auth.routes"
import collabrationRouter from "../modules/collabration/collabration.routes"



const apiRouter = Router()
apiRouter.use("/projects",projectRouter)
apiRouter.use("/auth",authRouter)
apiRouter.use("/collabration",collabrationRouter)

export default apiRouter