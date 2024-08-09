let userrole ="admin";
let  accessLevel;
if(userrole==="admin")
{
    accessLevel = "Full access granted";
}
else if(userrole==="manager"){
    accessLevel = "limited access granted";
}
else{
    accessLevel = "no access granted";
}
console.log("Access Level:", accessLevel);