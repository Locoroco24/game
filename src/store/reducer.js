import {HAMMER_HIT, SCALE_MOVING, START_GAME} from "./types";

export const initialState = {
  BtnImgState: {style: 'interactiveSection__btnImg'},
  interactiveBtnState: {
    text: 'Новая игра!',
    style: 'interactiveSection__interactiveBtn'
  },
  hammerState: {style: 'interactiveSection__hammerImg'},
  robotState: {style: 'interactiveSection__robotImg'},
  textTitle: 'Привет!',
  textSubtitle: 'Проверим твою силу!',
  scaleHeight: {height: 0},
  score: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        interactiveBtnState: action.interactiveBtnState,
        hammerState: action.hammerState,
        textTitle: action.textTitle,
        textSubtitle: action.textSubtitle
      }
    case SCALE_MOVING:
      return { ...state, scaleHeight: action.scaleHeight}
    case HAMMER_HIT:
      return {
        ...state,
        BtnImgState: action.BtnImgState,
        interactiveBtnState: action.interactiveBtnState,
        hammerState: action.hammerState,
        robotState: action.robotState,
        textTitle: action.textTitle,
        textSubtitle: action.textSubtitle,
        score: action.score
      }
    default: return state
  }
}
