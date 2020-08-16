function main(){
	const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

	const getCocktail = ()=>{
		fetch(`${baseURL}filter.php?i=Gin`);
		.then(response=>{
			return response.json();
		}).then(responseJson=>{
			if(responseJson.error){
				const tes =showResponseMessage(responseJson.message);
			}else{
				renderAllCocktail(responseJson.cocks);
			}
		}).catch(error=>{
			showResponseMessage(error);
		})
	};
}
export default main;