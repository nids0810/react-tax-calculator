import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import UserDetails from './components/UserDetails';
import SalaryDetails from './components/SalaryDetails';
import HRADetails from './components/HRADetails';
import InvestmentDetails from './components/InvestmentDetails';
import IncomeTaxDetails from './components/IncomeTaxDetails';
import TaxSummary from './components/TaxSummary';
import Footer from './components/Footer';
import taxSlab from './taxSlab.json';

function App() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    gender: "Female",
    rent: 0,
    tenOfBasic: 0,
    basic: 0,
    hra: 0,
    variable: 0,
    pf: 0,
    calculatedHRA: 0,
    investment: 0,
    maxInvest: 0,
    stdDeduction: 50000,
    profTax: 2400,
    grossIncome: 0,
    nonTaxableIncome: 0,
    taxableIncome: 0,
    eCess: 0,
    taxpayable: 0,
    totalIncomeTax: 0
  });

  const [counter, setCounter] = useState(1)

  const next = () => {
    setCounter(counter + 1)
  }

  const prev = () => {
    setCounter(counter - 1)
  }

  // Get HRA calculation
  const calculateTenOfBasic = (rent, annualbasic) => {
    let tob = rent*12 - 0.1 * annualbasic
    if(isNaN(tob)) {
        return 0
    } else if(tob < 0) {
        return 0
    } else {
        return tob
    }
  }
  const calculateHRAComponents = (e) => {
    let rentVal = e.target.value
    const tenOfBasic = Math.round(calculateTenOfBasic(rentVal, (user.basic * 12)))
    const calculatedHRA = Math.round(Math.min((user.hra * 12), tenOfBasic, (0.4 * user.basic * 12)))
    setUser({...user, rent:rentVal, tenOfBasic, calculatedHRA})
  }

  // Investment Calculation
  const getInvestmentAmt = (e) => {
    let investedAmt = e.target.value
    const investmentAfterPf = 150000 - (user.pf * 12)
    const maxExempted = investedAmt > investmentAfterPf ? investmentAfterPf : investedAmt
    setUser({...user, investment:investedAmt, maxInvest:Number(maxExempted)})
  }

  const getTaxDetails = () => {
    const grossIncome = (user.basic + user.hra + user.variable) * 12
    const nonTaxableIncome = user.pf*12 + user.calculatedHRA + user.maxInvest + user.stdDeduction + user.profTax
    const taxableIncome = grossIncome - nonTaxableIncome
    const taxpayable = taxCalculation(taxableIncome)
    const eCess = Math.round(0.3 * taxpayable)
    const totalIncomeTax = taxpayable + eCess

    setUser({...user, grossIncome, nonTaxableIncome, taxableIncome, taxpayable, eCess, totalIncomeTax})
  }

  const taxCalculation = (amount) => {
    let tax = 0
    for(let obj of taxSlab) {
      if(obj.lowerlimit < amount  && amount <= obj.upperlimit) {
        tax = obj.rate * (amount - obj.lowerlimit) + obj.fixedrate
      }
    }
    return Math.round(tax)
  }

  return (
    <div className="App">
      {counter === 1 && <Welcome next={next}/>}
      <div className="leftContainer">
        {counter === 2 && <UserDetails user={user} setUser={setUser} next={next} prev={prev}/>}
        {counter === 3 && <SalaryDetails user={user} setUser={setUser} next={next} prev={prev}/>}
        {counter === 4 && <HRADetails user={user} next={next} prev={prev} calculateHRAComponents={calculateHRAComponents}/>}
        {counter === 5 && <InvestmentDetails user={user} next={next} prev={prev} getInvestmentAmt={getInvestmentAmt}/>}
        {counter === 6 && <IncomeTaxDetails user={user} getTaxDetails={getTaxDetails} prev={prev}/>}
      </div>
      <div className="rightContainer">
        {counter !== 1 && <TaxSummary user={user} counter={counter} setCounter={setCounter}/>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
