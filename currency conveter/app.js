const baseUrl = "https://exchange-rateapi.com/api/v1/rates?source="
const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector (".from select");
const toCurr = document.querySelector (".to select")

for (let select of dropDown) {
    for (val in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = val ;
        newOption.value = val ;
        if (select.name === "from" && val === "USD" ) {
            newOption.selected = "selected";
        }else if (select.name === "to" && val === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
        
    }

    select.addEventListener ("change", (evt) => {
        updateFlag(evt.target)
    })
}
   
const updateFlag = (element) => {
    let currCode = element.value;
    let countrycode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}

btn.addEventListener("click" , async (evt) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log (amtVal);
    if(amtVal ==="" || amtVal < 1) {
        amtVal = 1 ;
        amount.value = 1;
    }
    console.log (fromCurr , toCurr);
    const url = `${baseUrl}/${fromCurr}/&target=/${toCurr}`
    const response = await fetch (url);
    let data = response.json
    console.log (data)



})