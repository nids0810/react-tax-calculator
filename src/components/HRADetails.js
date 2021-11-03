const HRADetails = ({ user, next, prev, calculateHRAComponents }) => {
    const getHRADetails = (e) => {
        e.preventDefault()

        if(user.rent === 0 || user.rent === "") {
            alert("Please enter valid information")
            return
        }
        next()
    }

    return(
        <form onSubmit={getHRADetails}>
            <h3>HRA Calculation</h3>
            <div className="row mb-3">
                <label className="col-sm-4 form-label">Enter Monthly Rent</label>
                <input className="col-sm-8" type="number" min="0" value={user.rent} onChange={calculateHRAComponents}></input>
            </div>
            <div className="row mb-3"><label className="col-sm-4 form-label">Actual HRA: </label><p className="col-sm-8">{user.hra * 12}</p></div>
            <div className="row mb-3"><label className="col-sm-4 form-label">Rent-10% Basic: </label><p className="col-sm-8">{user.tenOfBasic}</p></div>
            <div className="row mb-3"><label className="col-sm-4 form-label">40% of Basic :</label><p className="col-sm-8">{user.basic * 12 * 0.4}</p></div>
            <hr/>
            <div className="row mb-3"><label className="col-sm-4 form-label">Exempted HRA:</label><p className="col-sm-8">{user.calculatedHRA}</p></div>
            <p className="row mb-3 info">You can still save Rs {((user.hra * 12) - user.calculatedHRA)}</p>
            <div className="row justifyContent">
                <button className="btn btn-secondary col-sm-3" type="button" onClick={prev}>Go Back</button>
                <button className="btn btn-primary btnColor col-sm-3" type="submit">Continue</button>
            </div>
        </form>
    )
}

export default HRADetails