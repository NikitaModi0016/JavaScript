/*
Define a function that can answer the role of a user.
A user can be following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep- with access to create/delete tests
user- consume all content
other- trail user.

Input: getUserRole(name,role)
*/

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `Hi ${name}, You have all access`;
        case "subadmin":
            return `Hi ${name}, You have access to create/delete courses`;
        case "testprep":
            return `Hi ${name}, You have access to create/delete tests`;
        case "user":
            return `Hi ${name}, You can consume all content`;
        default:
            return `Hi ${name}, You are a trial customer`;
    }
}

console.log(getUserRole("sayak", "user"));



