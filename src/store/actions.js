import {HAMMER_HIT, SCALE_MOVING, START_GAME} from "./types";

let scaleHeight = 0;
let intervalID;

export function buttonClick(event)  {

  const isGameActive = event.target.className.includes('_active');

  return async dispatch => {
    if (!isGameActive) {
      dispatch ({
        type: START_GAME,
        interactiveBtnState: {
          text: 'Удар!',
          style: 'interactiveSection__interactiveBtn_active'
        },
        hammerState: {style: 'interactiveSection__hammerImg_active'},
        textTitle: 'Жми на кнопку',
        textSubtitle: 'в нужный момент!'
      });

      let isIncrease = true;

      intervalID = setInterval(() => {
        if (scaleHeight < 142 && isIncrease) scaleHeight += 1;
        if (scaleHeight === 142 && isIncrease) isIncrease = false;
        if (scaleHeight > 0 && !isIncrease ) scaleHeight -= 1;
        if (scaleHeight === 0 && !isIncrease) isIncrease = true;
        dispatch({
          type: SCALE_MOVING,
          scaleHeight: {height: scaleHeight + 'px'}
        });
      }, 5);
    } else {
      clearInterval(intervalID)
      dispatch ({
        type: HAMMER_HIT,
        BtnImgState: {style: 'interactiveSection__btnImg_active'},
        interactiveBtnState: {style: 'interactiveSection__interactiveBtn_inactive'},
        hammerState: {style: 'interactiveSection__hammerImg_hit'},
        robotState: {style: 'interactiveSection__robotImg_active'},
        textTitle: '',
        textSubtitle: '',
        score: scaleHeight
      })
    }
  };
}