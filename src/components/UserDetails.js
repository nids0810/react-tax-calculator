const UserDetails = ({ user, setUser, next, prev }) => {
    const collectUserInfo = (e) => {
        e.preventDefault()

        if(user.name === "" || user.age === 0 || user.gender === "") {
            alert("Please enter valid information")
            return
        }
        next()
    }

    return(
    <form onSubmit={collectUserInfo}>
        <h3>User Details</h3>
        <div className="row mb-3">
            <label className="col-sm-4 form-label">Enter Name</label>
            <input className="col-sm-8" type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}></input>
        </div>
        <div className="row mb-3">
            <label className="col-sm-4 form-label">Enter Age</label>
            <input className="col-sm-8" type="number" min="0" value={user.age} onChange={(e) => setUser({...user, age: parseInt(e.target.value)})}></input>
        </div>
        <div className="row mb-3">
            <label className="col-sm-4 form-label">Enter Gender</label>
            <select className="col-sm-8" value={user.gender} onChange={(e) => setUser({...user, gender:e.target.value})}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
        </div>
        <div className="row justifyContent">
            <button className="btn btn-secondary col-sm-3" type="button" onClick={prev}>Go Back</button>
            <button className="btn btn-primary btnColor col-sm-3" type="submit">Continue</button>
        </div>
    </form>)
}

export default UserDetails