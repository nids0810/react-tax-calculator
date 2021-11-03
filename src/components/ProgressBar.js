const ProgressBar = ({ counter }) => {
    const calPercentage = Math.round((counter-1)/5 * 100)

    return (
      <div className="progress row" style={{marginBottom: '30px'}}>
        <div
          className="progress-bar" 
          style={{width: calPercentage + '%'}}
          role="progressbar"
          aria-valuenow={calPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
}

export default ProgressBar