/**
 * @desc 一个相对简单的模式，目前绝大多数语言都内置了迭代器，以至于大家都不觉得这是一种设计模式
 *
 * @author patric 2023.02.07
 */

type callback<T extends string | number> = (
  val: T,
  index?: number,
  list?: T[],
) => void | boolean | number

type fn = (x: number, y: number) => number

const fns: fn = (a, b) => a + b

console.log(fns(2, 3))

function each<T extends number | string>(list: T[], callback: callback<T>) {
  for (let i = 0; i < list.length; i++) {
    const cb = callback(list[i], i, list)

    if (cb === true || cb === false) return false
  }
}

each([23, 3], (items: number | string) => {
  console.log(items)
})

function map<T extends number>(list: T[], callback: callback<T>) {
  const mapList = []
  for (let i = 0; i < list.length; i++) {
    const cb = callback(list[i], i, list)
    mapList.push(cb)
  }

  return mapList
}

const getMapVal = map([23, 3, 3], (val: number) => {
  if (typeof val === 'number') return (val += 1)
})

console.log(getMapVal, 'getMapVal')

export { each, map }
