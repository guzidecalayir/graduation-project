import api_philanthropist from "../service/api_philanthropist";

class philanthropist{
    static async fetchPhilanthropistData(){
        try{
            const data = await api_philanthropist.getPhilanthropist();
            return this.processPhilanthropistData(await data);
        }catch(error){
            console.error('Error at viewmodel:', error);
            throw error;
        }
    }

    static processPhilanthropistData(data){
        return data.map((item) => new philanthropist(
            item.id,
            item.firstName,
            item.lastName,
            item.e_mail,
            item.password,
            item.phoneNumber
        ));
    }
}