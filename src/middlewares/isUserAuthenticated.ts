import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isUserAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;

  if (!token) {
    throw new Error("Não autorizado.");
  }

  const [, authToken] = token.split(" ");

  try {
    const { sub } = verify(authToken, process.env.SECRET as string) as Payload;

    req.userId = sub;

    return next();
  } catch (error) {
    next(error);
  }
}
