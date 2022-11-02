export const initialState={
    user:false
} 

export const reducer=(state,action)=>{
    if(action.type==="Login")
    {
        return {user:true}
    }

}