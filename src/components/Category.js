import { useEffect } from "react";
import { fetchCategory, changeCategory } from "../redux/features/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";



function Category(){

  const state = useSelector((state)=> state.categoryR);
  const dispatch = useDispatch();
  // initialState: {loading:false, arrCategory:[], selectedCategory: 'Categories', error: "error"},


  useEffect(()=>{
    dispatch(fetchProducts());

    dispatch(fetchCategory());
    

  }, [])

  function spanClick(e){

    dispatch(changeCategory(e.target.innerText))

  }

    return(
        <div className="col-lg-3 d-none d-lg-block">
  <a
    className="btn d-flex align-items-center justify-content-between bg-primary w-100"
    data-toggle="collapse"
    href="#navbar-vertical"
    style={{ height: 65, padding: "0 30px" }}
  >
    <h6 className="text-dark m-0">
      <i className="fa fa-bars mr-2" />
      {state.selectedCategory}
    </h6>
    <i className="fa fa-angle-down text-dark" />
  </a>
  <nav
    className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
    id="navbar-vertical"
    style={{ width: "calc(100% - 30px)", zIndex: 999 }}
  >
    <div className="navbar-nav w-100">
      
      {state.arrCategory.map((e, i)=><span key={i} data-toggle="collapse"
         href="#navbar-vertical" className="nav-item nav-link" onClick={spanClick}>
           {e.name}
         </span>)
         }
        
        
      </div>
  </nav>
</div>

    )
}

export default Category;
