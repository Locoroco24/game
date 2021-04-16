import diamond from "../img/diamond.png";

function MeasureComponent() {
  return (
    <div className='measureSection'>
      <div className='measureSection__inner'>
        <div className='measureSection__diamond'>
          <img src={diamond} alt='Бриллиант' />
        </div>
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

export default MeasureComponent;