import { NextFunction, Request, Response } from "express";
import { type ObjectSchema } from "joi";

export const validationMiddleware = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate({...req.body,...req.params,...req.query});
    if (error) {
      res.jsonResponse([], 400, `Invalid request`, error.details.map((item) => item.message));

      return;
    }
    // I add this line because it will reassign clean value on request body .
    req.body = value;
    next();
  };
};
