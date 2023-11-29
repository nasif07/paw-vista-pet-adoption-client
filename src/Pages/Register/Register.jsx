import Lottie from "lottie-react";
import reg from "../../assets/reg.json"
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {googleSignIn, emailPasswordSignIn, handleUpdateProfile} = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password, name, photo);

        if (password.length < 6 ) {
            toast.error('password must be at least 6 characters')
            return;
        }
        if(!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/.test(password)){
            toast.error('password must be have at least one capital letter and one special character')
            return;
        }
        emailPasswordSignIn(email, password)
        .then(res => {
            console.log(res);
            handleUpdateProfile(name, photo)
            .then(() => {
                toast.success('Register Successfull')
            })
        })
        .catch(error => {
            toast.error(error.message)
        })


    }

    const handleGoogleSignIn= () => {
        googleSignIn()
        .then(res => {
            console.log(res);
            toast.success('Register Successfull')
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message);
        })
    }


    return (
        <Container>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:text-left max-w-2xl">
                        <Lottie animationData={reg}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-md border border-[#FFAD7B] bg-base-200">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-center font-bold text-3xl">Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <div className="label-text-alt font-bold mt-2 text-sm">Already have a Acount? <Link to={"/login"} className="text-[#FF4880]">Login Here</Link></div>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#FF4880]">Login</button>
                            </div>
                            <div className="divider my-6">Login with Social</div>
                            <div className="flex justify-center gap-7">
                                <button>
                                    <FaFacebook className="text-3xl text-[#336BE1]"></FaFacebook>
                                </button>
                                <button onClick={handleGoogleSignIn}>
                                    <FaGoogle className="text-3xl"></FaGoogle>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;