var type = -1;

function openFormWood() {
    document.getElementById("myForm").style.display = "block";
    type = 0;
  }
  
function openFormMetall() {
    document.getElementById("myForm").style.display = "block";
    type = 1;
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function closeblock() {
    document.getElementById("blockswood").style.display = "none";
    document.getElementById("blocksmetall").style.display = "none";
    document.getElementById('blocksclose').style.display = 'none';
    type = -1;
}
function calculate() {
    document.getElementById("myForm").style.display = "none";
    var total = document.getElementById("imp").value;
    if (total.replace(/\s/g, '').length === 0 || isNaN(total)){
        alert('Нужно писать число!');
        if (type == 0){
            openFormWood();
        }
        else if (type == 1){
            openFormMetall();
        }
        return
    }
    else{
        if (type == 0){
            document.getElementById('wood_out').innerHTML = 'Пиломатериалы; Скидка: 10%';
            document.getElementById('blockswood').style.display = 'flex';
            document.getElementById('blocksclose').style.display = 'flex';
            document.getElementById('beam_total').innerHTML = Math.floor(total/900) + ' шт';
            document.getElementById('board_total').innerHTML = Math.floor(total/1800) + ' шт';
        }
        else if (type == 1){
            document.getElementById('metall_out').innerHTML = 'Металлопрокат; Скидка: 30%';
            document.getElementById('blocksmetall').style.display = 'flex';
            document.getElementById('blocksclose').style.display = 'flex';
            document.getElementById('grid_total').innerHTML = Math.floor(total/350) + ' шт';
            document.getElementById('fittings_total').innerHTML = Math.floor(total/1400) + ' шт';
        }
    }  

}
