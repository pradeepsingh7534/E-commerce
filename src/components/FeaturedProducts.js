import FeaturedSingleProduct from './FeaturedSingleProduct'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'


function FeaturedProducts(){

    const selectedCategory = useSelector((state)=> state.categoryR.selectedCategory)
    const productState = useSelector((state)=> state.productR)
    const navigate = useNavigate()

    if(productState.arrProducts.length===0){
        return <h1>Loading....</h1>
    }
    else{
        var filterProducts = [];
        if(selectedCategory==="Categories"){
            filterProducts = productState.arrProducts.slice(0, 16);
        }
        else{
            filterProducts = productState.arrProducts.filter((e)=> e.category.toUpperCase()=== selectedCategory.toUpperCase())
        }


    }

    return (    
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          
        {filterProducts.map((e, i)=> <FeaturedSingleProduct  key={i} product={e} />)}
          
        </div>
      </div>)

    
}


export default FeaturedProducts