
import React from 'react';

import './css/MemorialProfileUi.css'
import ProfileCard from './ProfileCard';
import StorysUi from './StorysUi';
import MishnaiotUi from './MishnaiotUi';


function MemorialProfileUi({ profile }) {
    // console.log(profile);
    const countMishnaiot = (sedriMishna) => {
        let count = { learn: 0, masechet: 0 };

        sedriMishna.forEach((seder) => {
            let isSederLearn = false;
            seder.forEach((masechet) => {
                if (masechet.learn) {
                    isSederLearn = true;
                    count.learn++
                }
            })
            count.masechet = isSederLearn ? count.masechet + 1 : count.masechet;
        })
        return count
    }

    return (
        <div className='continer'>
            <div className='card-gird'>
                <ProfileCard profile={profile} countMishnaiot={countMishnaiot} />
            </div>
            <div className='storys-gird'>
                <StorysUi storys={profile.storys} />
            </div>
            <div className='mishnaiot-grid'>
                <MishnaiotUi mishnaiot={profile.mishnaiot} />
            </div>

        </div>
    )
}




export default MemorialProfileUi;