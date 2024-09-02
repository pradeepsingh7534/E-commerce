function PriceName(props){
    var p= props.product;
    return (
        <>
        <div className="d-flex justify-content-between">
                      <p>{p.product.title}</p>
                      <p>{p.product.price}</p>
                    </div>
        </>
    )
}

export default PriceName;