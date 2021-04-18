import {connect} from "react-redux";
import diamond from "../img/diamond.png"
import winEffectImg from "../img/layer_glow.png"

function MeasureComponent({score, winEffect}) {

  let measureArray = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className='measureSection'>
      <div className='measureSection__inner'>
        <div className={winEffect.background}>
          <img src={diamond} alt='Бриллиант' className='measureSection__diamondImg' />
          <img src={winEffectImg} alt='Свечение' className={winEffect.diamond} />
        </div>
        {measureArray.map( ( item, index) => {
          if (index < Math.floor(score)) return <div className='measureSection__scaleItem_active' key={index} />
          return <div className='measureSection__scaleItem' key={index} />
        })
          .reverse()}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  score: state.score,
  winEffect: state.winEffect
})

export default connect(mapStateToProps)(MeasureComponent);