import {HAMMER_HIT, NEW_GAME, SCALE_MOVING, START_GAME} from "./types";

export const initialState = {
  BtnImgState: 'interactiveSection__btnImg',
  interactiveBtnState: {
    text: 'Новая игра!',
    style: 'interactiveSection__interactiveBtn'
  },
  hammerState: 'interactiveSection__hammerImg',
  robotState: 'interactiveSection__robotImg',
  title: {
    text: 'Привет!',
    style: 'interactiveSection__text'
  },
  subtitle: {
    text: 'Проверим твою силу!',
    style: 'interactiveSection__text'
  },
  scaleHeight: 0,
  score: 0,
  winEffect: {
    diamond: 'winEffect',
    background: 'measureSection__diamond'
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        BtnImgState: action.BtnImgState,
        interactiveBtnState: action.interactiveBtnState,
        hammerState: action.hammerState,
        robotState: action.robotState,
        title: action.title,
        subtitle: action.subtitle,
        score: action.score,
        winEffect: action.winEffect
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
        title: action.title,
        subtitle: action.subtitle,
        score: action.score
      }
    case NEW_GAME:
      return {
      ...state,
      interactiveBtnState: action.interactiveBtnState,
      robotState: action.robotState,
      title: action.title,
      subtitle: action.subtitle,
      winEffect: action.winEffect
    }
    default: return state
  }
}
