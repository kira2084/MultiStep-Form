import { FormWrapper } from "./FormWrapper";
type AddressForm={
    street:string,
    city:string,
    state:string,
    zip:string
}
type AddressFormProps=AddressForm&{
   updatedField:(field:Partial<AddressForm>)=>void
}
export function AddressForm({street,city,state,zip,updatedField}:AddressFormProps){
    return(
       <FormWrapper title="Address Details">
            <label>Street</label>
            <input type="text" autoFocus required value={street} onChange={(e)=>updatedField({street:e.target.value})}/>
            <label>City</label>
            <input type="text"  required value={city} onChange={(e)=>updatedField({city:e.target.value})}/>
            <label>State</label>
            <input type="text"  required value={state} onChange={(e)=>updatedField({state:e.target.value})}/>
            <label>Zip</label>
            <input type="text"  required value={zip} onChange={(e)=>updatedField({zip:e.target.value})}/>
        </FormWrapper>
    )
}