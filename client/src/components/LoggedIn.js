function LoggedIn({ setCurrentUser, currentUser }) {
    const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
    };
    return (
    <div>
        <p>
        <button onClick={handleLogout}>Logout</button>
        </p>
    </div>
    );
}

export default LoggedIn;
