export function asArray(range: number): number[] {
  return Array(range).fill(0).map((_, index) => index);
}

export function isString(something: any): boolean {
  if (something === undefined || something === null) {
    return false;
  }

  return typeof something === 'string';
}

export function asString(something: any): string | undefined {
  return isString(something) ? something as string : undefined;
}

