import Router from "@koa/router";
import { basicAuth } from "./auth.service";

export const routerLogin = new Router;

routerLogin.post('/login', async (ctx) => {
  await basicAuth(ctx);
});
