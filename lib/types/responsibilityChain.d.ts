/**
 *
 * @desc 类似多米诺骨牌, 通过请求第一个条件, 会持续执行后续的条件, 直到返回结果为止
 * @author patric 2023.02.03
 */
declare class Chain {
    fn: any;
    successor: any;
    constructor(fn: any);
    setNext(successor: any): void;
    init(orderType: number, pay: boolean): void;
}
export default Chain;
