const check = document.querySelector('#cruise');
const cruiseline = document.querySelector('#cruiseline');
const dropoff = document.querySelector('#drop-off');
const dropPoint = document.querySelector('#drop-point')

check.addEventListener('change', () => {
    if (check.checked){
        cruiseline.innerHTML = `
         <label class="top">
              *Name of cruise line: <input type="text" id="cruisename" name="cruisename" required />
            </label>`
    }else{
        cruiseline.innerHTML = '';
    }
});

dropoff.addEventListener('change', () => {
    if (dropoff.checked){
        dropPoint.innerHTML = `
         <label class="top">
              *Dropoff location: <input type="text" id="drop-point" name="drop-point" required />
            </label>`
    }else{
        dropPoint.innerHTML = "";
    }
});