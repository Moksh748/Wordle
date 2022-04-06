let keypad = document.getElementById('keypad');
let qwerty = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
let alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'
]
qwerty.forEach(r => {
    r.forEach(l => {
        keypad.innerHTML += `<span id=${l} style="display: inline-block; width: 2vw;">${l}</span>`
    })
    keypad.innerHTML += '<br><br>'
})
let current_input=1
let current_attempt=1
let currennt_id= current_input.toString();+current_attempt.toString;

const update=()=>{
let current_id= current_input.toString();+current_attempt.toString;
}
let game_status="playing";
document.getElementById(current_id).focus;
document.getElementById(currennt_id).disabled=false;

window.addEventListener('keydown',(e)=>{
  if((alphabets.includes(e.key.toUpperCase())) && (game_status ==="playing")){
      let input=document.getElementById(currennt_id).value=e.key.toUpperCase();
  }
  if (currentInput != 5) {
    input.disabled = true
    currentInput++
    updateCurrentId()
    document.getElementById(currentInputId).disabled = false
    setTimeout(() => {
        document.getElementById(currentInputId).focus()
    }, 100)
}
} )