README
O chatbot desenvolvido para o Telegram trabalha em conjunto com o site para fornecer informações dos casos de coronavirus no Brasil. O bot informa sobre informações básicas para a prevenção e dados básicos.

A API utilizada para a coleta de dados (https://covid19-brazil-api.now.sh/) coleta os dados da WHO (World Health Organization) e transforma em um JSON com ideias alinhadas para leitura (https://covid19-brazil-api-docs.now.sh/).

O bot não utiliza o IBM Watson devido a documentação estar obsoleta.

Link do bot: https://t.me/Covid_Puc_Campinas_bot
Comando para orientação de uso "/ajuda".

Para rodar o código localmente é necessário navegar até o local que o repositório foi clonado

substituir a linha 6 do arquivo bot.js
```javascript
const TOKEN = `[YOUR API TOKEN]`;
```

executar os comandos no seu terminal
```bash
npm install
npm start
``` 
ou 
```bash
yarn
yarn start
```

![image](https://cdn.discordapp.com/attachments/695803788904366120/718150919237271652/Untitled-4.png)
