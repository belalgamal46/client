export const FirstLetterUpperCase = (string) => {
  const upperCaseString = string?.charAt(0)?.toUpperCase() + string?.slice(1);
  return upperCaseString.toString();
};
