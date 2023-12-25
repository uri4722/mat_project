

import './css/MemorialProfileUi.css'
import ProfileCard from './ProfileCard';
import StorysUi from './StorysUi';
import MishnaiotUi from './MishnaiotUi';
import UserFormUi from './UserFormUi';
import { useState } from 'react';
import UserRegister from '../../../pages/UserRegister';


function MemorialProfileUi({
    profile,
    countMishnaiot,
    user,
    handleChangeMasechtot,
    handleChangeStorys,
    handleChangeInput,
    handleSubmit,
    message }) {

    const [registerDisplay, setRegisterDisplay] = useState(false);


    return (<>
        <div className='continer'>
            <div className='card-gird'>
                <ProfileCard profile={profile} countMishnaiot={countMishnaiot} />
            </div>
            <div className='storys-gird'>
                <StorysUi
                    storys={profile.storys}
                    handleChangeStorys={handleChangeStorys}
                    newStory={user.story}
                />
            </div>
            <div className='mishnaiot-grid'>
                <MishnaiotUi
                    user={user}
                    mishnaiot={profile.mishnaiot}
                    handleChangeMasechtot={handleChangeMasechtot}
                />
            </div>
            <div className='form-grid'>
                {user.masechtot.length > 0 || user.story.story ?
                    <UserFormUi
                        user={user}
                        handleChangeInput={handleChangeInput}
                        handleSubmit={handleSubmit}
                        message={message}
                        setRegisterDisplay={setRegisterDisplay}
                    /> : null}
            </div>
        </div >
        {registerDisplay && <div className="popup-continer">
            <UserRegister setRegisterDisplay={setRegisterDisplay} />
        </div>}
    </>
    )
}




export default MemorialProfileUi;