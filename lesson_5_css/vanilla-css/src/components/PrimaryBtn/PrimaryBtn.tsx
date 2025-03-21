import btnStyles from './PrimaryButton.module.css';
import globalBtnStyles from '../../css/global.module.css';

const PrimaryBtn = () => {
    return (
        <>
            <button className={ `${btnStyles.primaryBtn} ${globalBtnStyles.button} `}>Primary Button</button>
        </>
    );
}

export default PrimaryBtn;