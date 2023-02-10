
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Pattern = {}));
})(this, (function (exports) { 'use strict';

    /**
     * @desc 在内存中仅会创建一次对象的设计模式
     * @author patric 2023.02.07
     *
     *
     */
    var Singleton = /** @class */function () {
      function Singleton() {}
      Singleton.getSingleton = function () {
        if (Singleton.singleton) {
          return Singleton.singleton;
        }
        return Singleton.singleton = new Singleton();
      };
      return Singleton;
    }();

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
    var Admin = /** @class */function () {
      function Admin() {
        this.name = "管理员";
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据'];
      }
      return Admin;
    }();
    var NormalUser = /** @class */function () {
      function NormalUser() {
        this.name = '普通用户';
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据'];
      }
      return NormalUser;
    }();
    var SuperAdmin = /** @class */function () {
      function SuperAdmin() {
        this.name = "超级管理员";
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理'];
      }
      return SuperAdmin;
    }();
    var UserFactory = /** @class */function () {
      function UserFactory(role) {
        this.role = role;
      }
      UserFactory.prototype.getRole = function () {
        var roleList = {
          'Admin': function () {
            return new Admin();
          },
          'NormalUser': function () {
            return new NormalUser();
          },
          'SuperAdmin': function () {
            return new SuperAdmin();
          }
        };
        if (roleList[this.role]) {
          return roleList[this.role]();
        }
        return {};
      };
      return UserFactory;
    }();

    /**
     * @desc 适配器模式是用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式，实现两个接口正常协作
     * @author patric 2023.02.07
     *
     * @class Adaper
     */
    var BaiduMap = /** @class */function () {
      function BaiduMap() {
        this.render();
      }
      BaiduMap.prototype.render = function () {
        console.log('渲染百度地图');
      };
      return BaiduMap;
    }();
    var GoogleMap = /** @class */function () {
      function GoogleMap() {
        this.render();
      }
      GoogleMap.prototype.render = function () {
        console.log('渲染google地图');
      };
      return GoogleMap;
    }();
    var TengXunMap = /** @class */function () {
      function TengXunMap() {
        this.render();
      }
      TengXunMap.prototype.render = function () {
        console.log('渲染腾讯地图');
      };
      return TengXunMap;
    }();
    var GaoDeMap = /** @class */function () {
      function GaoDeMap() {
        this.render();
      }
      GaoDeMap.prototype.render = function () {
        console.log('渲染高德地图');
      };
      return GaoDeMap;
    }();
    var Adaper = /** @class */function () {
      function Adaper(type) {
        this.type = type;
        this.init();
      }
      Adaper.prototype.init = function () {
        var renderType = {
          baidu: function () {
            return new BaiduMap();
          },
          google: function () {
            return new GoogleMap();
          },
          tengxun: function () {
            return new TengXunMap();
          },
          gaode: function () {
            return new GaoDeMap();
          }
        };
        if (renderType[this.type]) {
          return renderType[this.type]();
        }
        throw '未找到需要渲染的地图！';
      };
      return Adaper;
    }();

    /**
     * @desc 建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示
     * @author patric 2023.02.07
     */
    var User = /** @class */function () {
      function User(sex, age, skill, hobby) {
        this.sex = sex;
        this.age = age;
        this.skill = skill;
        this.hobby = hobby;
      }
      return User;
    }();
    var Work = /** @class */function () {
      function Work(work, workDesc) {
        this.work = work;
        this.workDesc = workDesc;
      }
      Work.prototype.changedWork = function (work) {
        this.work = work;
      };
      Work.prototype.changeWorkDesc = function (workDesc) {
        this.workDesc = workDesc;
      };
      return Work;
    }();
    var Person = function () {
      var _person = new User('男', 23, '写代码', '喝酒');
      _person.workInfo = new Work('工程师', '每天必须一杯咖啡');
      return _person;
    };
    var person1 = Person();
    console.log(person1);

    /**
     * @desc 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令
     * @author patric 2023.02.07
     */
    var MacroCommand = /** @class */function () {
      function MacroCommand() {
        this.commandList = [];
      }
      MacroCommand.prototype.add = function (commnd) {
        this.commandList.push(commnd);
      };
      MacroCommand.prototype.execute = function () {
        for (var _i = 0, _a = this.commandList; _i < _a.length; _i++) {
          var command_1 = _a[_i];
          command_1.execute();
        }
      };
      return MacroCommand;
    }();
    var openWechat = {
      execute: function () {
        console.log('Open openWechat');
      }
    };
    var openChrome = {
      execute: function () {
        console.log('Open Chrome ');
      }
    };
    var openEmail = {
      execute: function () {
        console.log('Open Email');
      }
    };
    var command = new MacroCommand();
    command.add(openWechat);
    command.add(openChrome);
    command.add(openEmail);
    command.execute();

    /**
     * @desc 一个相对简单的模式，目前绝大多数语言都内置了迭代器，以至于大家都不觉得这是一种设计模式
     *
     * @author patric 2023.02.07
     */
    var fns = function (a, b) {
      return a + b;
    };
    console.log(fns(2, 3));
    function each(list, callback) {
      for (var i = 0; i < list.length; i++) {
        var cb = callback(list[i], i, list);
        if (cb === true || cb === false) return false;
      }
    }
    each([23, 3], function (items) {
      console.log(items);
    });
    function map(list, callback) {
      var mapList = [];
      for (var i = 0; i < list.length; i++) {
        var cb = callback(list[i], i, list);
        mapList.push(cb);
      }
      return mapList;
    }
    var getMapVal = map([23, 3, 3], function (val) {
      if (typeof val === 'number') return val += 1;
    });
    console.log(getMapVal, 'getMapVal');

    /**
     * @desc 观察者模式又叫做发布-订阅模式。这是一种一对多的对象依赖关系，当被依赖的对象的状态发生改变时，所有依赖于它的对象都将得到通知。
     *
     * @author patric 2023.02.08
     */
    var Observer = /** @class */function () {
      function Observer() {
        this.oerderlist = {};
      }
      Observer.prototype.listen = function (id, info) {
        if (!this.oerderlist[id]) {
          this.oerderlist[id] = [];
        }
        this.oerderlist[id].push(info);
      };
      Observer.prototype.publish = function (id) {
        var list = this.oerderlist[id];
        if (list && list.length === 0) {
          return console.log('暂未发布订阅模式');
        }
        for (var i = 0; i < list.length; i++) {
          list[i]();
        }
      };
      Observer.prototype.remove = function (id, info) {
        if (this.oerderlist[id]) {
          var list_1 = this.oerderlist[id];
          for (var i = 0; i < list_1.length; i++) {
            if (list_1[i] === info) {
              list_1.splice(i, 1);
            }
          }
        }
      };
      return Observer;
    }();
    var list = new Observer();
    var listen1 = function () {
      console.log('我订阅了这个');
    };
    list.listen('Google', listen1);
    list.remove('Google', listen1);
    list.publish('Google');

    /**
     * @desc 用原型实例指向创建对象的类，使用于创建新的对象的类的共享原型的属性与方法。
     * @author patric patric 2023.02.07
     */
    var Prototype = /** @class */function () {
      function Prototype() {}
      Prototype.prototype.getSex = function (userSex) {
        return userSex;
      };
      Prototype.prototype.getAge = function (userAge) {
        return userAge;
      };
      return Prototype;
    }();

    /**
     * @desc 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问
     * @author patric 2023.02.07
     */
    var myImage = function () {
      var imgNode = document.createElement('img');
      document.body.append(imgNode);
      return {
        setSrc: function (src) {
          imgNode.src = src;
        }
      };
    }();
    var ProxyImage = function () {
      var img = new Image();
      img.onload = function () {
        myImage.setSrc(img.src);
      };
      return {
        setSrc: function (src) {
          img.src = src;
          // myImage.setSrc('https://baidu.tup.com')
        }
      };
    }();

    /**
     *
     * @desc 类似多米诺骨牌, 通过请求第一个条件, 会持续执行后续的条件, 直到返回结果为止
     * @author patric 2023.02.03
     */
    var Chain = /** @class */function () {
      function Chain(fn) {
        this.fn = fn;
        this.successor = null;
      }
      Chain.prototype.setNext = function (successor) {
        this.successor = successor;
      };
      Chain.prototype.init = function (orderType, pay) {
        var result = this.fn.apply(this, [orderType, pay]);
        if (result === 'nextSuccess') {
          this.successor.init.apply(this.successor, [orderType, pay]);
        }
      };
      return Chain;
    }();
    function order200(orderType, pay) {
      if (orderType === 1 && pay) {
        console.log('500元定金预购，得到100元优惠劵');
      } else {
        return 'nextSuccess';
      }
    }
    function order500(orderType, pay) {
      if (orderType === 2 && pay) {
        console.log('200元定金预购，得到100元优惠劵');
      } else {
        return 'nextSuccess';
      }
    }
    function orderCommon(orderType, pay) {
      if (orderType === 3 && pay) {
        console.log('普通购买，无优惠券');
      } else {
        return 'nextSuccess';
      }
    }
    var getOrder200 = new Chain(order200);
    var getOrder500 = new Chain(order500);
    var getOrderCommon = new Chain(orderCommon);
    getOrder200.setNext(getOrder500);
    getOrder500.setNext(getOrderCommon);
    getOrder200.init(2, true);

    /**
     * @desc 允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类。
     *      其实就是用一个对象或者数组记录一组状态，每个状态对应一个实现，实现的时候根据状态挨个去运行实现。
     * @author patric 2023.02.07
     */
    var SuperMarry = /** @class */function () {
      function SuperMarry() {
        this.currentState = [];
      }
      SuperMarry.prototype.change = function (arr) {
        this.currentState = arr;
      };
      SuperMarry.prototype.go = function () {
        for (var _i = 0, _a = this.currentState; _i < _a.length; _i++) {
          var fn = _a[_i];
          if (fn in this) {
            var _this = this;
            _this[fn]();
          }
        }
      };
      SuperMarry.prototype.jump = function () {
        console.log('跳跃');
      };
      SuperMarry.prototype.move = function () {
        console.log('移动======wo');
      };
      SuperMarry.prototype.shoot = function () {
        console.log('射击!');
      };
      SuperMarry.prototype.squat = function () {
        console.log('蹲下!');
      };
      return SuperMarry;
    }();
    var superMarry = new SuperMarry();
    superMarry.change(['move']);
    superMarry.go();

    exports.Adaper = Adaper;
    exports.Chain = Chain;
    exports.MacroCommand = MacroCommand;
    exports.Observer = Observer;
    exports.Person = Person;
    exports.Prototype = Prototype;
    exports.ProxyImage = ProxyImage;
    exports.Single = Singleton;
    exports.SuperMarry = SuperMarry;
    exports.UserFactory = UserFactory;
    exports.each = each;
    exports.getExperience = Singleton;
    exports.map = map;

}));
//# sourceMappingURL=bundle.js.map
