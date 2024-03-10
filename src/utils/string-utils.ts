export const formatTimeDuration = (input: string) => {
  const hoursMatch = input.match(/(\d+)h/);
  const minutesMatch = input.match(/(\d+)m/);

  const hours = hoursMatch ? `${hoursMatch[1]} hours` : '';
  const minutes = minutesMatch
    ? `${minutesMatch[1]} minutes`
    : '';

  return `${hours} ${minutes}`.trim();
};
