const textareaEl = document.getElementById("textarea")
let charCount = document.getElementById("character count")
let remainingCount = document.getElementById("character remaining")
textareaEl.addEventListener("keyup", ()=>
{
    updateCounter()
})
updateCounter()

function updateCounter()
{
    charCount.innerText = textareaEl.value.length
    remainingCount.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length

}
