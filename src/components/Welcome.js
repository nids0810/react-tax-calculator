import piggu from '../assets/piggy.png'

const Welcome = ({ next }) => {
    return(
    <div className="welcomePosition">
        <img src={piggu} alt="piggy"/>
        <h6 style={{margin: '15px 0 20px 0'}}>Start your Tax Calculation here!</h6>
        <button className="btn btn-primary btnColor" type="button" onClick={next}>Let's Begin</button>
    </div>)
}

export default Welcome