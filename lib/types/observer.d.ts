/**
 * @desc 观察者模式又叫做发布-订阅模式。这是一种一对多的对象依赖关系，当被依赖的对象的状态发生改变时，所有依赖于它的对象都将得到通知。
 *
 * @author patric 2023.02.08
 */
declare class Observer {
    oerderlist: Record<string, any>;
    constructor();
    listen(id: string, info: unknown): void;
    publish(id: string): void;
    remove(id: string, info: unknown): void;
}
export default Observer;
