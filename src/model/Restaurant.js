class Restaurant {

    constructor (name, longitude, latitude, email, password){
        
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.email = email;
        this.password = password;
        
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            
            name: this.name,
            longitude : this.longitude,
            latitude : this.latitude,
            email: this.email,
            password: this.password,
            

        };
    }

    // Method to clone the object
    clone() {
        return new Restaurant(
            this.name,
            this.longitude,
            this.latitude,
            this.email,
            this.password,
            
        );
    }
}

export default Restaurant;