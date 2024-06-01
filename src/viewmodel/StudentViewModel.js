import apiStudent from "../service/apiStudent";
import Student from "../model/Student";

class StudentViewModel{

    static async mapStudentData(studentData) {
        try {
            let student;
    
            if (Array.isArray(studentData)) {
                student = studentData.map(data => {
                    return new Student(
                        data.firstName,
                        data.lastName,
                        data.email,
                        data.password,
                        data.phoneNumber,
                        data.school,
                        data.birthDate,
                    );
                });
            } else {
                student = new Student(
                    studentData.firstName,
                    studentData.lastName,
                    studentData.email,
                    studentData.password,
                    studentData.phoneNumber,
                    studentData.school,
                    studentData.birthDate,
                );
            }
    
            console.log(student);
            await apiStudent.saveStudent(student);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async mapStudentSignInData(studentSignInData) {
        try {
            
            const { email, password } = studentSignInData;
    
            
            const student = {
                email: email,
                password: password
            };
            
            
            await apiStudent.signInStudent(student);
            
        } catch (error) {
            
            console.error('Error:', error);
            throw error;
        }
    }





    
}
export default StudentViewModel;