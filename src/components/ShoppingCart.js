import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { discount } from "../BLL/utility";
import { Increase, Decrease} from "../redux/features/CartSlice";
import { removeItem } from "../redux/features/CartSlice";
import { totalPrice } from "../BLL/utility";

function ShoppingCart(){

var cartState = useSelector((state)=> state.cartR)// 
var dispatch = useDispatch();
const navigate = useNavigate();




  


return (
      <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">
                Home
              </a>
              <a className="breadcrumb-item text-dark" href="#">
                Shop
              </a>
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
    
    
    <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartState.arrCart.map((e,i)=> <tr key={i}>
                  <td className="align-middle">
                    <img src={e.product.thumbnail} alt="" style={{ width: 50 }} />{" "}
                    {e.product.title}
                  </td>
                  <td className="align-middle">{`Discounted Price: $ ${ discount(e.product.price, e.product.discountPercentage)}`}</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{ width: 100 }}
                    >
                      <div className="input-group-btn">
                        <button onClick={()=>{
                          dispatch(Decrease(e.product))
                        }} className="btn btn-sm btn-primary btn-minus">
                        {<i className="fa fa-minus" />}
                        </button>
                      </div>
                      <input type="number"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value={e.quantity}>
                        </input>
                      <div className="input-group-btn">
                        <button onClick={()=> {
                          dispatch(Increase(e.product))
                        }} className="btn btn-sm btn-primary btn-plus"  >
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">${((e.quantity>1 ? ((discount(e.product.price, e.product.discountPercentage))*(e.quantity)).toFixed(2) : (discount(e.product.price, e.product.discountPercentage))))}</td>
                  <td className="align-middle">
                    <button onClick={()=> dispatch(removeItem(e.product.id))} className="btn btn-sm btn-danger">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>)}
               
              </tbody>
            </table>
          </div>
          {cartState.arrCart.length===0 ? <div style={{marginLeft: "50px",}}>
            <h1>No Items Added</h1>
            <h5>Please Add a item</h5>
            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={()=>{
              navigate("/shop")
            }}>Go to Shop Page</button>
          </div>: <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>${(totalPrice(cartState.arrCart)).toFixed(2)}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>${totalPrice(cartState.arrCart)+ Number(10)}</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={()=> {
                  navigate('/checkout');
                }}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>}
        </div>
      </div>
      </>
      )
}

export default ShoppingCart