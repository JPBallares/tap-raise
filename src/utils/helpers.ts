export function splitString(str: string, length: number): string[] {
  const arr = str.split('', length);
  while (arr.length < length) {
    arr.push('');
  }
  return arr;
}
