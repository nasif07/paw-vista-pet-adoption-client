import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import Title from "../../../Components/Title";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('petCategory.json')
        .then(data => data.json())
        .then(res => setCategories(res))
       
    },[])
    console.log(categories);
    return (
        <Container>
            <Title heading={"Pets category"} subHeading={"Meet The animals"} description={"The best overall dog DNA test is Embark Breed & Health Kit view at Chewy, which provides you with a breed brown and information most dogs"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {categories.map(category=> <div className="border rounded-md p-6" key={category.image}>
                    <img className="h-[350px] w-full" src={category.image} alt="" />
                    <p className="text-center font-bold text-3xl">{category.petCategory}</p>
                </div>)}
            </div>
        </Container>
    );
};

export default Categories;