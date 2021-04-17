import diamond from "../img/diamond.png";
import {connect} from "react-redux";

function MeasureComponent({score}) {

  return (
    <div className='measureSection'>
      <div className='measureSection__inner'>
        <div className='measureSection__diamond'>
          <img src={diamond} alt='Бриллиант' />
        </div>
        {}
        <div className='measureSection__scaleItem'/>
        <div className='measureSection__scaleItem'/>
        <div className='measureSection__scaleItem'/>
        <div className='measureSection__scaleItem'/>
        <div className='measureSection__scaleItem'/>
        <div className='measureSection__scaleItem'/>
        <div className='measureSection__scaleItem'/>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  score: state.score
})

export default connect(mapStateToProps)( MeasureComponent);