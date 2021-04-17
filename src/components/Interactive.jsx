import scale from "../img/scale-1.png";
import button from "../img/button.png";
import hammer from "../img/hammer.png";
import {connect} from "react-redux";
import {buttonClick} from "../store/actions";

function InteractiveComponent({
    BtnImgState,
    interactiveBtnState,
    hammerState,
    robotState,
    textTitle,
    textSubtitle,
    scaleHeight,
    buttonClick
  }) {

  return (
    <div className='interactiveSection'>
      <div className='interactiveSection__scale'>
        <img src={scale} alt='Шкала' className='interactiveSection__scaleImg' />
        <div className='interactiveSection__scaleLevel' style={scaleHeight} />
      </div>
      <div className={robotState.style} />
      <div className='interactiveSection__inner'>
        <div className={BtnImgState.style} />
        <p className='interactiveSection__text'>{textTitle}</p>
        <p className='interactiveSection__text'>{textSubtitle}</p>
        <button
          className={interactiveBtnState.style}
          onClick={buttonClick}
        >
          {interactiveBtnState.text}
        </button>
        <img src={hammer} alt='Молоток' className={hammerState.style} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  BtnImgState: state.BtnImgState,
  interactiveBtnState: state.interactiveBtnState,
  hammerState: state.hammerState,
  robotState: state.robotState,
  textTitle: state.textTitle,
  textSubtitle: state.textSubtitle,
  scaleHeight: state.scaleHeight
})

const mapDispatchToProps = {
  buttonClick
}

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveComponent);
