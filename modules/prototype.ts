/**
 * @desc 用原型实例指向创建对象的类，使用于创建新的对象的类的共享原型的属性与方法。
 * @author patric patric 2023.02.07
 */

class Prototype {
  public getSex(userSex: string) {
    return userSex
  }

  public getAge(userAge: string) {
    return userAge
  }
}

// es5
// function Prototype() { }

// Prototype.getSex = function (userSex) {
//   return userSex
// }

// Prototype.prototype.getAge = function (userAge) {
//   return userAge
// }

export default Prototype
