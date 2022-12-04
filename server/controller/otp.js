const router = require("express").Router();

router.get("/hello", async (req, res) => {
  try {
    return res.json({ message: "hello from otp router" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
//api for requestoing otp

router.post("/requestotp",async (req, res) => {
  try{
    const{phonenumber ,channel}= req.body;
    
    console.log(`otp sent on ${phonenumber} through ${channel}`);
  
  return res.json({
    success: true,
    message: `otp sent on ${phonenumber} through ${channel}`
  });
}

catch(error){
  return res.json({success: false,error:error.message});
}
});
//aoi for verifying otp and otp also come

router.post("/verifyotp",async(req,res)=>{
  try {
    const{phonenumber,otp}= req.body;
    console.log(phonenumber,otp);
    return res.json({
      success: true,
    })
    
  } catch (error) {
    return res.json({success: false, error: error});
  }
});


module.exports = router;