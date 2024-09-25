class AppError extends Error {
  public statusCode: number;
  constructor(status: number, message: string, stack = '') {
    super(message);
    this.statusCode = status;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
