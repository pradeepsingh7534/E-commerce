import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {fetchShop} from "../redux/features/ShoppinglistSlice";
import { useEffect, useState} from "react";
import SingleProduct from "./singleShopProduct";


function Shopping(){

  var [page, setPage] = useState(1);
  var [arrShop, setArrShop] = useState([])
  var [loading, setloading] = useState(false)
  var [isChecked, setIsChecked] = useState(false)
  var [arr, setArr] = useState([]);

     function getData(page){
      setloading(true)
      axios.get(`https://dummyjson.com/products?page=${page}&limit=0`)
                    .then((res)=> {
                      // var dataArray = res.data.products
                      // var SlicedArray = dataArray.slice(0,45)

                      setArrShop(res.data.products)

                      setloading(false)
                    })
                    .catch((err)=> console.log(err))
     }

     useEffect(()=>{

      getData(page)
      

     },[page])

   function prev(){
    page = page -1;
    setPage(page);

   }     
//arrShop.map((e)=> <SingleProduct product={e}></SingleProduct>

   function next(){
    page= page + 1;
    setPage(page);
   }

   function handleChange(e){
    
    if(e.target.checked){
      setIsChecked(true);
        if(e.target.value==="0-100"){
          var filteredArr = arrShop.filter((e)=> e.price>0 && e.price<10)
          //  var SlicedArr = filteredArr.slice(0, 9);
           setArr(filteredArr);
        }
        else if(e.target.value==="100-200"){
          var filteredArr = arrShop.filter((e)=> e.price>100 && e.price<200);
          setArr(filteredArr)
        }
        else if(e.target.value==="200-300"){
          var filteredArr = arrShop.filter((e)=> e.price>200 && e.price<300);
          setArr(filteredArr);
        }
        else if(e.target.value==="300-400"){
          var filteredArr = arrShop.filter((e)=> e.price>300 && e.price<400)
          setArr(filteredArr)
        }
        else if(e.target.value==="400-5000"){
          var filteredArr = arrShop.filter((e)=> e.price>400 && e.price<500)
          setArr(filteredArr)
        }
           
    }
    else if(e.target.checked===false){
      setIsChecked(false);
    }
    
   }


 var Array1 = arrShop.slice(0,8)
 var Array2 = arrShop.slice(8,17)
 var Array3 = arrShop.slice(17, 26)
 var Array4 = arrShop.slice(26, 35)
 var Array5 = arrShop.slice(35, 44)


// console.log(Array1);
// console.log("print");

    return (
        <>
         <div className="container-fluid">
  <div className="row px-xl-5">
    {/* Shop Sidebar Start */}
    <div className="col-lg-3 col-md-4">
      {/* Price Start */}
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by price</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked=""
              id="price-all"
              value="All Price"
              
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Price
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input 
              type="checkbox"
              className="custom-control-input"
              id="price-1"
              value='0-100'
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="price-1">
             $0 - $100
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-2"
              value='100-200'
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="price-2">
              $100 - $200
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-3"
              value="200-300"
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="price-3">
              $200 - $300
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-4"
              value="300-400"
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="price-4">
              $300 - $400
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-5"
              value="400-5000"
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="price-5">
              $400 - $5000
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div>
      {/* Price End */}
      {/* Color Start */}
      {/* <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by color</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked=""
              id="color-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Color
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-1"
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-2"
            />
            <label className="custom-control-label" htmlFor="color-2">
              White
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-3"
            />
            <label className="custom-control-label" htmlFor="color-3">
              Red
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-4"
            />
            <label className="custom-control-label" htmlFor="color-4">
              Blue
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-5"
            />
            <label className="custom-control-label" htmlFor="color-5">
              Green
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div> */}
      {/* Color End */}
      {/* Size Start */}
      {/* <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by size</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked=""
              id="size-all"
            />
            <label className="custom-control-label" htmlFor="size-all">
              All Size
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-1"
            />
            <label className="custom-control-label" htmlFor="size-1">
              XS
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-2"
            />
            <label className="custom-control-label" htmlFor="size-2">
              S
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-3"
            />
            <label className="custom-control-label" htmlFor="size-3">
              M
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-4"
            />
            <label className="custom-control-label" htmlFor="size-4">
              L
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-5"
            />
            <label className="custom-control-label" htmlFor="size-5">
              XL
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div> */}
      {/* Size End */}
    </div>
    {/* Shop Sidebar End */}
    {/* Shop Product Start */}
    <div className="col-lg-9 col-md-8">
      <div className="row pb-3">
        <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <button className="btn btn-sm btn-light">
                <i className="fa fa-th-large" />
              </button>
              <button className="btn btn-sm btn-light ml-2">
                <i className="fa fa-bars" />
              </button>
            </div>
            <div className="ml-2">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Sorting
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Latest
                  </a>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                  <a className="dropdown-item" href="#">
                    Best Rating
                  </a>
                </div>
              </div>
              <div className="btn-group ml-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Showing
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                  <a className="dropdown-item" href="#">
                    20
                  </a>
                  <a className="dropdown-item" href="#">
                    30
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? <h3>Loading...</h3> : page===1 ? (isChecked ? arr.map((e)=> <SingleProduct product={e}></SingleProduct>) : Array1.map((e)=> <SingleProduct product={e}></SingleProduct>) ): page===2 ? Array2.map((e)=> <SingleProduct product={e}></SingleProduct> ) : page===3 ? Array3.map((e)=> <SingleProduct product={e}></SingleProduct> ): page===4 ? Array4.map((e)=> <SingleProduct product={e}></SingleProduct> ): Array5.map((e)=> <SingleProduct product={e}></SingleProduct> )}

        
        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item ">
                <button onClick={prev} className="page-link" disabled={page===1}>
                  Previous
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link">{page}</button>
              </li>
              <li className="page-item">
                <button onClick={next}className="page-link" disabled={page===5}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    {/* Shop Product End */}
  </div>
</div>



        </>
    )
}

export default Shopping;