export const resetReferenceOfObject = <T>(data: T): T =>
    JSON.parse(JSON.stringify(data));
  