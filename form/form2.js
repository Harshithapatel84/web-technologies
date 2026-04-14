function validateForm()
{
    let name=document.Registrationform.userName.value;
    let mail=document.Registrationform.mailName.value;
    let address=document.Registrationform.addressname.value;
    let phNumber=document.Registrationform.numberName.value;
    let check=document.Registrationform.name.checked;

    if(name.length<3)
    {
        alert('name is too small')
        return false
    }


if(!mail.includes ("@"))
{
    alert('must contail @')
    return false;
}

if(address.length>30)
{
    alert('address shoul be within 30 characters')
    return false
}

if(phNumber.length<10)
{
   alert('invalid number')
    return false;
}
if(!check)
{
    alert('select above')
    return false;
}
alert('Form is submitted')
return true;
}