/**
 * @desc 定义一些列算法，把他们封装起来，并且可以相互替换。就是把看似毫无联系的代码提取封装、复用，使之更容易被理解和拓展。常见的用于一次if判断、switch枚举、数据字典等流程判断语句中。
 *
 * @author patric 2023.02.07
 */

const strategy = {
  S: function (experience: number) {
    return 2 * experience
  },
  A: function (experience: number) {
    return 4 * experience
  },
  B: function (experience: number) {
    return 3 * experience
  },
}

function getExperience(strategy: Record<string, any>, level: string, experience: number) {
  if (level in strategy) {
    return strategy[level](experience)
  }

  return experience
}
console.log(getExperience(strategy, 'S', 100))

export default getExperience
