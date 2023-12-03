const axios = require('axios');


async function get() {
    // console.log(axios);
    const URL = " http://www.sefaria.org/api/texts/Mishnah_Shabbat.1"
    const res = await axios.get(URL);
    console.log(res.data.he);
}
get()



