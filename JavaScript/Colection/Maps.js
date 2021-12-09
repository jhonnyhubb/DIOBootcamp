
function getAdmins(map){
    let admins = [];
    
    for([key, value] of map){
        
        if(value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set("Luiz", "Admin");
users.set("Joana", "Admin");
users.set("Ana", "user");
users.set("Poliana", "user");
users.set("Pedro", "user");

console.log(getAdmins(users));