export function AgeValidation(){
    const age=10
    const n=18
    // ------If Else condition------
    if (age>=n){
    return(
        <>
            <h2>You are {age} years old and Eligible for voting</h2>
        </>    
    )
    }
    return(
        <>
            {age==2?<p className="color">you are child</p>:<p className="color">You are not child</p>}
            <h2>You are {age} years old and Not Eligible for voting</h2>
        </>    
    )
}