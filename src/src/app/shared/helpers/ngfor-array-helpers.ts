export function asArray(range: number): number[] {
  return Array(range).fill(0).map((_, index) => index);
}
