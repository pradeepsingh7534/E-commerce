import { discount } from "../BLL/utility";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";


function FeaturedSingleProduct(props){

   

   var dispatch = useDispatch();
   var navigate = useNavigate();

  
   
   return (
        <>
        <div  className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={props.product.thumbnail} alt="" />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  {props.product.title}
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$ {props.product.price}</h5>
                  
                </div>
                  <div> 
                    <h5 className="text-muted ml-2">
                     <span>{`Discounted Price: $ ${ discount(props.product.price, props.product.discountPercentage)}`}</span>
                 </h5>
                 </div>

                 <div>
                  <input onClick={()=> {
                    dispatch(addtoCart(props.product)) 
                    alert("Selected Product added successfully in Cart")
                  }} className="btn btn-primary" type="button" value="Add to Cart"></input>
                 </div>
                
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>({props.product.rating})</small>
                </div>
              </div>
            </div>
           </div>

           
        </>
           
    )

}

export default FeaturedSingleProduct;
