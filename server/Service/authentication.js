const crypto = require("crypto")

const cost = Math.pow(2, 20)
const blockSize = 8
const maxmem = 129 * cost * blockSize

/**
 * 
 * @param {string} password 
 * @returns {string} - hashed password with salt
 */
function hash(password) {
    console.log(`Password: ${password}`)
    const salt = crypto.randomBytes(32).toString("base64")
    console.log(`salt: ${salt}`)
    const hash = crypto.scryptSync(password, salt, 32, { cost, blockSize, maxmem }).toString("base64")
    console.log(`hash: ${hash}`)
    return `${hash}.${salt}`
}

/**
 * 
 * @param {string} password 
 * @param {string} hashedPassword
 * 
 * @returns {boolean}
 */
function validate(password, hashedPassword) {
    const [hash, salt] = hashedPassword.split(".")
    return hash === crypto.scryptSync(password, salt, 32, { cost, blockSize, maxmem }).toString("base64")
}

module.exports = { hash, validate};

// const db = [{ email: "uri12@gmail.com", password: hash("uri123") }];
// router.post("/signIn", (req, res) => {
//     console.log("signIn");

 
// })


// router.post("/register", (req, res) => {
//     console.log("register");
//     const { email, password } = req.body;
//     const user = db.find(user => user.email === email);
//     if (user) {
//         return res.status(409).send("User already exists");
//     }
//     db.push({ email, password: hash(password) });
//     console.log(db);
//     res.send("Registered");
   
// })


// router.post("/login", (req, res) => {
//     console.log("login");

//     const { email, password } = req.body;
//     const user = db.find(user => user.email === email);
//     if (!user) {
//         return res.status(401).send("User not found");
//     }
//     if (!validate(password, user.password)) {
//         return res.status(401).send("Incorrect password");
//     }
//     res.send("Logged in");
// })

