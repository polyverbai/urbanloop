export function generateRegistrationNumber(
  prefix: string,
  count: number
): string {

  const paddedNumber = count
    .toString()
    .padStart(6, "0");

  return `UL-${prefix}-${paddedNumber}`;

}