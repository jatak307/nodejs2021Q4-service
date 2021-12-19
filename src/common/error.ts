type ErrorHundler = (
  ctx: {
    status: number;
    body: {
      message: string;
    };
  }, 
  next: () => unknown
) => Promise<void>;

const errorHundler: ErrorHundler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const error = err as Error;
    ctx.status = 500;
    ctx.body = {
      message: error.message
    };
  }
};

export {
  errorHundler
}