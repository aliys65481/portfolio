import { Request,Response,NextFunction, response } from "express"


const responseHandler = function<T>(res:Response,data:T,status:number,message:string,errors:[]){
    return res.status(status).json({
        message,
        results:data,
        nextPage:false,
        success:status >= 200 && status < 300, 
        errors:errors
    })
}

const customResponseMidlleware = (req:Request,res:Response,next:NextFunction)=>{
    res.jsonResponse = function<T>(data:T,status=200,message="Request complete successfully",errors:[]){
        return responseHandler(res,data,status,message,errors)
    }
    next()
}
export {
    customResponseMidlleware
}