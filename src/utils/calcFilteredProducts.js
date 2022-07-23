export const calcFilteredProducts=(data)=>{
    const {filterAbove1500,filterAbove4000,filterAbove7000,filterBySneakers,filterByLoafers,products}=data
    const newProducts=[]
    if(filterAbove1500){
        newProducts.push(...products.filter(product=>product.price>=1500 && product.price<4000))
    }

    if(filterAbove4000){
        newProducts.push(...products.filter(product=>product.price>=4000 && product.price<7000))
    }

    if(filterAbove7000){
        newProducts.push(...products.filter(product=>product.price>6999))
    }

    if(filterByLoafers){
        newProducts.push(...products.filter(product=>product?.type==='loafers'))
    }

    if(filterBySneakers){
        newProducts.push(...products.filter(product=>product?.type==='sneakers'))
    }
    if(newProducts.length){
        return newProducts
    }else return products
}