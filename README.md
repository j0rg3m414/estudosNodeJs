## Requisitos
* Node.js 22 ou superior - Conferir a versão 
```
node -v
``` 
## Como rodar o projeto baixado
* Instalar as dependências definidas no arquivo package.json
```
npm install
``` 
* Compilar o arquivo TypeScript.
```
npx tsc
```
* Executar o arquivo gerado com Node.js
```
node dist/index.js
```

## Sequência para criar o projeto
* Comando para criar o projeto:
```
npm init
``` 
* Instlação do Express que é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Gerencia as requisições, rotas e URLs, entre outras funcionalidades.
```
npm i express
``` 
Obs: no comando, não há necessidade de por o --save pois automaticamente já vai para o arquivo raiz de configuração do projeto, package.json.
* Instlação de pacotes para suporte ao TypeScript.
```
npm i --save-dev @types/express
npm i --save-dev @types/node
``` 
Obs: no comando, há necessidade de por o --save-dev pois ele é somente para o ambiente de desenvolvimento.
* Instlação o compilador do projeto com TypeScript e reiniciar o projeto quando o arquivo é modificado.
```
npm i --save-dev ts-node
```
* Gerar o arquivo de configuração para o TypeScript
```
npx tsc --init
```
* Compilar o arquivo TypeScript.
```
npx tsc
```
* Executar o arquivo gerado com Node.js
```
node dist/index.js
```

## Como enviar e baixar os arquivos do Github
Baixar os arquivos do Git
```
git clone -b nomeDaBranch urlHttpCopiadoDoGitHub .
```