import { useSelector } from "react-redux";
import CategoryDetails from "./categoryDetails";


function DisplayCategory(){
  
    //initialState:{loading:false,arrCategory:[],error:'',selectedCategory:'Categories'},


    var displayCatState = useSelector((state)=> state.categoryR)

   var dataArray= displayCatState.arrCategory;




return (
<div className="container-fluid pt-5">
       <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Categories</span>
        </h2>
       <div className="row px-xl-5 pb-3">
      
       {dataArray.map((e, i)=> <CategoryDetails key={i} category={e}/>)}
       
        </div>
  </div>
  )

}

export default DisplayCategory;