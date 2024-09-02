import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../redux/features/categorySlice";


function filteredProductsArrofCategory(categoryName, productArr){

  var  filteredArray = productArr.filter((e)=> e.category.toUpperCase()=== categoryName.toUpperCase())

  return filteredArray 
}

function CategoryDetails(props){

const productState=useSelector((state)=>state.productR);
const dispatch = useDispatch();

if(productState.arrProducts.length===0){
  return <h1>Loading----</h1>
}

else {
  var filterArray = filteredProductsArrofCategory(props.category.name, productState.arrProducts)
  if(filterArray.length==0){
    return "";
  }

}

return (
    

    <div onClick={()=>{dispatch(changeCategory(props.category.name))}} className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <span className="text-decoration-none" >
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img className="img-fluid" src={filterArray[0].thumbnail}alt="" />
            </div>
            <div className="flex-fill pl-3">
              <h6>{props.category.name}</h6>
              <small className="text-body">{filterArray.length} Products</small>
            </div>
          </div>
        </span>
      </div>

    )

}






export default CategoryDetails;