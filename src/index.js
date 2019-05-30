'use strict';
import {mass} from "../src/data";



window.onload = function () {


    var table = document.getElementById('tabs'),
        count = 1,
        select = document.getElementById('select1'),
        selec = document.getElementById('select2');

    giveSelect1(select, mass)
    loadTable(table, mass);


    $(".btn").on("click", function () {

        let me = $(this).attr("id");

            switch (true) {

                case me == 'client' && count == 1 :
                    mass.sort((a, b) => sortUp(a.client, b.client))
                    break;
                case me == 'client' && count == 2 :
                    mass.sort((a, b) => sortDown(a.client, b.client))
                    break;

                case me == 'day' && count == 1  :
                    mass.sort((a, b) => sortUp(a.day, b.day))
                    break;
                case me == 'day' && count == 2  :
                    mass.sort((a, b) => sortDown(a.day, b.day))
                    break;

                case me == 'holding' && count == 1 :
                    mass.sort((a, b) => sortUp(a.holding, b.holding))
                    break;
                case me == 'holding' && count == 2 :
                    mass.sort((a, b) => sortDown(a.holding, b.holding))
                    break;
                case me =='city' && count == 1 :
                    mass.sort((a, b) => sortUp(a.city, b.city))
                    break;
                case me =='city' && count == 2 :
                    mass.sort((a, b) => sortDown(a.city, b.city))
                    break
                case me =='address' && count == 1 :
                    mass.sort((a, b) => sortUp(a.address, b.address))
                    break;
                case me =='address' && count == 2 :
                    mass.sort((a, b) => sortDown(a.address, b.address))
                    break;
                case me =='foto' && count == 1 :
                    mass.sort((a, b) => sortUp(a.foto, b.foto))
                    break;
                case me =='foto' && count == 2 :
                    mass.sort((a, b) => sortDown(a.foto, b.foto))
                    break;

            }

            if (count == 2){
                count = 0;
            }

        loadTable(table, mass)

        return count++;
        
    })


    select.addEventListener('change', function () {

        if (selec.length > 1) {

            while (selec.firstChild)

            selec.removeChild(selec.lastChild);

        }


            switch (this.value) {

                case 'client' : {

                    for (let {client} of mass) {

                        createOpt(client, selec)

                    }

                }
                    break;

                case 'day' : {

                    for (let {day} of mass) {

                        createOpt(day, selec)

                    }

                }
                    break;

                case 'holding' : {

                    for (let {holding} of mass) {

                        createOpt(holding, selec)

                    }
                }
                    break;

                case 'city' : {

                    for (let {city} of mass) {

                        createOpt(city, selec)

                    }
                }
                    break;

                case 'address' : {

                    for (let {address} of mass) {

                        createOpt(address, selec)

                    }
                }
                    break;

                case 'foto' : {

                    for (let {foto} of mass) {

                        createOpt(foto, selec)

                    }
                }
                    break;


            }


        console.log(this.value)

    },false)


    selec.addEventListener('change', function () {



        loadTable(table, mass.filter((item) => item[select.value] == selec.value))

    }, false)

};

function giveSelect1(select, data) {


    for (let i of Object.keys(data[0])) {

        createOpt(i, select)
    }

}

function createOpt(i, place) {

    let el = document.createElement('option');

    el.textContent = i;
    el.value = i;
    place.appendChild(el);

    el = null

}



function sortUp(a,b) {

    if (a < b){

        return -1;
    }
    if (a > b){
        return 1
    }
    return 0

}
function sortDown(a,b) {
    if (a > b){
        return -1
    }
    if (b < a){
        return 1
    }
    return 0
}

function loadTable(table, data) {

    let rows, cell;

    console.log(data)


    for (let i = 0, length = data.length; i < length; i++) {

            let count = 0;


            rows = table.children[1].insertRow(i);


            for (let item in data[i]) {


                if (count < 6) {
                    cell = rows.insertCell(count)
                    cell.innerHTML = data[i][item]
                }


                count++;

            }

    }

}



