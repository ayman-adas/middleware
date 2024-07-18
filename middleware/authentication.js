const jwt = require("jsonwebtoken");

const authentication = (req,res, next)=>{
  console.log(req.headers.authorization.split(" "));
  try{
    if(!req.headers.authorization){
     return  res.status(403).json({
      success:false,
      message:'Forbidden'
     })
    }
    const token = req.headers.authorization.split(" ").pop();

    jwt.verify(token, process.env.SECRET_KEY,(err,result)=>{
      if (err) {
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      } else {
        req.token = result;
        next();
      }
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  }
}

module.exports = authentication;