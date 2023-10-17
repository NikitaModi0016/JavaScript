//Create an application with following roles:
//admin - gets full access
//subadmin - gets access to create/delete courses
//testprep - gets access to create/delete testes
// user- gets access to consume content


var user = "admin-w"
switch (user) {
    case "admin":
        console.log("You get the full access");
        break;
    case "subadmin":
        console.log("You get the create/delete courses");
        break;
        case "testprep":
            console.log("You get create/delete tests");
            break;
        case "user":
            console.log("You get the access to consume contents");
            break;    
    default:
        console.log("you are trail user");
        break;
}