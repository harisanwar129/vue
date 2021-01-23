const person={
    firstName:"kimi",
    lastName:"Hime",
    fullName:function () {
        return `${this.firstName} ${this.lastName}`;

    },
    weight:69,
    height:172,
    weightIdeal:function () {
        
    const heightMinus100=this.height-100;
    return heightMinus100-(heightMinus100*10)/100;
        
    },

needDiet:function(){
  const weightIdeal=this.weightIdeal();
  if (weightIdeal-5>this.weight) 
  return (
      "yout need more protein, need more"+(weightIdeal-this.weight)+"Kg"
      );
  else if (weightIdeal*5<this.weight)
  return (
   "you need a mayo diet, NEED REDUCE weight: "+(this.weight-weightIdeal)+"kg");
  return "you are in a good shape";  
},
};

console.log(person.fullName());
console.log(person.weightIdeal());
console.log(person.needDiet());

// const countries={
//     ID:{
//         province:["bali","jawa timur","jawa tengah"],
//         city:["sinagara","gianyar","negare","badung"],
//     },
//     TH:{
//         province:["satu"],
//     },
// };
// console.log(countries?.TH?.province??"NOt found");