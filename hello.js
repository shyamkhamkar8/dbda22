
var name="iacsd";
var data=89;
data=data+34;
status=false;

//JSON object

var contact={
           "firstname":"shyam",
           "lastname":"khamkar",
           "email":"shyamkhamkar8@gmail.com",
	   "age":47,

};

function getOrder(){
console.log("showing customers order");
}

function cancelOrder(){
console.log("cancelling order");
}

function processOrder(){
console.log("processing order");
}

processOrder();//invoking fuction


console.log("hello form application");
console.log(data);
console.log(contact);