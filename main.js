const pElement = document.querySelector("#psyStr");
const textBoxEl = document.querySelector("#textbox");
const convertBtnEl = document.querySelector("#convert-button");
const containerEl = document.querySelector(".container");



let changedStr;
const finalArr = new Array();


const textChanger = function() {
    const normalStr = textBoxEl.value;
    const strArr = normalStr.split(" ");
    
    
    for (const word of strArr) {
        const wordLen = word.length;
        const firstHalf = word.slice(0, wordLen / 2).bold();
        const secondtHalf = word.slice(wordLen / 2);
        changedStr = firstHalf.concat("", secondtHalf);
        finalArr.push(changedStr);
    }

    const bionicTag = document.createElement("p");
    bionicTag.classList.add("psyStr");
    bionicTag.innerHTML = finalArr.join(" ");
    // return pElement.innerHTML = finalArr.join(" ");
    containerEl.appendChild(bionicTag);
    textBoxEl.value = " "
}

convertBtnEl.addEventListener("click", textChanger);

// textChanger("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut repudiandae voluptate perspiciatis voluptates in, fugiat recusandae! Iste vel dignissimos sequi, eum, aut quae quam, reiciendis possimus fugiat similique officia?")

