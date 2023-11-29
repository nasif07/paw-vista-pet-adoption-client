import { useEffect, useState } from "react";

const CategoryItem = () => {

    
    const [category, setCategory] = useState();
    

    useEffect(()=> {
        fetch('category.json')
        .then(data => data.json())
        .then(res => console.log(res))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default CategoryItem;