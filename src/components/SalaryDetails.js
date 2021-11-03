const SalaryDetails = ({ user, setUser, next, prev }) => {
    const getSalaryDetails = (e) => {
        e.preventDefault()

        if(user.basic === 0 || user.hra === 0 || user.variable === 0 || user.pf === 0) {
            alert("Please enter valid information")
            return
        }
        next()
    }

    return(
        <form onSubmit={getSalaryDetails}>
            <h3>Salary Details</h3>
            <p>Hi {user.name}, Please enter you Salary Details</p>
            <div className="row mb-3">
                <label className="col-sm-4 form-label">Basic Salary</label>
                <input className="col-sm-8" type="number" value={user.basic} onChange={(e) => setUser({...user, basic:parseInt(e.target.value)})}/>
            </div>
            <div className="row mb-3">
                <label className="col-sm-4 form-label">HRA</label>
                <input className="col-sm-8" type="number" value={user.hra} onChange={(e) => setUser({...user, hra:parseInt(e.target.value)})}/>
            </div>
            <div className="row mb-3">
                <label className="col-sm-4 form-label">Variable Pay</label>
                <input className="col-sm-8" type="number" value={user.variable} onChange={(e) => setUser({...user, variable:parseInt(e.target.value)})}/>
            </div>
            <div className="row mb-3">
                <label className="col-sm-4 form-label">PF</label>
                <input className="col-sm-8" type="number" value={user.pf} onChange={(e) => setUser({...user, pf:parseInt(e.target.value)})}/>
            </div>
            <div className="row justifyContent">
                <button className="btn btn-secondary col-sm-3" type="button" onClick={prev}>Go Back</button>
                <button className="btn btn-primary btnColor col-sm-3" type="submit">Continue</button>
            </div>
        </form>
    )
}

export default SalaryDetails