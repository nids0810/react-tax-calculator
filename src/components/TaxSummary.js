import { FaEdit } from 'react-icons/fa'

const handleNaN = (val) => {
    if(isNaN(val)) {
        val = 0
    }
    return val
}

const TaxSummary = ({ user, counter, setCounter }) => {
    return(
        <div className="summaryPage">
            <h3>Tax Summary</h3>
            <div className={`summarySection row ${counter === 2 ? 'highlighted': ''}`}>
                <span className="col-sm-10"><b>User Details</b></span><FaEdit className="col-sm-2" onClick={() => setCounter(2)}/>
                <span className="col-sm-6">Name:</span><span className="col-sm-6">{user.name}</span>
                <span className="col-sm-6">Age:</span><span className="col-sm-6">{handleNaN(user.age)}</span>
                <span className="col-sm-6">Gender:</span><span className="col-sm-6">{user.gender}</span>
            </div>
            <div className={`summarySection row ${counter === 3 ? 'highlighted': ''}`}>
                <span className="col-sm-10"><b>Salary Details</b></span><FaEdit className="col-sm-2" onClick={() => setCounter(3)}/>
                <span className="col-sm-6">Basic Salary:</span><span className="col-sm-6">{handleNaN(user.basic).toLocaleString()}</span>
                <span className="col-sm-6">HRA:</span><span className="col-sm-6">{handleNaN(user.hra).toLocaleString()}</span>
                <span className="col-sm-6">Variable Pay:</span><span className="col-sm-6">{handleNaN(user.variable).toLocaleString()}</span>
                <span className="col-sm-6">PF:</span><span className="col-sm-6">{handleNaN(user.pf).toLocaleString()}</span>
            </div>
            <div className={`summarySection row ${counter === 4 ? 'highlighted': ''}`}>
                <span className="col-sm-10"><b>HRA Details</b></span><FaEdit className="col-sm-2" onClick={() => setCounter(4)}/>
                <span className="col-sm-6">Exempted HRA:</span><span className="col-sm-6">{handleNaN(user.calculatedHRA).toLocaleString()}</span>
            </div>
            <div className={`summarySection row ${counter === 5 ? 'highlighted': ''}`}>
                <span className="col-sm-10"><b>Investment Details</b></span><FaEdit className="col-sm-2" onClick={() => setCounter(5)}/>
                <span className="col-sm-6">Investment:</span><span className="col-sm-6">{handleNaN(user.investment).toLocaleString()}</span>
            </div>
            <div className={`summarySection row ${counter === 6 ? 'highlighted': ''}`}>
                <span className="col-sm-10"><b>Tax Details</b></span><FaEdit className="col-sm-2" onClick={() => setCounter(6)}/>
                <span className="col-sm-6">Gross Income:</span><span className="col-sm-6">{handleNaN(user.grossIncome).toLocaleString()}</span>
                <span className="col-sm-6">Non Taxable Income:</span><span className="col-sm-6">{handleNaN(user.nonTaxableIncome).toLocaleString()}</span>
                <hr/>
                <span className="col-sm-6">Taxable Income:</span><span className="col-sm-6">{handleNaN(user.taxableIncome).toLocaleString()}</span>
                <span className="col-sm-6">Tax Payable:</span><span className="col-sm-6">{handleNaN(user.taxpayable).toLocaleString()}</span>
                <span className="col-sm-6">Educational Cess:</span><span className="col-sm-6">{handleNaN(user.eCess).toLocaleString()}</span>
                <hr/>
                <span className="col-sm-6">Total Income Tax:</span><span className="col-sm-6">{handleNaN(user.totalIncomeTax).toLocaleString()}</span>
            </div>
        </div>
    )
}

export default TaxSummary