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

class Admin {
  name: string;
  viewPage: string[];

  constructor() {
    this.name = "管理员"
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
  }
}

class NormalUser {
  name: string
  viewPage: string[]

  constructor() {
    this.name = '普通用户'
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
  }
}

class SuperAdmin {
  name: string;
  viewPage: string[];

  constructor() {
    this.name = "超级管理员"
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
  }
}

class UserFactory {
  role: string

  constructor(role: string) {
    this.role = role
  }

  public getRole() {

    interface RoleList {
      Admin: () => Admin
      NormalUser: () => NormalUser
      SuperAdmin: () => SuperAdmin
      [index: string]: any
    }

    const roleList: RoleList = {
      'Admin': () => new Admin(),
      'NormalUser': () => new NormalUser(),
      'SuperAdmin': () => new SuperAdmin(),
    }

    if (roleList[this.role]) {
      return roleList[this.role]()
    }

    return {}
  }
}

export default UserFactory