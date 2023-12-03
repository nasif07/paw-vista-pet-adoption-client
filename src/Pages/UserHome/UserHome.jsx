import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className="lg:text-4xl text-2xl font-semibold lg:font-extrabold">
                <span className="">Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;