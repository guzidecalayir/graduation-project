class Philanthropist {
    constructor (id, firstName, lastName, e_mail, password, phoneNumber){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.salt = salt;
        this.totalDonation = totalDonation;
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            salt: this.salt,
            totalDonation: this.totalDonation

        };
    }

    // Method to clone the object
    clone() {
        return new Philanthropist(
            this.id,
            this.firstName,
            this.lastName,
            this.e_mail,
            this.password,
            this.phoneNumber,
            this.salt,
            this.totalDonation
        );
    }
}

export default Philanthropist;