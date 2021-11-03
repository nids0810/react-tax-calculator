const InvestmentDetails = ({ user, next, prev, getInvestmentAmt }) => {

    const getInvestmentDetails = (e) => {
        e.preventDefault()

        if(user.investment === 0) {
            alert("Please enter valid information")
            return
        }
        next()
    }

    return(
        <form onSubmit={getInvestmentDetails}>
            <h3>Investment Details</h3>
            <div className="row mb-3">
                <label className="col-sm-4 form-label">80 C Investment</label>
                <input className="col-sm-8" type="number" min="0" value={user.investment} onChange={getInvestmentAmt}></input>
            </div>
            <p className="row mb-3 info">Maximum Exemption Rs {user.maxInvest}. You can still save Rs {((150000 - (user.pf * 12)) - user.maxInvest)}</p>
            <div className="row justifyContent">
                <button className="btn btn-secondary col-sm-3" type="button" onClick={prev}>Go Back</button>
                <button className="btn btn-primary btnColor col-sm-3" type="submit">Continue</button>
            </div>
        </form>
    )
}

export default InvestmentDetails