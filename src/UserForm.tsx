import { FormWrapper } from "./FormWrapper"
type UserData ={
    firstName:string,
    lastName:string,
    age:string,
    
}
type UserFormProps=UserData&{
    updatedField:(fields:Partial<UserData>)=>void
}
export function UserForm({firstName,lastName,age,updatedField}:UserFormProps,){
    return(
        <FormWrapper title="User Details">
            <label>FirstName</label>
            <input type="text" autoFocus required value={firstName} onChange={(e)=>updatedField({firstName:e.target.value})}/>
            <label>LastName</label>
            <input type="text"  required value={lastName} onChange={(e)=>updatedField({lastName:e.target.value})}/>
            <label>Age</label>
            <input type="number"  required min={1} value={age} onChange={(e)=>updatedField({age:e.target.value})}/>
        </FormWrapper>      
    )
}