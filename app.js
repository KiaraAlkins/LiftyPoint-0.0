
//MenuPrincipal 

//Jogo em si


//telas ligadas ou não 

let tela1Ligada = false;

///////////

const mainPrincipal = document.getElementById('containerPrincipal');

const sectionMiddle = document.createElement('section');
sectionMiddle.classList.add('container_Middle');
mainPrincipal.appendChild(sectionMiddle);

const terminalCategories = document.createElement('div');
terminalCategories.classList.add('categoriesFromTasks');
sectionMiddle.appendChild(terminalCategories);

const buttonTask = document.createElement('button');
buttonTask.classList.add('termin_ModifyTask_button');
buttonTask.innerText = 'Tasks';
terminalCategories.appendChild(buttonTask)

const buttonSensor = document.createElement('button');
buttonSensor.classList.add('termin_ModifyTask_button');
buttonSensor.innerText = 'Sensor';
terminalCategories.appendChild(buttonSensor)

const buttonAudio = document.createElement('button');
buttonAudio.classList.add('termin_ModifyTask_button');
buttonAudio.innerText = 'Audio';
terminalCategories.appendChild(buttonAudio)


const buttonSilentVent = document.createElement('button');
buttonSilentVent.classList.add('termin_ModifyTask_button');
buttonSilentVent.innerText = 'Silent Vent';
terminalCategories.appendChild(buttonSilentVent);

const HrLinha = document.createElement('hr');
HrLinha.classList.add('LinhaSeparadora');
sectionMiddle.appendChild(HrLinha);

const telaDoTerminal = document.createElement('div');
telaDoTerminal.classList.add('telaDoTerminal');
sectionMiddle.appendChild(telaDoTerminal);

//PorcentagemdeTarefa

    let PorcentagemdeTarefa1 = 0
    let tarefa1Bool = false;

    let PorcentagemdeTarefa2 = 0
    let tarefa2Bool = false;

    let PorcentagemdeTarefa3 = 0
    let tarefa3Bool = false;

    let PorcentagemdeTarefa4 = 0
    let tarefa4Bool = false;

    let PorcentagemdeTarefa5 = 0
    let tarefa5Bool = false;

    let permissao = false

    function verificarPermissao() {
        if (tarefa1Bool, tarefa2Bool, tarefa3Bool, tarefa4Bool, tarefa5Bool) {
           return permissao = true
        }
    }

/////

//Tarefas feitas

    let lote1Pedido = false;
    let lote2Pedido = false;
    let lote3Pedido = false;
    let lote4Pedido = false;
    let lote5Pedido = false;

/////

