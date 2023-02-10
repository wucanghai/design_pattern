/**
 * @desc 适配器模式是用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式，实现两个接口正常协作
 * @author patric 2023.02.07
 *
 * @class Adaper
 */
declare class Adaper {
    type: string;
    constructor(type: string);
    init(): any;
}
export default Adaper;
