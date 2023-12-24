

import './css/MemorialProfileUi.css'
import ProfileCard from './ProfileCard';
import StorysUi from './StorysUi';
import MishnaiotUi from './MishnaiotUi';
import UserFormUi from './UserFormUi';


function MemorialProfileUi({
    profile,
    countMishnaiot,
    user,
    handleChangeMasechtot,
    handleChangeStorys,
    handleChangeInput,
    handleSubmit,
    message }) {



    return (
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
                    /> : null}
            </div>


        </div >
    )
}




export default MemorialProfileUi;