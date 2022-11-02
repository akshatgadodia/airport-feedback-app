export const initialState={
    isLoggedIn : false,
    userType : "",
    flightNumber :"",
    gate : "" 
} 

export const reducer=(state,action)=>{
    if(action.type==="Login")
    {
        //console.log(action.payload)
        return {
            isLoggedIn : true,
            userType : "user",
            flightNumber : action.payload.flightNumber,
            gate : action.payload.gate
        }
    }

}