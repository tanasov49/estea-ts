import React, {useContext} from 'react';
import './AsideForm.scss'
import { ModalContext } from '../../../context/context';
import FrameSvg from '../../../images/svg/frame.svg';
function AsideForm() {
    const {values, errors, handleChange, hanldeSubmitForm, canSubmit} = useContext(ModalContext)
    return (
        <aside className='aside-form'>
            <div className="aside-form-text">
                <h2 className="aside-form-text__title">Prenumerera på information</h2>
                <p className="aside-form-text__subtitle">Anmäl dig för att få information om Estea AB.</p>
            </div>
            <form onSubmit={hanldeSubmitForm} className="form-info" noValidate>
                <input className='form-info__input form-info__input_name' type="text" name='name' value={values.name} onChange={(e) => handleChange(e)} placeholder='Your name' />
                <span className='form-info__error form-info__error_name'>{errors.name}</span>
                <input className='form-info__input form-info__input_email' type="email" name='email' value={values.email} onChange={(e) => handleChange(e)} placeholder='Email' />
                <span className='form-info__error form-info__error_email'>{errors.email}</span>
                <input className='form-info__input form-info__input_tel' type="tel" name='tel' value={values.tel} minLength={2} maxLength={11} onChange={(e) => handleChange(e)} placeholder='Phone number' />
                <span className='form-info__error form-info__error_tel'>{errors.tel}</span>
                <button className={canSubmit ? 'form-info__submit form-info__submit_enabled' : 'form-info__submit form-info__submit_disabled'} type='submit' disabled={!canSubmit}><FrameSvg/></button>
            </form>
        </aside>
    );
}

export default AsideForm;