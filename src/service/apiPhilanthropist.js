
class apiPhilanthropist{
    static async getPhilanthropist(){
    
        try{
            const response = await fetch('https://studesk.azurewebsites.net/api/Philanthropist/get');
            return await response.json();
            
        }catch(error){
            console.error('Error:', error);
            throw error;
        }
        
    }
}

export default apiPhilanthropist;