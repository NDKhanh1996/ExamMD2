export class Student {
    private code: number;
    private name: string;
    private studentClass: string;
    private country: string;
    private score: number;
    private hobby: string;

    constructor(code: number, name: string, studentClass: string, country: string, score: number, hobby: string) {
        this.code = code;
        this.name = name;
        this.studentClass = studentClass;
        this.country = country;
        this.score = score;
        this.hobby = hobby;
    }

    getCode(): number {
        return this.code;
    }

    setCode(value: number) {
        this.code = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getStudentClass(): string {
        return this.studentClass;
    }

    setStudentClass(value: string) {
        this.studentClass = value;
    }

    getCountry(): string {
        return this.country;
    }

    setCountry(value: string) {
        this.country = value;
    }

    getScore(): number {
        return this.score;
    }

    setScore(value: number) {
        this.score = value;
    }

    getHobby(): string {
        return this.hobby;
    }

    setHobby(value: string) {
        this.hobby = value;
    }
}