import { FormWrapper } from "./FormWrapper";
type AccountForm={
    email:string,
    password:string,
}
type AccountFormProps=AccountForm&{
    updatedField:(field:Partial<AccountForm>)=>void
    
}
export function AccountForm({email,password,updatedField}:AccountFormProps){
    return(
        <FormWrapper title="Account Details">
            <label>Email</label>
            <input type="email" autoFocus required value={email} onChange={(e)=>updatedField({email:e.target.value})}/>
            <label>Password</label>
            <input type="password"  required value={password} onChange={(e)=>updatedField({password:e.target.value})}/>
            
        </FormWrapper>
    )
}