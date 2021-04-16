import scale from "../img/scale.png";
import button from "../img/button.png";
import hammer from "../img/hammer.png";
import robot from "../img/robot_1.png";

function InteractiveComponent() {
  return (
    <div className='interactiveSection'>
      <div className='interactiveSection__scale'>
        <img src={scale} alt='Шкала' className='interactiveSection__scaleImg' />
        <div className='interactiveSection__scaleLevel' />
      </div>
      <img src={robot} alt='Робот' className='interactiveSection__robotImg' />
      <div className='interactiveSection__inner'>
        <img src={button} alt='Кнопка' className='interactiveSection__btnImg' />
        <p className='interactiveSection__text'>Привет! Проверим твою силу</p>
        <button className='interactiveSection__interactiveBtn'>Новая игра</button>
        <img src={hammer} alt='Молоток' className='interactiveSection__hammerImg' />
      </div>
    </div>
  );
}

export default InteractiveComponent;
