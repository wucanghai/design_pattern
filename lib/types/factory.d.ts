/**
 * @author patric 2023.02.07
 * @desc
 *  工厂模式 用于定义创建对象的一系列接口 ，这个接口由实例决定定义哪一个类 ，
 *  该模式用使用一个类实例化延迟到了子类，子类来重写接口指定自己的抽象类
 *
 * @class UserFactory
 * @constructor
 *
*/
declare class UserFactory {
    role: string;
    constructor(role: string);
    getRole(): any;
}
export default UserFactory;
