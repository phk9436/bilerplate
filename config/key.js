process.env.NODE_ENV === 'production' ? //환경변수
 module.exports=require("./prod") : 
 module.exports=require("./dev")