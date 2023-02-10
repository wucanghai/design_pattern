/**
 * @desc 在内存中仅会创建一次对象的设计模式
 * @author patric 2023.02.07
 *
 *
 */

class Singleton {
  static singleton: Singleton

  static getSingleton() {
    if (Singleton.singleton) {
      return Singleton.singleton
    }

    return (Singleton.singleton = new Singleton())
  }
}

export default Singleton
