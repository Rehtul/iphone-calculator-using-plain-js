let temp = 0;

let firstvalue = 0;
let operation = 'none';
let secondvalue = 0;

let numviewer = document.getElementById('numviewer');
let clear = document.getElementById('clear');
let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");
let no5 = document.getElementById("no5");
let no6 = document.getElementById("no6");
let no7 = document.getElementById("no7");
let no8 = document.getElementById("no8");
let no9 = document.getElementById("no9");
let nozero = document.getElementById("nozero");
let nopoint = document.getElementById('nopoint');
let nominus = document.getElementById('nominus');
let noplus = document.getElementById('noplus');
let noequal = document.getElementById('noequal');
let nomultiply = document.getElementById('nomultiply');
let nodivide = document.getElementById('nodivide');

clear.addEventListener('click',()=>{
numviewer.value = null;
firstvalue = 0;
operation='none';
secondvalue = 0;
})

no1.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '1';
}
else
{
if(secondvalue == '0')
{
secondvalue = '1';
numviewer.value = numviewer.value + secondvalue;
}
else
{
secondvalue = secondvalue + '1';
numviewer.value = numviewer.value + '1';
}
}
});

no2.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '2';
}
else{
secondvalue = secondvalue + '2';
numviewer.value = numviewer.value + '2';
}
});

no3.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '3';
}
else{
secondvalue = secondvalue + '3';
numviewer.value = numviewer.value + '3';
}
});

no4.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '4';
}
else{
secondvalue = secondvalue + '4';
numviewer.value = numviewer.value + '4';
}
});

no5.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '5';
}
else{
secondvalue = secondvalue + '5';
numviewer.value = numviewer.value + '5';
}
});

no6.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '6';
}
else{
secondvalue = secondvalue + '6';
numviewer.value = numviewer.value + '6';
}
});

no7.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '7';
}
else{
secondvalue = secondvalue + '7';
numviewer.value = numviewer.value + '7';
}
});

no8.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '8';
}
else{
secondvalue = secondvalue + '8';
numviewer.value = numviewer.value + '8';
}
});

no9.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '9';
}
else{
secondvalue = secondvalue + '9';
numviewer.value = numviewer.value + '9';
}
});

nozero.addEventListener('click',()=>{
if(operation == 'none')
{
numviewer.value = numviewer.value + '0';
}
else{
secondvalue = secondvalue + '0';
numviewer.value = numviewer.value + '0';
}
});

nopoint.addEventListener('click',()=>{
numviewer.value = numviewer.value + '.';
});

nodivide.addEventListener('click',()=>{
if(operation == 'none')
{
firstvalue = Number(numviewer.value);
operation = '/';
numviewer.value = numviewer.value + '/';
console.log(firstvalue);
}
})

nomultiply.addEventListener('click',()=>{
if(operation == 'none')
{
firstvalue = Number(numviewer.value);
operation = '*';
numviewer.value = numviewer.value + '*';
console.log(firstvalue);
}
})

nominus.addEventListener('click',()=>{
if(operation == 'none')
{
firstvalue = Number(numviewer.value);
operation = '-';
numviewer.value = numviewer.value + '-';
console.log(firstvalue);
}
});

noplus.addEventListener('click',()=>{
if(operation == 'none')
{
firstvalue = Number(numviewer.value);
operation = '+';
numviewer.value = numviewer.value + '+';
console.log(firstvalue);
}
})

noequal.addEventListener('click',()=>{
if(operation == '-')
{
numviewer.value = firstvalue - Number(secondvalue);
firstvalue = Number(numviewer.value);
secondvalue=0;
operation = 'none';
}
else
if(operation == '+')
{
numviewer.value = firstvalue + Number(secondvalue);
firstvalue = Number(numviewer.value);
secondvalue = 0;
operation = 'none';
}
else
if(operation == '*')
{
numviewer.value = firstvalue * Number(secondvalue);
firstvalue = Number(numviewer.value);
secondvalue = 0;
operation = 'none';
}
else
if(operation == '/')
{
numviewer.value = firstvalue / Number(secondvalue);
firstvalue = Number(numviewer.value);
secondvalue = 0;
operation = 'none';
}

})

