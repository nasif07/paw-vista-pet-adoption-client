import { useContext } from "react";
import Title from "../../Components/Title";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { useFormik } from "formik";
import moment from "moment";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UpdatePet = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const param = useParams();

    const { data: pet = []  } = useQuery({
        queryKey: ['pet'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allPets/${param.id}`, {
            });
            return res.data
        }
    })
    // console.log(pet);
    const{category} = pet;




    const formik = useFormik({
        initialValues: {
            category: {category},
            // firstName: '',
            // lastName: '',
            // email: '',
            image: null, // Assuming you have an input for the image in your form
        },
        onSubmit: async (values) => {
            try {
                // console.log(values.image);

                const formData = new FormData();
                console.log(values.image);
                formData.append("image", values.image);

                // console.log(formData);

                const { data } = await axiosPublic.post(
                    `https://api.imgbb.com/1/upload?key=9a9f91fb1f78422468bc7f69ef786328`,formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                // console.log(data.data.display_url);
                // console.log(moment().subtract(10, 'days').calendar());

                const { category, longDescription, shortDescription, petAge, petName, petLocation } = values;

                const putData = {
                    image: data.data.display_url,
                    category: category.category,
                    name: petName,
                    location: petLocation,
                    shortDescription,
                    longDescription,
                    date: moment().subtract(10, 'days').calendar(),
                    age: petAge,
                    email: user.email,
                    status: 'false'
                }
                // console.log(putData);
                const res = await axiosSecure.put(`/allPets/${param.id}`, putData)
                console.log(res);
                
                
                if (res.status == 200) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `data updated successfull`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // console.log('payment saved', res.data);

            } catch (error) {
                console.error("Error uploading image:", error);
                // Handle error
            }
        },
    });

    return (
        <>
        <Title subHeading={"Update Your Pet"}></Title>
        <div className="flex flex-col mx-auto">
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>

                <label className="label">
                    <span className="label-text font-medium text-xl">Add Photo</span>
                </label>
                <input
                    onChange={(event) => {
                        formik.setFieldValue("image", event.currentTarget.files[0]);
                    }}
                    name="image"
                    accept="image/*"
                    
                    type="file"
                    className="file-input file-input-bordered w-full"
                />



                <label className="label">
                    <span className="label-text font-medium text-xl">Pet Name</span>
                </label>
                <input
                    required
                    id="petName"
                    defaultValue={pet.name}
                    className="input input-bordered w-full mb-4"
                    name="petName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.petName}
                />
                <label className="label">
                    <span className="label-text font-medium text-xl">Pet Age</span>
                </label>
                <input
                    required
                    defaultValue={pet.age}
                    id="petAge"
                    className="input input-bordered w-full mb-4"
                    name="petAge"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.petAge}
                />
                <label className="label">
                    <span className="label-text font-medium text-xl">Pet Location</span>
                </label>
                <input
                    required
                    defaultValue={pet.location}
                    id="petLocation"
                    className="input input-bordered w-full mb-4"
                    name="petLocation"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.petLocation}
                />
                <label className="label">
                    <span className="label-text font-medium text-xl">PetCategory</span>
                </label>
                <select
                    required name="category" onChange={formik.handleChange}
                    value={formik.values.category} className="select select-bordered w-full mb-4">
                    <option disabled selected>Select</option>
                    <option>dog</option>
                    <option>cet</option>
                    <option>rabbit</option>
                    <option>horse</option>
                </select>
                <label className="label">
                    <span className="label-text font-medium text-xl">Short Description</span>
                </label>
                <input
                    required
                    defaultValue={pet.shortDescription}
                    id="shortDescription"
                    className="input input-bordered w-full mb-4"
                    name="shortDescription"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.shortDescription}
                />
                <label className="label">
                    <span className="label-text font-medium text-xl">Long Description</span>
                </label>
                <input
                defaultValue={pet.longDescription}
                    required
                    id="longDescription"
                    className="input input-bordered w-full mb-4"
                    name="longDescription"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.longDescription}
                />




                <button className="btn btn-outline" type="submit">Submit</button>
            </form>
        </div>
    </>
    );
};

export default UpdatePet;