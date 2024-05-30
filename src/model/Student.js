class Student {
    constructor (firstName, lastName, email, password, phoneNumber, school, birthDate){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.school = school;
        this.birthDate = birthDate;
        
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            school : school,
            birthDate : birthDate,
        };
    }

    // Method to clone the object
    clone() {
        return new Student(

            this.firstName,
            this.lastName,
            this.email,
            this.password,
            this.phoneNumber,
            this.school ,
            this.birthDate,
        );
    }
}

export default Student;