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
    title,
    subtitle,
    scaleHeight,
    buttonClick
  }) {

  return (
    <div className='interactiveSection'>
      <div className='interactiveSection__scale'>
        <img src={scale} alt='Шкала' className='interactiveSection__scaleImg' />
        <div className='interactiveSection__scaleLevel' style={{height: scaleHeight}} />
      </div>
      <div className={robotState} />
      <div className='interactiveSection__inner'>
        <div className={BtnImgState} />
        <p className={title.style}>{title.text}</p>
        <p className={subtitle.style}>{subtitle.text}</p>
        <button
          className={interactiveBtnState.style}
          onClick={buttonClick}
        >
          {interactiveBtnState.text}
        </button>
        <img src={hammer} alt='Молоток' className={hammerState} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  BtnImgState: state.BtnImgState,
  interactiveBtnState: state.interactiveBtnState,
  hammerState: state.hammerState,
  robotState: state.robotState,
  title: state.title,
  subtitle: state.subtitle,
  scaleHeight: state.scaleHeight
})

const mapDispatchToProps = {
  buttonClick
}

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveComponent);
