import { checkPropTypes } from 'prop-types';
import styles from './Button.module.css';

function Button({text}){//
    return <button className={styles.btn}>{text}</button>
//js 오브젝트는btn을 안에 갖고있다->버튼의 class는 랜덤 class를 갖는다!
//고로 동일한 class이름을 , btn을 다른 파일 내에서도 사용할수있다!1
}//랜덤하게 보이는 클래스 이름을 만들어냄 !! 아주 쿨!

Button.checkPropTypes = { //npm i prop-types설치해야함!
    text : checkPropTypes.toString.isRequired, //text prop은 문자열만 받는다.
}
export default Button;