export const getNamedAvatar = (name: string): string | null => {
  if (typeof name !== "string") return null;
  return name.slice(0, 1).toUpperCase();
};
