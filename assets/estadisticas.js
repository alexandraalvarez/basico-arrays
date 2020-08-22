//Título
document.write('<H1>Estadísticas Centro Médico Ñuñoa</H1>');


//// Desafío día 1
//Tarea 1, arreglo de objetos radiología
var radiologia = [
    { Hora: '11:00', Especialista: 'IGNACIO SCHULZ', Paciente: 'FRANCISCA ROJAS', Rut: '9878782-1', Previsión: 'FONASA' },
    { Hora: '11:30', Especialista: 'FEDERICO SUBERCASEAUX', Paciente: 'PAMELA ESTRADA', Rut: '15345241-3', Previsión: 'ISAPRE' },
    { Hora: '15:00', Especialista: 'FERNANDO WURTHZ', Paciente: 'ARMANDO LUNA', Rut: '16445345-9', Previsión: 'ISAPRE' },
    { Hora: '15:30', Especialista: 'ANA MARIA GODOY', Paciente: 'MANUEL GODOY', Rut: '17666419-0', Previsión: 'FONASA' },
    { Hora: '16:00', Especialista: 'PATRICIA SUAZO', Paciente: 'RAMON ULLOA', Rut: '14989389-K', Previsión: 'FONASA' },
];

//Tarea 1, arreglo de objetos traumatologia
var traumatologia = [
    { Hora: '8:00', Especialista: 'MARIA PAZ ALTUZARRA', Paciente: 'PAULA SANCHEZ', Rut: '15554774-5', Previsión: 'FONASA' },
    { Hora: '10:00', Especialista: 'RAUL ARAYA', Paciente: 'ANGÉLICA NAVAS', Rut: '15444147-9', Previsión: 'ISAPRE' },
    { Hora: '10:30', Especialista: 'MARIA ARRIAGADA', Paciente: 'ANA KLAPP', Rut: '17879423-9', Previsión: 'ISAPRE' },
    { Hora: '11:00', Especialista: 'ALEJANDRO BADILLA', Paciente: 'FELIPE MARDONES', Rut: '1547423-6', Previsión: 'ISAPRE' },
    { Hora: '11:30', Especialista: 'CECILIA BUDNIK', Paciente: 'DIEGO MARRE', Rut: '16554741-K', Previsión: 'FONASA' },
    { Hora: '12:00', Especialista: 'ARTURO CAVAGNARO', Paciente: 'CECILIA MENDEZ', Rut: '9747535-8', Previsión: 'ISAPRE' },
    { Hora: '12:30', Especialista: 'ANDRES KANACRI', Paciente: 'MARCIAL SUAZO', Rut: '11254785-5', Previsión: 'ISAPRE' },
];

//Tarea 1, arreglo de objetos dental
var dental = [
    { Hora: '8:30', Especialista: 'ANDREA ZUÑIGA', Paciente: 'MARCELA RETAMAL', Rut: '11123425-6', Previsión: 'ISAPRE' },
    { Hora: '11:00', Especialista: 'MARIA PIA ZAÑARTU', Paciente: 'ANGEL MUÑOZ', Rut: '9878789-2', Previsión: 'ISAPRE' },
    { Hora: '11:30', Especialista: 'SCARLETT WITTING', Paciente: 'MARIO KAST', Rut: '7998789-5', Previsión: 'FONASA' },
    { Hora: '13:00', Especialista: 'FRANCISCO VON TEUBER', Paciente: 'KARIN FERNANDEZ', Rut: '18887662-K', Previsión: 'FONASA' },
    { Hora: '13:30', Especialista: 'EDUARDO VIÑUELA', Paciente: 'HUGO SANCHEZ', Rut: '17665461-4', Previsión: 'FONASA' },
    { Hora: '14:00', Especialista: 'RAQUEL VILLASECA', Paciente: 'ANA SEPULVEDA', Rut: '14441281-0', Previsión: 'ISAPRE' },
];


