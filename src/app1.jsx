import {useEffect ,useState}from "react";
import UserProfile from "./userprofile";
function App1() {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);
    const[error,setError] = useState("");
    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users/1"

                );
                const data = await response.json();
                if (response.status==404)
                {
                    throw new Error("No records found");

                }
                setUser(data);
                if (!response.ok){
                    throw new Error("Failed to fetch user data");

                }

            }catch(err){
                setError(err.message);

            }finally{
                setLoading(false);
            }

        }
        fetchUser();
    },[]);
        return(
            <div style={{ padding:"20px"}}>
                <h1>User Dashboard</h1>
                <UserProfile
                   user={user}
                   loading={loading}
                   error={error}
                />
            </div>
        );
}

export default App1;