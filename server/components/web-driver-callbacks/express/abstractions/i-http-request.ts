import { Request } from 'express';

interface IHttpRequest {
  body: Request['body'];
  path: Request['path'];
  query: Request['query'];
  params: Request['params'];
  headers: Request['headers'];
  cookies: Request['cookies'];
  userData: UserData;
  req: Request;
}

// For more complex applications that use auth tokens
type UserData = {
  id?: string;
  token?: string;
};

export { IHttpRequest, UserData };
