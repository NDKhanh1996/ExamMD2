import {StudentManager} from "./src/StudentManager/StudentManager";
import {ClassName} from "./src/StudentManager/StudentManager";

StudentManager.addStudent(1, 'John', ClassName.class_10A1, 'VN', 10, 'sing')
StudentManager.addStudent(2, 'Smith', ClassName.class_11A1, 'VN', 10, 'soccer')
StudentManager.addStudent(3, 'Anna', ClassName.class_11A2, 'VN', 10, 'football')
StudentManager.addStudent(4, 'Leaf', ClassName.class_11A2, 'VN', 10, 'swim')
StudentManager.addStudent(5, 'Snow', ClassName.class_12A2, 'VN', 10, 'game')

export function start(): void {
    const readlineSync = require('readline-sync');
    const options: string[] = ['getStudentList', 'findStudentByName', 'addStudent', 'updateStudentInfoByCode', 'deleteStudentByCode'];
    let index = readlineSync.keyInSelect(options, 'Choose your role: ') + 1;
    switch (index) {
        case 1: // class_12A2
            console.table(StudentManager.getList());
            start();
            break;
        case 2: { //findStudentByName
            const name = readlineSync.question('Enter username: ');
            console.table(StudentManager.findStudentByName(name));
            start();
            break;
        }
        case 3: { // addStudent
            const code = +readlineSync.question('Enter code: ');
            const name = readlineSync.question('Enter name: ');
            const studentClass = readlineSync.question('Enter studentClass: ');
            const country = readlineSync.question('Enter country: ');
            const score = +readlineSync.question('Enter score: ');
            const hobby = readlineSync.question('Enter hobby: ');

            if (!/^[a-zA-Z\s]+$/.test(name)) {
                console.log('Invalid student name');
                start();
                break;
            }
            if (typeof studentClass !== 'string' || studentClass.length === 0) {
                console.log('Invalid class');
                start();
                break;
            }
            if (!/^[a-zA-Z\s]+$/.test(country)) {
                console.log('Invalid country');
                start();
                break;
            }
            if (typeof score !== 'number' || score < 0) {
                console.log('Invalid score');
                start();
                break;
            }
            if (!/^[\s\S]*$/.test(hobby)) {
                console.log('Invalid hobby');
                start();
                break;
            }

            StudentManager.addStudent(code, name, studentClass, country, score, hobby);
            start();
            break;
        }
        case 4: { // updateStudentInfoByCode
            const code = +readlineSync.question('Enter code: ');
            const newCode = +readlineSync.question('Enter newCode: ');
            const newName = readlineSync.question('Enter newName: ');
            const newStudentClass = readlineSync.question('Enter newStudentClass: ');
            const newCountry = readlineSync.question('Enter newCountry: ');
            const newScore = +readlineSync.question('Enter score: ');
            const newHobby = readlineSync.question('Enter hobby: ');

            if (!/^[a-zA-Z\s]+$/.test(newName)) {
                console.log('Invalid student name');
                start();
                break;
            }
            if (typeof newStudentClass !== 'string' || newStudentClass.length === 0) {
                console.log('Invalid class');
                start();
                break;
            }
            if (!/^[a-zA-Z\s]+$/.test(newCountry)) {
                console.log('Invalid country');
                start();
                break;
            }
            if (typeof newScore !== 'number' || newScore < 0) {
                console.log('Invalid score');
                start();
                break;
            }
            if (!/^[\s\S]*$/.test(newHobby)) {
                console.log('Invalid hobby');
                start();
                break;
            }

            StudentManager.updateStudentInfoByCode(code, newCode, newName, newStudentClass, newCountry, newScore, newHobby);
            start();
            break;
        }
        case 5: { // deleteStudentByCode
            const code = +readlineSync.question('Enter code: ');
            StudentManager.deleteStudentByCode(code);
            start();
            break;
        }
    }
}

start();