////Desafío día 2
//Tarea 1, agregar las nuevas atenciones de traumatologia
traumatologia.push({ Hora: '09:00', Especialista: 'RENÉ POBLETE', Paciente: 'ANA GELLONA', Rut: '13123329-7', Previsión: 'ISAPRE' },
    { Hora: '09:30', Especialista: 'MARIA SOLAR', Paciente: 'RAMIRO ANDRADE', Rut: '12221451-K', Previsión: 'FONASA' },
    { Hora: '10:00', Especialista: 'RAUL LOYOLA', Paciente: 'CARMEN ISLA', Rut: '10112348-3', Previsión: 'ISAPRE' },
    { Hora: '10:30', Especialista: 'ANTONIO LARENAS', Paciente: 'PABLO LOAYZA', Rut: '13453234-1', Previsión: 'ISAPRE' },
    { Hora: '12:00', Especialista: 'MATIAS ARAVENA', Paciente: 'SUSANA POBLETE', Rut: '14345656-6', Previsión: 'FONASA' });

//Tarea 2, eliminar primera y última de radiologia
radiologia.shift();
radiologia.pop();

//Tarea 3, mostrar todas las atenciones de dental
document.write('<H2>Atenciones dentales</H2>');

function printAtenciones (elemento, index, array) {
    document.write(`<H4> ${dental[index].Hora} - ${dental[index].Especialista} - ${dental[index].Paciente} - ${dental[index].Rut} - ${dental[index].Previsión} </H4>`);
}
dental.forEach(printAtenciones);

//Tarea 4, mostrar lista de todos los pacientes que se atendieron en el centro médico
document.write('<br><H2>Lista de todos los pacientes</H2>'); 

var atencionesTodos = radiologia.concat(traumatologia, dental);

function printPacientes (elemento, index, array) {
    document.write(`<H4> ${atencionesTodos[index].Paciente} </H4>`);
}

atencionesTodos.forEach(printPacientes);

//Tarea 5, invertir los valores de las previsión de Fonasa a Isapre y viceversa en dental
document.write('<br><H2>Cambio de previsión</H2>'); 

function changePrevi(item) {
  if (item.Previsión == "ISAPRE") {
    item.Previsión = "FONASA";
  } else {
    item.Previsión = "ISAPRE";
  }
}
dental.map(changePrevi);

function printPrevi (elemento, index, array) {
   document.write(`<H4> ${dental[index].Paciente} ; ${dental[index].Rut} ; ${dental[index].Previsión} </H4>`);
}
dental.forEach(printPrevi);

////Desafío día 1
//Tarea 2, resumen estadísticas 
document.write('<br><H2>Resumen de atenciones por especialidad</H2>'); 

document.write(`<H3>Cantidad de atenciones para Radiología: ${radiologia.length} </H3>`);
document.write(`<H3>Cantidad de atenciones para Traumatología: ${traumatologia.length} </H3>`);
document.write(`<H3>Cantidad de atenciones para Dental: ${dental.length} </H3>`);

//Tarea 3, detalle de primer y último paciente por área
document.write('<br><H2>Primer paciente y último por especialidad</H2>'); 

document.write(`<H3> Primera atención: ${radiologia[0].Paciente} - ${radiologia[0].Rut} - ${radiologia[0].Previsión} 
    | Última atención: ${radiologia[radiologia.length - 1].Paciente} - ${radiologia[radiologia.length - 1].Rut} - ${radiologia[radiologia.length - 1].Previsión} </H3>`);

document.write(`<H3> Primera atención: ${traumatologia[0].Paciente} - ${traumatologia[0].Rut} - ${traumatologia[0].Previsión} 
    | Última atención: ${traumatologia[traumatologia.length - 1].Paciente} - ${traumatologia[traumatologia.length - 1].Rut} - ${traumatologia[traumatologia.length - 1].Previsión} </H3>`);

document.write(`<H3> Primera atención: ${dental[0].Paciente} - ${dental[0].Rut} - ${dental[0].Previsión} 
    | Última atención: ${dental[dental.length - 1].Paciente} - ${dental[dental.length - 1].Rut} - ${dental[dental.length - 1].Previsión} </H3>`);






/*var Traumatología = [
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
    { Hora: '', Especialista: '', Paciente: '', Rut: '', Previsión: ''},
]*/