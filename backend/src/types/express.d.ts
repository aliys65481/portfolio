import "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Response {
    jsonResponse<T>(
      data: T,
      status?: number,
      message?: string,
      errors?:(string|number)[]
    ): Response;
  }
}