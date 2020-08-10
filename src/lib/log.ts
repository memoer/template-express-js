export default (type: 'database' | 'server', text: string): string => {
  const str = `${type.toUpperCase()}\t| ${text}`;
  console.log(str);
  return str;
};
