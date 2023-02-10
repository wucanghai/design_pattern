/**
 * @desc 建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示
 * @author patric 2023.02.07
 */

class User {
  sex: string
  age: number
  skill: string
  hobby: string

  constructor(sex: string, age: number, skill: string, hobby: string) {
    this.sex = sex
    this.age = age
    this.skill = skill
    this.hobby = hobby
  }
}

class Work {
  work: string
  workDesc: string

  constructor(work: string, workDesc: string) {
    this.work = work
    this.workDesc = workDesc
  }

  public changedWork(work: string) {
    this.work = work
  }

  public changeWorkDesc(workDesc: string) {
    this.workDesc = workDesc
  }
}

const Person = function () {
  const _person: User & { workInfo?: Work } = new User('男', 23, '写代码', '喝酒')

  _person.workInfo = new Work('工程师', '每天必须一杯咖啡')

  return _person
}

const person1 = Person()

console.log(person1)

export default Person
