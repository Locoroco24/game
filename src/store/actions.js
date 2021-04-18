import {HAMMER_HIT, NEW_GAME, SCALE_MOVING, START_GAME} from "./types";

let scaleHeight = 0;
let intervalID;

export function buttonClick(event)  {

  const isGameActive = event.target.className.includes('_active');

  return async dispatch => {
    if (!isGameActive) {
      dispatch ({
        type: START_GAME,
        BtnImgState: 'interactiveSection__btnImg',
        interactiveBtnState: {
          text: 'Удар!',
          style: 'interactiveSection__interactiveBtn_active'
        },
        hammerState: 'interactiveSection__hammerImg_active',
        robotState: 'interactiveSection__robotImg',
        title: {
          text: 'Жми на кнопку',
          style: 'interactiveSection__text'
        },
        subtitle: {
          text: 'в нужный момент!',
          style: 'interactiveSection__text'
        },
        score: 0,
        winEffect: {
          diamond: 'winEffect',
          background: 'measureSection__diamond'
        }
      });

      let isIncrease = true;

      intervalID = setInterval(() => {
        if (scaleHeight < 142 && isIncrease) scaleHeight += 1;
        if (scaleHeight === 142 && isIncrease) isIncrease = false;
        if (scaleHeight > 0 && !isIncrease ) scaleHeight -= 1;
        if (scaleHeight === 0 && !isIncrease) isIncrease = true;
        dispatch({
          type: SCALE_MOVING,
          scaleHeight: scaleHeight + 'px'
        });
      }, 10);
    } else {
      clearInterval(intervalID)
      dispatch ({
        type: HAMMER_HIT,
        BtnImgState: 'interactiveSection__btnImg_active',
        interactiveBtnState: {style: 'interactiveSection__interactiveBtn_inactive'},
        hammerState: 'interactiveSection__hammerImg_hit',
        robotState: 'interactiveSection__robotImg_active',
        title: {
          text: '',
          style: 'interactiveSection__text'
        },
        subtitle: {
          text: '',
          style: 'interactiveSection__text'
        },
        score: scaleHeight / 20
      });
      setTimeout(() => {
        if (scaleHeight / 20 < 7) {
          dispatch({
            type: NEW_GAME,
            interactiveBtnState: {
              text: 'Новая игра!',
              style: 'interactiveSection__interactiveBtn'
            },
            robotState: 'interactiveSection__robotImg_active',
            title: {
              text: 'Неплохо!',
              style: 'interactiveSection__text'
            },
            subtitle: {
              text: 'Попробуй еще раз.',
              style: 'interactiveSection__text'
            },
            winEffect: {
              diamond: 'winEffect',
              background: 'measureSection__diamond'
            }
          });
        } else {
          dispatch({
            type: NEW_GAME,
            interactiveBtnState: {
              text: 'Новая игра!',
              style: 'interactiveSection__interactiveBtn'
            },
            robotState: 'interactiveSection__robotImg_onWin',
            title: {
              text: 'ВОТ ЭТО СИЛА!',
              style: 'interactiveSection__text_onWIn'},
            subtitle: {
              text: 'Ты выбил главный приз!',
              style: 'interactiveSection__text_onWIn'
            },
            winEffect: {
              diamond: 'winEffect_active',
              background: 'measureSection__diamond_winEffect'
            }
          });
        }
        scaleHeight = 0
      }, 800);
    }
  };
}