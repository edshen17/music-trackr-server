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
declare type UserData = {
    id?: string;
    token?: string;
};
export { IHttpRequest, UserData };
