import { NextResponse } from "next/server";

export const createResponse = <JSONBody>(result: JSONBody) =>
  NextResponse.json({ result });

export const createErrorResponse = (
  message: string,
  status: number
): NextResponse => NextResponse.json({ error: message }, { status });

export const createOKResponse = () => createResponse("ok");

export const createInternalServerErrorResponse = () =>
  createErrorResponse("Internal Server Error", 500);

export const createUnauthenticatedErrorResponse = () =>
  createErrorResponse("Not authenticated", 401);

export const createNotFundedErrorResponse = (message: string = "Not funded") =>
  createErrorResponse(message, 404);

export const createBadRequestErrorResponse = (
  message: string = "Bad request"
) => createErrorResponse(message, 400);
