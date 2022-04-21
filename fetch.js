
let searchbtn=document.getElementById("search-btn")


async function data()
{
    document.getElementById("div1").innerHTML=" "
    let input=document.getElementById("content").value
let movies=await fetch(`https://www.omdbapi.com/?s=${input}&apikey=7880183f`)
let mov=await movies.json()
let finaldata=await mov.Search
console.log(finaldata)
finaldata.map((i)=>
{
    console.log(i)
    document.getElementById("div1").innerHTML +=
`<figure style="text-align=center">
<img src=${i.Poster} alt=""  />
<h1>${i.Title}</h1>
<h2>${i.Year}</h2>
</figure>`
})
}








 
