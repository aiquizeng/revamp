const isDevelopment = import.meta.env.DEV

class Logger {
  log(message, ...args) {
    if (isDevelopment) {
      console.log(message, ...args)
    }
  }

  warn(message, ...args) {
    if (isDevelopment) {
      console.warn(message, ...args)
    }
  }

  error(message, ...args) {
    console.error(message, ...args)
  }

  debug(message, ...args) {
    if (isDevelopment) {
      console.debug(message, ...args)
    }
  }
}

export const logger = new Logger()