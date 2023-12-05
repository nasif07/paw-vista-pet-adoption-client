import { useContext } from "react";
import Title from "../../Components/Title";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { useFormik } from "formik";
import moment from "moment";
import Swal from "sweetalert2";

const CreateDonation = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
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

                const { category,maximumDonation, longDescription, shortDescription,lastDate, petAge, petName, petLocation } = values;

                const postData = {
                    picture: data.data.display_url,
                    petCategory: category,
                    donatedAmount: 0,
                    name: petName,
                    maximumDonation,
                    lastDate,
                    location: petLocation,
                    shortDescription,
                    longDescription,
                    createDate: moment().subtract(10, 'days').calendar(),
                    age: petAge,
                    email: user.email,
                    status: true
                }
                console.log(postData);
                const res = await axiosSecure.post('/allDonation', postData);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Donation created successfully`,
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
        <div>
            <Title subHeading={"Create Donation"}></Title>
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
                        id="petAge"
                        className="input input-bordered w-full mb-4"
                        name="petAge"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.petAge}
                    />
                    <label className="label">
                        <span className="label-text font-medium text-xl">Maximum donation amount</span>
                    </label>
                    <input
                        required
                        id="maximumDonation"
                        className="input input-bordered w-full mb-4"
                        name="maximumDonation"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.maximumDonation}
                    />
                    <label className="label">
                        <span className="label-text font-medium text-xl">Last Date of Donation</span>
                    </label>
                    <input
                        required
                        id="lastDate"
                        className="input input-bordered w-full mb-4"
                        name="lastDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.lastDate}
                    />



                    <label className="label">
                        <span className="label-text font-medium text-xl">Pet Location</span>
                    </label>
                    <input
                        required
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
        </div>
    );
};

export default CreateDonation;