# NOTICIAS SERRATEC | FRONT-END ESSENCIAL

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## 📌 Sobre o Projeto
Este projeto Front-End inicial que tem como objetivo a elaboração 

## 📚 Índice

- [Ferramentas](#-ferramentas)
- [Como executar](#-como-executar-o-projeto)
- [Estrutura](#-estrutura-do-projeto)
- [Equipe](#-equipe)

## 🛠️ Ferramentas

<table align="center">
  <tr>
    <td align="center">
      <h4>💻 Linguagem</h4>
      <a href="https://www.oracle.com/br/java/" target="_blank">
        <img src="https://skillicons.dev/icons?i=vscode" /><br><br>
        <strong>VS Code</strong>
      </a>
    </td>
    <td align="center">
      <h4>💻 Linguagem</h4>
      <a href="https://www.oracle.com/br/java/" target="_blank">
        <img src="https://skillicons.dev/icons?i=vscode" /><br><br>
        <strong>VS Code</strong>
      </a>
    </td>
    <td width="40"></td>
    <td align="center">
      <h4>🗄️ Banco de Dados</h4>
      <a href="https://www.postgresql.org/" target="_blank">
        <img src="https://skillicons.dev/icons?i=postgresql" /><br><br>
        <strong>PostgreSQL</strong>
      </a>
    </td>
    <td width="40"></td>
    <td align="center">
      <h4>🧰 IDE</h4>
      <a href="https://www.eclipse.org/" target="_blank">
        <img src="https://skillicons.dev/icons?i=eclipse" /><br><br>
        <strong>Eclipse</strong>
      </a>
    </td>
    <td width="40"></td>
    <td align="center">
      <h4>💬 Comunicação</h4>
      <a href="https://discord.com/" target="_blank">
        <img src="https://skillicons.dev/icons?i=discord" /><br><br>
        <strong>Discord</strong>
      </a>
    </td>
  </tr>
</table>

## 🚀 Como executar o projeto

### 📋 Pré-requisitos

<ul>
  <li>Navegador Browser</li>
  <li>PostgreSQL</li>
  <li>PostgreSQL</li>
  <li>Git</li>
</ul>

### ▶️ Execução

#### 📥 Clonar repositório para um local de sua preferência

```bash
git clone https://github.com/gaguiar4/Trabalho_Final_POO.git
```
#### 📂 Entrar na pasta

```bash
cd Trabalho_Final_POO
```

#### 🗄️ .env

<p>Abra o arquivo, em algum editor de texto (bloco de notas, notepad++ ou até mesmo uma ide como VS Code) para alterar as confirgurações e refletir dentro do banco de dados local para testes.</p>
<pre>
DB_HOST=localhost   # alterar apenas se for um host diferente.
DB_PORT=5432        # porta padrão, porém alterar se for deferente no seu DB.
DB_NAME=poo_banco   # nome padrão que será criado ao inicializar o .env
DB_USER="postgres"  # "usar o mesmo nome configurado em seu DB."
DB_PASSWORD= 1234   # altere para a senha a cadastrada no seu DB.
</pre>

#### 🗄️ .jar 
<p>Antes de compilar, adicione o <b>postgresql.jar</b>. Ele é o driver <b>JDBC do PostgreSQL</b> e permite que o Java se conecte ao banco de dados. </p>

#### 🛠️ Compilar o projeto

```bash
javac SistemaInterno.java
```

#### ▶️ Executar

```bash
java SistemaInterno
```

### 🔐 Usuários padrão do sistema

<p>Para testes iniciais, utilize os seguintes acessos:</p>

<ul>
  <strong>Presidente:</strong> CPF definido no banco
    <li>123.456.789-00</li>
  <strong>Diretor:</strong> CPF definido no banco
    <li>234.567.890-11</li>
  <strong>Gerente:</strong> CPF definido no banco
    <li>345.678.901-22</li>
  <strong>Cliente:</strong> CPF definido no banco
    <li>567.890.123-44</li>
</ul>

<p><strong>Senha padrão para todos:</strong> 123</p>


#### 🗃️ Gerar Arquivos
```bash
Leitura dos arquivos gerados .txt
```

<ul>
  <strong>Atualizar Project</strong> 
    <li>Clicar com o direito no project SistemaBancario e aplicar o refresh (F5).</li>
  <strong>Procurar Arquivos</strong> 
    <li>Vai aparecer uma nova pasta no final do projeto depois de database com o nome de 'output'.</li>
  <strong>Lendo Arquivos</strong> 
    <li>Todos os arquivos .txt gerados na execução do programa estarão dentro da pasta 'output'.</li>
</ul>


## 📁 Estrutura do Projeto

<pre>
├── database/              # Scripts SQL (schema, data)
├── Diagramas/             # UML e Diagramas de Sequência
├── bin/                   # Arquivos .class compilados
├── src/
│   ├── config/            # Conexão com DB e Factory
│   ├── dao/               # Persistência (Data Access Object)
│   ├── enums/             # Criação de ENUMS (Cargo, Conta e Transação)
│   ├── exceptions/        # Exceções personalizadas (Saldo, Valores e etc)
│   ├── funcionarios/      # Classes de cargos e regras de bonificação
│   ├── main/              # Ponto de entrada (SistemaInterno)
│   ├── menu/              # Interfaces de menu para cada perfil
│   ├── model/             # Entidades (Cliente, Contas, Seguro)
│   ├── relatorios/        # Lógica de geração de relatórios .txt
│   ├── service/           # Regras de negócio e processamento
│   └── utils/             # Validadores, Input e Leitura de arquivos
│
├── postgresql-42.7.1.jar  # Driver do Banco de Dados
├── .env                   # Variáveis de ambiente (necessário configurar)
└── README.md
</pre>

## 🤝 Equipe

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/matheussantos-collab">
        <img src="https://avatars.githubusercontent.com/u/264497728" width="90"/><br>
        <sub><b>Matheus da Silveira</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/gaguiar4">
        <img src="https://avatars.githubusercontent.com/u/70951592" width="90"/><br>
        <sub><b>Gabriel Luiz da Silva</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kevinsgoncalves">
        <img src="https://avatars.githubusercontent.com/u/200262940" width="90"/><br>
        <sub><b>Kevin Gonçalves</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/daviportugall">
        <img src="https://avatars.githubusercontent.com/u/264879660" width="90"/><br>
        <sub><b>Davi Sá</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/PHDReis">
        <img src="https://avatars.githubusercontent.com/u/143048029" width="90"/><br>
        <sub><b>Pedro Henrique Dutra</b></sub>
      </a>
    </td>
  </tr>
</table>
