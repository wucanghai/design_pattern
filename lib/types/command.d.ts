/**
 * @desc 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令
 * @author patric 2023.02.07
 */
declare class MacroCommand {
    commandList: any[];
    constructor();
    add(commnd: any): void;
    execute(): void;
}
export default MacroCommand;
