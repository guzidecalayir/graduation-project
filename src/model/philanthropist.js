class philanthropist {
    constructor (id, firstName, lastName, e_mail, password, phoneNumber){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.e_mail = e_mail;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            e_mail: this.e_mail,
            password: this.password,
            phoneNumber: this.phoneNumber
        };
    }

    // Method to clone the object
    clone() {
        return new philanthropist(
            this.id,
            this.firstName,
            this.lastName,
            this.e_mail,
            this.password,
            this.phoneNumber
        );
    }
}

export default philanthropist;