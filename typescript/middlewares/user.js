//method to validate user data
function validateUser(req, res, next) {
    try {
        if(req.body.name.length>2){
            next()
        }else{
            throw new Error("Name validation failed")
        }
    
    //   const result = schema.validate(req.body);
    //   if (result.error) {
    //     {
    //       return res.status(400).json({
    //         success: false,
    //         msg: result.error.details.map((i) => i.message).join(","),
    //       });
    //     }
    //   } else next();
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  function isHamid(req, res, next) {
    try {
        if(req.body.name=='hamid hussain'){
            next()
        }else{
            throw new Error("Name validation failed")
        }
    
    //   const result = schema.validate(req.body);
    //   if (result.error) {
    //     {
    //       return res.status(400).json({
    //         success: false,
    //         msg: result.error.details.map((i) => i.message).join(","),
    //       });
    //     }
    //   } else next();
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  module.exports = {
    validateUser,
    isHamid
  };