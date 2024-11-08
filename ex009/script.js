var horario = Number(prompt("Que Horas são?"))

if (horario > 5 && horario <= 11){
    alert("É manhã")
}
else if (horario > 12 && horario <= 17) {
    alert("Tarde")
}
else if (horario > 18 && horario <= 23) {
    alert("Noite")
}
else {
    alert("Madrugada")
}
