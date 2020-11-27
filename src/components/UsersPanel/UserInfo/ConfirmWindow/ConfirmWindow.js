import React from 'react';
import './ConfirmWindow.scss'

const ConfirmWindow = ({ deleteUser, setToConfirm, user }) => {

    const handleOnYes = () => {
        deleteUser(user);
        setToConfirm(false);
    }

    const handleOnNo = () => {
        setToConfirm(false);
    }

    return(
        <div className="confirmWindow-background">
            <div className="confirmWindow-main">
                <div className="confirmWindow-header">UWAGA!</div>
                <div className="confirmWindow-contents">
                    <p>Czy chcesz usunąć użytkownika: {user.name}?</p>
                    <div className="confirmWindow-buttons">
                        <button className="confirmWindow-button-yes" onClick={handleOnYes}>Tak</button>
                        <button className="confirmWindow-button-no" onClick={handleOnNo}>Nie</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmWindow;