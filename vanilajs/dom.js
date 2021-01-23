// document.getElementById("foo").innerText="ubah";
const div=document.getElementsByClassName("foo");
console.log(div);

for (let index = 0; index < div.length; index++) {
    const element = div[index];
    console.log(element);
    
}