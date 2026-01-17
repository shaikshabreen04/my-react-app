function UserProfile({user,loading,error}){
    if(loading){
        return <p>Loading user profile...</p>;
    }
    if(error){
        return <p style={{color:"red"}}>Error:{error}</p>;
    }
    return(
        <div>
            <h2>Name:{user.name}</h2>
            <p>Email:{user.email}</p>
        </div>
    );
}
export default UserProfile;