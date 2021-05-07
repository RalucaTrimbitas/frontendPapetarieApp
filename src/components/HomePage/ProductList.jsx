const ProductList = ({productList=[]})=>{

    return (
        <>
            { productList.map((data,index) => {
                if (data) {
                    return (
                        <div key={data.codDeBare}>
                            <h1>{data.denumire}</h1>
                        </div>
                    )
                }
                return null
            }) }
        </>
    );
}
export default ProductList