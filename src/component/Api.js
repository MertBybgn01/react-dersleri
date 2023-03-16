import axios from "axios";

const searchImages = async (term) =>{
    const respons = await  axios.get('https://api.unsplash.com/search/photos/',{
       headers:{
           Authorization:'Client-ID HueenViKYE90Ux9RhHesS6ZNJFqnfAoUiVPfPEPtNzk'
       },
       params:{
           query:term
       }
      })
         debugger;
      return respons.data.results
   }


   export default searchImages ;