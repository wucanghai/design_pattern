/**
 * @desc 允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类。
 *      其实就是用一个对象或者数组记录一组状态，每个状态对应一个实现，实现的时候根据状态挨个去运行实现。
 * @author patric 2023.02.07
 */

class SuperMarry {
  currentState: string[]

  constructor() {
    this.currentState = []
  }

  public change(arr: Array<any>) {
    this.currentState = arr
  }

  public go() {
    for (const fn of this.currentState) {
      if (fn in this) {
        const _this: SuperMarry & { [key: string]: any } = this

        _this[fn]()
      }
    }
  }

  public jump() {
    console.log('跳跃')
  }

  public move() {
    console.log('移动======wo')
  }

  public shoot() {
    console.log('射击!')
  }

  public squat() {
    console.log('蹲下!')
  }
}

const superMarry = new SuperMarry()

superMarry.change(['move'])

superMarry.go()

export default SuperMarry
