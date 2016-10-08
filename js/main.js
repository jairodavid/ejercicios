var fisr_name = "jairo";
var last_name = "coronado";
var full_name = fisr_name + " " + last_name;
var name = String();


console.log(full_name);

name = name.concat(fisr_name);
console.log(name);
name = name.concat(" ",last_name);
console.log(name);
str = "str ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
console.log(str.length);
var comilla = '\'';
console.log(comilla);
str = str.replace("e","a").replace("i","a").replace("o","a").replace("u","a");


String.jiberish = function(str){
  if(!str){
    str = this;
  }
  var i=0;
  for(i = 0; i < str.length; i++){
    if (str[i]==="i" || str[i]==="o" || str[i]==="e" || str[i]==="u"){
    str = str.replace(str[i],"a");
      }
    }
    return str;
};

  var amiguita = String.jiberish("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  console.log(amiguita);

  String.prototype.jiberish = String.jiberish;
  console.log("la cucaracha ya no puede caminar".jiberish());

var ar1 = [1,2,3,4,5];
var ar2 = [6,7,8,9,10];
var ar3 = ar1.concat(ar2);
console.log(ar3);

ar3.forEach(function(elemet,index){
console.log("index " + " " + index + " "+ "elemet " + " " + elemet);

});
