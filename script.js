function scrollFunc(id) 
{
    document.getElementById(id.toString()).scrollIntoView({behavior: 'smooth'});
}


filtro("tudo");
function filtro(filtro)
{
    let item, i;
    item = document.getElementsByClassName("filtro");

    if (filtro == "tudo") filtro = "";

    for (i = 0;i < item.length;i++) 
    {
        removerClasse(item[i], "mostrar");

        if (item[i].className.indexOf(filtro) > -1) adicionarClasse(item[i], "mostrar");
    }
}

function adicionarClasse(elemento, nome) {
    
    var i, arr1, arr2;
    
    arr1 = elemento.className.split(" ");
    arr2 = nome.split(" ");
    
    for (i = 0; i < arr2.length; i++) 
    {
        if (arr1.indexOf(arr2[i]) == -1) {elemento.className += " " + arr2[i];}
    }
}


function removerClasse(element, name) {
    
    var i, arr1, arr2;
    
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    
    for (i = 0; i < arr2.length; i++) 
    {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("generos");
let btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length;i++)
{
    btns[i].addEventListener("click", function() { 
        
        let atual = document.getElementsByClassName("active");
        atual[0].className = atual[0].className.replace(" active", "");
        this.className += " active";
    });
}