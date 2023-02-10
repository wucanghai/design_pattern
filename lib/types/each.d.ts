/**
 * @desc 一个相对简单的模式，目前绝大多数语言都内置了迭代器，以至于大家都不觉得这是一种设计模式
 *
 * @author patric 2023.02.07
 */
type callback<T extends string | number> = (val: T, index?: number, list?: T[]) => void | boolean | number;
declare function each<T extends number | string>(list: T[], callback: callback<T>): false | undefined;
declare function map<T extends number>(list: T[], callback: callback<T>): (number | boolean | void)[];
export { each, map };
