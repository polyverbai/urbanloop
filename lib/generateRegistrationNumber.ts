export default function generateRegistrationNumber(
  prefix: string,
  sequenceNumber: number
): string {
  const paddedNumber = sequenceNumber
    .toString()
    .padStart(6, "0");

  return `UL-${prefix}-${paddedNumber}`;
}