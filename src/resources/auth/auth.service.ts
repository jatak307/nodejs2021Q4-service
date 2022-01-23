import { Context } from "koa";

const basicAuth = (ctx: Context) => {
  try {
    console.log('success');
  } catch (error) {
    console.log(error);
  }
};

export {
  basicAuth
}