class Philanthropist {
    constructor (firstName, lastName, email, password, phoneNumber, totalDonation){
        // this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        // this.salt = salt;
        this.totalDonation = totalDonation;
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            // id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            // salt: this.salt,
            totalDonation: this.totalDonation

        };
    }

    // Method to clone the object
    clone() {
        return new Philanthropist(
            // this.id,
            this.firstName,
            this.lastName,
            this.email,
            this.password,
            this.phoneNumber,
            // this.salt,
            this.totalDonation
        );
    }
}

export default Philanthropist;