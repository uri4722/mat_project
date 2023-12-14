
import React from 'react';

import './css/MemorialProfileUi.css'
import ProfileCard from './ProfileCard';
import StorysUi from './StorysUi';


function MemorialProfileUi({ profile }) {
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
        console.log(count);
        return count
    }

    return (
        <div className='continer'>
            <ProfileCard profile={profile} countMishnaiot={countMishnaiot} />
            <StorysUi storys={profile.storys} />
        </div>
    )
}




export default MemorialProfileUi;