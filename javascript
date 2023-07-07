
      // Adiciona um evento de envio ao formulário
      document.querySelector('form').addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário, que é atualizar a página
        event.preventDefault();

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Faz alguma coisa com os valores, como enviar para um servidor
        console.log(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
      });

      // Tabela
      function adicionarLinha(nome, sobrenome, idade, pais) {
        var tabela = document.getElementById('tabela');
        var linha = document.createElement('tr');

        var colunaNome = document.createElement('td');
        colunaNome.textContent = nome;

        var colunaSobrenome = document.createElement('td');
        colunaSobrenome.textContent = sobrenome;

        var colunaIdade = document.createElement('td');
        colunaIdade.textContent = idade;

        var colunaPais = document.createElement('td');
        colunaPais.textContent = pais;

        linha.appendChild(colunaNome);
        linha.appendChild(colunaSobrenome);
        linha.appendChild(colunaIdade);
        linha.appendChild(colunaPais);

        tabela.appendChild(linha);
      }

      adicionarLinha('Pedro', 'Ferreira', 35, 'Brasil');
      adicionarLinha('Ana', 'Santos', 28, 'Brasil');
      adicionarLinha('Izabel', 'Moreira', 28, 'Brasil');

      //Formulário de login
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'usuario' && password === 'senha') {
          // Login bem-sucedido
          alert('Login bem-sucedido!');
          // Redirecionar para outra página, se necessário
        } else {
          // Exibir mensagem de erro
          var error = document.getElementById('error');
          error.textContent = 'Usuário ou senha incorretos.';
        }
      });
 