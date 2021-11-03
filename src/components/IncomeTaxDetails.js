import { useEffect } from "react"

const IncomeTaxDetails = ({ user, getTaxDetails, prev }) => {

    useEffect(() => {
        getTaxDetails()
    }, []);

    const getIncomeTaxDetails = (e) => {
        e.preventDefault()
        alert('You calculated tax is Rs ' + user.totalIncomeTax)
    }

    return(
        <form onSubmit={getIncomeTaxDetails}>
            <h3>Income Tax Calculation</h3>
            <div className="row mb-3"><label className="col-sm-4 form-label">Taxable Income :</label><p className="col-sm-8">{user.taxableIncome}</p></div>
            <div className="row mb-3"><label className="col-sm-4 form-label">Tax Payable :</label><p className="col-sm-8">{user.taxpayable}</p></div>
            <div className="row mb-3"><label className="col-sm-4 form-label">Educational Cess :</label><p className="col-sm-8">{user.eCess}</p></div>
            <hr/>
            <div className="row mb-3"><label className="col-sm-4 form-label">Total Income Tax :</label><p className="col-sm-8">{user.totalIncomeTax}</p></div>
            <div className="row justifyContent">
                <button className="btn btn-secondary col-sm-3" type="button" onClick={prev}>Go Back</button>
                <button className="btn btn-primary btnColor col-sm-3" type="submit">Finish</button>
            </div>
        </form>
    )
}

export default IncomeTaxDetails