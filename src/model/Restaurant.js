class Restaurant {

    constructor (name, city, district, neighbourhood, street, building, email, password){
        
        this.name = name;
        this.city = city;
        this.district = district;
        this.neighbourhood = neighbourhood;
        this.street = street;
        this.building = building;
        this.email = email;
        this.password = password;
        
    }

    // Method to convert the object to a plain JavaScript object
    toPlainObject() {
        return {
            
            name: this.name,
            city : this.city,
            district : this.district,
            neighbourhood : this.neighbourhood,
            street : this.street,
            building : this.building,
            email: this.email,
            password: this.password,
            

        };
    }

    // Method to clone the object
    clone() {
        return new Restaurant(
            this.name,
            this.city,
            this.district,
            this.neighbourhood,
            this.street,
            this.building,
            this.email,
            this.password,
            
        );
    }
}

export default Restaurant;