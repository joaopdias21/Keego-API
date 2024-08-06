Para chegar ao código de automatizações, é só seguir esse caminho entre as pastas que estão aqui no git cypress\e2ea. Na pasta e2e já consegue enxergar os testes.

Para rodar os testes precisa de alguns pré requisitos como:

O aplicativo Visual Studio Code, caso não tenha, basta acessar o link https://code.visualstudio.com/download e seguir o passo a passo para realizar o download. O Git, você pode verificar se já tem o git instalado em sua máquina usando, abrindo o terminal e escrevendo "git --version", caso não tenha, basta acessar https://git-scm.com/downloads e realizar o download

Após a instalação dos aplicativos você criará uma pasta onde deseja colocar seus projetos, abrindo o aplicativo visual studio code, e na opção "Arquivo - Abrir pasta" você colocará a pasta criada.

Após abrir a pasta no código VS, na opção "View - Terminal" ou teclando 'CTRL+', você abrirá o terminal. Abrindo o terminal você digitará "git clone https://github.com/joaopdias21/Keego-API " que isso irá clonar o projeto em sua maquina.

Após clonar o projeto, se você não tiver o cypress instalado na maquina, no terminal digite "npm install cypress --save-dev" e espere instalar o cypress.

Após instalado o cypress, basta dar o comando "npx cypress open", que vai abrir a interface gráfica do cypress em modo interativo. Após o comando deve aparecer essa tela: ![image](https://github.com/user-attachments/assets/31ce358f-f2f2-41f4-b7dc-c5e2982b664a)
 , clicando em E2E Testing, você escolhe o navegador que deseja realizar o teste (OS TESTES FORAM REALIZADOS NO NAVEGADOR CHROME). Após escolher o navegador de sua preferência, você abrirá os arquivos de teste para realizar a automação, com isso, basta clicar no arquivo que deseja rodar a automação, que irá rodar.

OBS: Caso ao abrir o cypress e não encontrar os arquivos de teste:

Após abrir o cypress com o comando "npx cypress open" você deve escolher E2E Testing e irá aparecer uma tela ![image](https://github.com/user-attachments/assets/aeb29502-c796-4a29-9fa0-a99c5f63e593)


Clicando em "Scaffold example specs" deverá aparecer a seguinte tela ![image](https://github.com/user-attachments/assets/dff959e0-ecef-45e1-9302-0cc3e3e258a4)
 , basta clicar em OK.

Após isso em seu IDE, deverá aparecer outra pasta chamada cypress, dessa forma imagem . Após aparecer a pasta, basta mover os arquivos de teste para este caminho cypress\e2e\1-getting-started. Após os arquivos movidos voce ja o enxerga na tela do cipreste para rodar os testes.

OBS:::: Não é recomendado mover a pasta para a pasta 1-primeiros passos, somente os arquivos dentro da pasta para os testes rodarem

Além disso, você pode acessar o vídeo através do drive mostrando o passo a passo: https://drive.google.com/file/d/1BTR0DEuzf-aw5LRQ-cNbJeo1tiubU3ur/view?usp=sharing
