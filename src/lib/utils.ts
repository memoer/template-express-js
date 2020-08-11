export function sleep(ms: number): Promise<unknown> {
  return new Promise((res) => setTimeout(res, ms));
}

export function log(type: 'database' | 'server', text: string): string {
  const str = `${type.toUpperCase()}\t| ${text}`;
  console.log(str);
  return str;
}
