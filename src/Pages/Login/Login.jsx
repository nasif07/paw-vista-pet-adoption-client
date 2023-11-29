// import { LottiePlayer } from "@lottiefiles/lottie-player";
import Lottie from "lottie-react";
import animation from "../../assets/register.json"
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { googleSignIn, emailPasswordLogIn } = useContext(AuthContext);


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        emailPasswordLogIn(email, password)
            .then(result => {
                console.log(result);
                toast.success('Login Successfull')
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }

    const handleGoogleSignUp = () => {
        console.log('janina');
        googleSignIn()
            .then(res => {
                console.log(res)
                toast.success('Login Successfull')
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }
    return (
        <Container>
            <div className="hero min-h-screen">
                <div className="hero-content max-w-full flex-col lg:flex-row-reverse">
                    <div className="lg:text-left w-full">
                        <div className="w-[650px]">
                            <Lottie animationData={animation}></Lottie>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-md border border-[#FFAD7B] bg-base-200">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-center font-bold text-3xl">Login Now</h1>
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
                                    <div className="label-text-alt font-bold mt-2 text-sm">New User? <Link to={"/register"} className="text-[#FF4880]">Register Here</Link></div>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#FF4880]">Login</button>
                            </div>


                        </form>
                        <div className="divider">Login with Social</div>
                        <div className="flex justify-center gap-7 p-3 pb-10">
                            <button>
                                <FaFacebook className="text-3xl text-[#336BE1]"></FaFacebook>
                            </button>
                            <button onClick={handleGoogleSignUp}>
                                <FaGoogle className="text-3xl"></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;