//MenuPrincipal 

//Jogo em si

const main = document.getElementById('containerPrincipal');
const sectionContainerMiddle = document.createElement('section');
sectionContainerMiddle.classList.add('container_Middle');
main.appendChild(sectionContainerMiddle);

const divTasksCategories = document.createElement('div');
divTasksCategories.classList.add('categoriesFromTasks');
sectionContainerMiddle.appendChild(divTasksCategories);

const buttonTasks = document.createElement('button');
buttonTasks.classList.add('termin_ModifyTask_button');
buttonTasks.innerText = 'Tasks';
divTasksCategories.appendChild(buttonTasks);

const buttonSensor = document.createElement('button');
buttonSensor.classList.add('termin_ModifyTask_button');
buttonSensor.innerText = 'Sensor';
divTasksCategories.appendChild(buttonSensor);

const buttonAudio = document.createElement('button');
buttonAudio.classList.add('termin_ModifyTask_button');
buttonAudio.innerText = 'Audio'
divTasksCategories.appendChild(buttonAudio);

const buttonSilent_Vent = document.createElement('button');
buttonSilent_Vent.classList.add('termin_ModifyTask_button');
buttonSilent_Vent.innerText = 'Sil. Vent';
divTasksCategories.appendChild(buttonSilent_Vent);


const linhaBranca = document.createElement('hr');
linhaBranca.appendChild(sectionContainerMiddle);



const animatronicElement = document.getElementById('moltenFreddy');


const animatronic1 = {
    nome: 'Molten Freddy',
    elemento: animatronicElement,
    dificuldade: 5,
}