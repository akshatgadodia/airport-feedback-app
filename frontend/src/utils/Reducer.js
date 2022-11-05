export const initialLoggedInDetails={
    isLoggedIn : true,
    userType : "",
    flightNumber :"",
    gate : "" 
} 

export const reducer=(state,action)=>{
    if(action.type==="UserLogin")
    {
        //console.log(action.payload)
        return {
            isLoggedIn : true,
            userType : action.payload.type,
            flightNumber : action.payload.flightNumber,
            gate : action.payload.gate
        }
    }
    if(action.type==="UserLogout")
    {
        //console.log(action.payload)
        return {
            isLoggedIn : false,
        }
    }

}