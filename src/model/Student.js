class Student {
    constructor (firstName, lastName, school, phoneNumber, birthDate, email, password){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.school = school;
        this.phoneNumber = phoneNumber;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        
        
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            
            firstName: this.firstName,
            lastName: this.lastName,
            school : this.school,
            phoneNumber: this.phoneNumber,
            birthDate : this.birthDate,
            email: this.email,
            password: this.password,
    
            
        };
    }

    // Method to clone the object
    clone() {
        return new Student(

            this.firstName,
            this.lastName,
            this.school ,
            this.phoneNumber,
            this.birthDate,
            this.email,
            this.password,
            
            
            
        );
    }
}

export default Student;