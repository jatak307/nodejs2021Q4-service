import jwt from 'jsonwebtoken';
import { Context } from "koa";
import { config } from '../../common/config';
import { User } from "../../entity/user.model";

const basicAuth = async (ctx: Context) => {
  const JWT_SECRET_KEY = { config };
  try {
    const { password } = ctx.request.body
    if (!ctx.request.body.login && !password) {
      ctx.body = 'Who you are?';
      ctx.status = 401;
    }

    const userTarget = await User.findOne({ name: ctx.request.body.login })
    if (userTarget) {
      const { id, login } = userTarget;
      const jwtToken = jwt.sign(
        {
          id,
          login
        },
        JWT_SECRET_KEY as unknown as string
      );
      ctx.status = 201;
      ctx.body = {
        token: jwtToken
      }
    } else {
      ctx.status = 403;
      ctx.body = "User not Found";
    }

  }
  catch (err) {
    console.log(err);
  }
};

export {
  basicAuth
}