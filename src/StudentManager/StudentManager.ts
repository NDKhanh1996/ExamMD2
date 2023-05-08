import {Student} from "./Student/Student";
export enum ClassName {
    class_10A1 = 'class_10A1',
    class_10A2 = 'class_10A2',
    class_11A1 = 'class_11A1',
    class_11A2 = 'class_11A2',
    class_12A1 = 'class_12A1',
    class_12A2 = 'class_12A2'
}
export class StudentManager {
    private static list: Array<Student> = [];

    static getList() {
        return this.list
    }

    static findIndexByName(name: string) {
        return this.list.findIndex(i => i.getName() === name);
    }

    static findIndexByCode(code: number) {
        return this.list.findIndex(i => i.getCode() === code);
    }

    static findStudentByName(name: string) {
        let studentIndex = this.findIndexByName(name);
        if(studentIndex !== -1){
            return this.list[studentIndex];
        } else {
            console.log('Student you input do not exist (StudentManager.findStudentByName)')
        }
    }

    static addStudent(code: number, name: string, studentClass: string, country: string, score: number, hobby: string) {
        this.list.push(new Student(code, name, studentClass, country, score, hobby));
    }

    static updateStudentInfoByCode(code: number, newCode: number, newName: string, newStudentClass: string, newCountry: string, newScore: number, newHobby: string) {
        let studentIndex = this.findIndexByCode(code);
        if (studentIndex !== -1) {
            this.list[studentIndex].setCode(newCode);
            this.list[studentIndex].setName(newName);
            this.list[studentIndex].setStudentClass(newStudentClass);
            this.list[studentIndex].setCountry(newCountry);
            this.list[studentIndex].setScore(newScore);
            this.list[studentIndex].setHobby(newHobby);
        } else {
            console.log('Student you input do not exist (StudentManager.updateStudentInfoByName)')
        }
    }

    static deleteStudentByCode(code: number) {
        let studentIndex = this.findIndexByCode(code);
        if (studentIndex !== -1) {
            this.list.splice(studentIndex, 1);
            console.log('Delete complete (StudentManager.deleteStudentByCode)');
        } else {
            console.log('Student you input do not exist (StudentManager.deleteStudentByCode)');
        }
    }
}