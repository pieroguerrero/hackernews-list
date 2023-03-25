/**
 * Handles what to do with the Exceptions. E.g.: Store in a database, Sent an email, console to the log, etc
 */
export function handleException(error: unknown) {
  if (
    typeof error == "object" &&
    error !== null &&
    "name" in error &&
    typeof error.name === "string" &&
    "message" in error &&
    typeof error.message === "string" &&
    "stack" in error &&
    typeof error.stack === "string"
  ) {
    console.error({
      Exception: {
        Name: error.name,
        Message: error.message,
        StackTrace: error.stack,
      },
    });
  } else {
    console.error({ Error: error });
  }
}
