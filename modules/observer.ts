/**
 * @desc 观察者模式又叫做发布-订阅模式。这是一种一对多的对象依赖关系，当被依赖的对象的状态发生改变时，所有依赖于它的对象都将得到通知。
 *
 * @author patric 2023.02.08
 */

class Observer {
  oerderlist: Record<string, any>

  constructor() {
    this.oerderlist = {}
  }

  public listen(id: string, info: unknown) {
    if (!this.oerderlist[id]) {
      this.oerderlist[id] = []
    }

    this.oerderlist[id].push(info)
  }

  public publish(id: string) {
    const list = this.oerderlist[id]

    if (list && list.length === 0) {
      return console.log('暂未发布订阅模式')
    }

    for (let i = 0; i < list.length; i++) {
      list[i]()
    }
  }

  public remove(id: string, info: unknown) {
    if (this.oerderlist[id]) {
      const list = this.oerderlist[id]

      for (let i = 0; i < list.length; i++) {
        if (list[i] === info) {
          list.splice(i, 1)
        }
      }
    }
  }
}

const list = new Observer()

const listen1 = () => {
  console.log('我订阅了这个')
}

list.listen('Google', listen1)

list.remove('Google', listen1)

list.publish('Google')

export default Observer
