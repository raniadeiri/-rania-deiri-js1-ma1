1

const cat= {
    complain: "mew",
    catSound: function() {
        console.log(this.complain);
    }
};



cat.catSound();


2


const heading = document.querySelector("h3");
console.log(heading.innerHTML);
heading.innerHTML = "<h3>Updated heading</h3>";

3
 

const h3 = document.querySelector("h3");
   console.log(h3);

   h3.style.fontSize = "2em";
  
4


const paragraphs= document.querySelectorAll("p");
console.log(paragraphs);

   for (let i = 0; i < paragraphs.length; i++) {
       
   paragraphs[i].style.color = "red";
} 

6


const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML =  "<p>New paragraph</p>";

 
7


function myFunction  (list) {
 for(let i = 0; i < list.length; i++) {
        console.log(name[i]);
} }

    myFunction(cats);

8


function createCats.  (cats) {
 for(let i = 0; i < list.length; i++) {
     createCats = createCats + "<div>" + cats[i] + "</div>";
        console.log(name[i]);
} }

    myFunction(cats);





















