/**
 *
 * @desc 类似多米诺骨牌, 通过请求第一个条件, 会持续执行后续的条件, 直到返回结果为止
 * @author patric 2023.02.03
 */

class Chain {
  fn: any
  successor: any

  constructor(fn: any) {
    this.fn = fn
    this.successor = null
  }

  public setNext(successor: any) {
    this.successor = successor
  }

  public init(orderType: number, pay: boolean) {
    const result = this.fn.apply(this, [orderType, pay])

    if (result === 'nextSuccess') {
      this.successor.init.apply(this.successor, [orderType, pay])
    }
  }
}

function order200(orderType: number, pay: boolean) {
  if (orderType === 1 && pay) {
    console.log('500元定金预购，得到100元优惠劵')
  } else {
    return 'nextSuccess'
  }
}

function order500(orderType: number, pay: boolean) {
  if (orderType === 2 && pay) {
    console.log('200元定金预购，得到100元优惠劵')
  } else {
    return 'nextSuccess'
  }
}

function orderCommon(orderType: number, pay: boolean) {
  if (orderType === 3 && pay) {
    console.log('普通购买，无优惠券')
  } else {
    return 'nextSuccess'
  }
}

const getOrder200 = new Chain(order200)
const getOrder500 = new Chain(order500)
const getOrderCommon = new Chain(orderCommon)

getOrder200.setNext(getOrder500)
getOrder500.setNext(getOrderCommon)

getOrder200.init(2, true)

export default Chain
