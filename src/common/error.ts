const errorHundler = async (ctx: { status: number; body: { message: string; }; }, next: () => unknown) => {
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