function AbrirTarefas() {

    if (!tela1Ligada) {

        function mostrarBotaoFinalizar() {
            if (permissao) {
                Finalizar.style.display = 'block';
                Finalizar.classList.add('TasksToDo')
            }
        }

    
    const divTelaDeTarefas = document.createElement('div');
    divTelaDeTarefas.classList.add('telaDeTarefas');
    telaDoTerminal.appendChild(divTelaDeTarefas);

    const divTDF1 = document.createElement('div');
    divTDF1.classList.add('tdf');
    divTelaDeTarefas.appendChild(divTDF1);

    const loteDeSup1 = document.createElement('button');
    loteDeSup1.classList.add('TasksToDo');
    loteDeSup1.innerText = 'Lote 1 de suprimentros - %' + PorcentagemdeTarefa1;
    divTDF1.appendChild(loteDeSup1);
    loteDeSup1.addEventListener('click', () => {
        if (!tarefa1Bool) {
            const intervalo = setInterval(() => {
                PorcentagemdeTarefa1++; // Aumenta a porcentagem em 1
                loteDeSup1.innerText = 'Lote 1 de suprimentros - %' + PorcentagemdeTarefa1; // Atualiza o texto do botão
                if (PorcentagemdeTarefa1 >= 100) { // Se a porcentagem atingir 100%, parar o intervalo
                    clearInterval(intervalo);
                    tarefa1Bool = true
                    alert('Lote 1 completo!');
                    if (verificarPermissao()) {
                        mostrarBotaoFinalizar()
                    };
                }
            }, 100);
        }
    })

    const loteDeSup2 = document.createElement('button');
    loteDeSup2.classList.add('TasksToDo');
    loteDeSup2.innerText = 'Lote 2 de suprimentros - %' + PorcentagemdeTarefa2;
    divTDF1.appendChild(loteDeSup2);
    loteDeSup2.addEventListener('click', () => {
        if (!tarefa2Bool) {
            const intervalo = setInterval(() => {
                PorcentagemdeTarefa2++; // Aumenta a porcentagem em 1
                loteDeSup2.innerText = 'Lote 1 de suprimentros - %' + PorcentagemdeTarefa2; // Atualiza o texto do botão
                if (PorcentagemdeTarefa2 >= 100) { // Se a porcentagem atingir 100%, parar o intervalo
                    clearInterval(intervalo);
                    tarefa2Bool = true
                    alert('Lote 1 completo!');
                    if (verificarPermissao()) {
                        mostrarBotaoFinalizar()
                    };
                }
            }, 100);
        }
    })

    const loteDeSup3 = document.createElement('button');
    loteDeSup3.classList.add('TasksToDo');
    loteDeSup3.innerText = 'Lote 3 de suprimentros - %' + PorcentagemdeTarefa3;
    divTDF1.appendChild(loteDeSup3);
    loteDeSup3.addEventListener('click', () => {
        if (!tarefa3Bool) {
            const intervalo = setInterval(() => {
                PorcentagemdeTarefa3++; // Aumenta a porcentagem em 1
                loteDeSup3.innerText = 'Lote 1 de suprimentros - %' + PorcentagemdeTarefa3; // Atualiza o texto do botão
                if (PorcentagemdeTarefa3 >= 100) { // Se a porcentagem atingir 100%, parar o intervalo
                    clearInterval(intervalo);
                    tarefa3Bool = true
                    alert('Lote 1 completo!');
                    if (verificarPermissao()) {
                        mostrarBotaoFinalizar()
                    };
                }
            }, 100);
        }
    })

    const divTDF2 = document.createElement('div');
    divTDF2.classList.add('tdf');
    divTelaDeTarefas.appendChild(divTDF2);

    const loteDeSup4 = document.createElement('button');
    loteDeSup4.classList.add('TasksToDo');
    loteDeSup4.innerText = 'Lote 4 de suprimentros - %' + PorcentagemdeTarefa4;
    divTDF2.appendChild(loteDeSup4);
    loteDeSup4.addEventListener('click', () => {
        if (!tarefa4Bool) {
            const intervalo = setInterval(() => {
                PorcentagemdeTarefa4++; // Aumenta a porcentagem em 1
                loteDeSup4.innerText = 'Lote 1 de suprimentros - %' + PorcentagemdeTarefa4; // Atualiza o texto do botão
                if (PorcentagemdeTarefa4 >= 100) { // Se a porcentagem atingir 100%, parar o intervalo
                    clearInterval(intervalo);
                    tarefa4Bool = true
                    alert('Lote 1 completo!');
                    if (verificarPermissao()) {
                        mostrarBotaoFinalizar()
                    };
                }
            }, 100);
        }
    })

    const loteDeSup5 = document.createElement('button');
    loteDeSup5.classList.add('TasksToDo');
    loteDeSup5.innerText = 'Lote 5 de suprimentos - %' + PorcentagemdeTarefa5;
    divTDF2.appendChild(loteDeSup5);
    loteDeSup5.addEventListener('click', () => {
        if (!tarefa5Bool) {
            const intervalo = setInterval(() => {
                PorcentagemdeTarefa5++; // Aumenta a porcentagem em 1
                loteDeSup5.innerText = 'Lote 1 de suprimentros - %' + PorcentagemdeTarefa5; // Atualiza o texto do botão
                if (PorcentagemdeTarefa5 >= 100) { // Se a porcentagem atingir 100%, parar o intervalo
                    clearInterval(intervalo);
                    tarefa5Bool = true;
                    alert('Lote 1 completo!');
                    if (verificarPermissao()) {
                        mostrarBotaoFinalizar()
                    };
                }
            }, 100);
        }
    })

    const Finalizar = document.createElement('button');
    Finalizar.style.display = 'none'
    Finalizar.innerText = 'Finish Night';
    divTDF2.appendChild(Finalizar);
    Finalizar.addEventListener('click', () => {
        sectionMiddle.remove()
    })

    tela1Ligada = true;
    }
}

buttonTask.addEventListener('click', AbrirTarefas)

    const animatronic1 = {
        nome: 'Molten Freddy',
        dificuldade: 5,
}
