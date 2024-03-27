class api_philanthropist{
    static async getPhilanthropist(){
        try{
            const response = await fetch('https://studentdesk.azurewebsites.net/api/Philanthropist');
            return await response.json();
        }catch(error){
            console.error('Error:', error);
            throw error;
        }
    }
}

export default api_philanthropist;