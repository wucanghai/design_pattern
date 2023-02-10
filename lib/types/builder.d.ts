/**
 * @desc 建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示
 * @author patric 2023.02.07
 */
declare class User {
    sex: string;
    age: number;
    skill: string;
    hobby: string;
    constructor(sex: string, age: number, skill: string, hobby: string);
}
declare class Work {
    work: string;
    workDesc: string;
    constructor(work: string, workDesc: string);
    changedWork(work: string): void;
    changeWorkDesc(workDesc: string): void;
}
declare const Person: () => User & {
    workInfo?: Work | undefined;
};
export default Person;
