/**
 * @desc 允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类。
 *      其实就是用一个对象或者数组记录一组状态，每个状态对应一个实现，实现的时候根据状态挨个去运行实现。
 * @author patric 2023.02.07
 */
declare class SuperMarry {
    currentState: string[];
    constructor();
    change(arr: Array<any>): void;
    go(): void;
    jump(): void;
    move(): void;
    shoot(): void;
    squat(): void;
}
export default SuperMarry;
