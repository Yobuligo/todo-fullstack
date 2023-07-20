export const pathToTable = (path: string): string => {
  if (path.startsWith("/")) {
    return path.trimStart();
  }
  return path;
};
