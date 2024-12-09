const jwt = require("jsonwebtoken");
const { ROLE_LEVELS } = require("../constants");
require('dotenv').config();

function authUser(req, res, next) {
  const token = req.cookies.token;
//   console.log(token);

  if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  // try {
      const {id} = jwt.verify(token, process.env.JWT_SECRET);
      console.log(id);
      res.status(200).json({ message: 'Valid token.' });
      
  //     req.user = decoded; // Store decoded user information in request object
  //     next(); // Proceed to the next middleware or route handler
  // } catch (error) {
  //     res.status(400).json({ message: 'Invalid token.' });
  // }
//   next();

}
function authRole(requiredRole) {

  return (req, res, next) => {
    
    const token = req.cookies.token;
    // console.log("token",token);
    
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }
    const { role,stateManager } = jwt.verify(token, process.env.JWT_SECRET);
    
    if (ROLE_LEVELS[role] < ROLE_LEVELS[requiredRole]) {
      return res.status(403).json({ message: "Access denied. You do not have permission." });
    }
    console.log("stateManager",stateManager);
    if(ROLE_LEVELS[role] >= ROLE_LEVELS["manager"] && stateManager !== "approved"){
      
      return res.status(403).json({ message: "Access denied. You need approved first." });
    }
    console.log("success");
    
    next();
  };
}
module.exports = { authUser, authRole };
