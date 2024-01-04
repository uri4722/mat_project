
import './css/MemorialProfileUi.css'
import ProfileCard from './ProfileCard';
import StoresUi from './StoresUi';
import MishnaiotUi from './MishnaiotUi';
import UserFormUi from './UserFormUi';
import { useState } from 'react';
import UserRegister from '../../../pages/UserRegister';


function MemorialProfileUi({
    profile,
    countMishnaiot,
    user,
    handleChangeMasechtot,
    handleChangeStores,
    handleChangeInput,
    handleSubmit,
    message,
    manager,
    handleDeleteStores
}) {

    const [registerDisplay, setRegisterDisplay] = useState(false);


    return (<>
        <div className='continer'>
            <div className='card-gird'>
                <ProfileCard profile={profile} countMishnaiot={countMishnaiot} />
            </div>
            <div className='stores-gird'>
                <StoresUi
                    stores={profile.stores}
                    handleChangeStores={handleChangeStores}
                    newStory={user.story}
                    manager={manager}
                    handleDeleteStores={handleDeleteStores}
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