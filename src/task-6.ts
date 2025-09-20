function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const num = getFirstElement<number>([1, 2, 3]);
const str = getFirstElement<string>(["a", "b", "c"]);
const bool = getFirstElement<boolean>([true, false, true]);
const mixed = getFirstElement<number | string>([1, "b", 3]);

console.log(num);
console.log(str);
console.log(bool);
console.log(mixed);