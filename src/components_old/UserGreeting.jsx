
function UserGreeting(props) {
    if(props.isLoggedIn){
         return (
                <>
                    <h2>Welcome {props.username}</h2>
                    <p>Greets {props.isLoggedIn ? "yes" : "no"}</p>
                </>
                );
    }else{
         return (
                <>
                    <h2>Please Login to continue!</h2>
                    <p>Greets {props.isLoggedIn ? "yes" : "no"}</p>
                </>
                );

    }
}

export default UserGreeting