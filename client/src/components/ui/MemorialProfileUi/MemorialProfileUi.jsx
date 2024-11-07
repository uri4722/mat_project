
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
    isUserConnected,
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
                    masechtot={user.masechtot}
                    mishnaiot={profile.mishnaiot}
                    handleChangeMasechtot={handleChangeMasechtot}
                />
            </div>
            <div className='form-grid'>
                {user.masechtot.length > 0 || user.story.story ?
                    <UserFormUi
                        user={user}
                        isUserConnected={isUserConnected}
                        handleChangeInput={handleChangeInput}
                        handleSubmit={handleSubmit}
                        message={message}
                        setRegisterDisplay={setRegisterDisplay}
                    /> : null}
            </div>
        </div >
        {registerDisplay && <UserRegister setRegisterDisplay={setRegisterDisplay} theme='success'/>}
    </>
    )
}




export default MemorialProfileUi;