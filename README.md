
# Projeto Comedoria
Projeto para a cadeira de Banco de Dados e Engenharia de Software
Projeto para a cadeira de Banco de Dados e Engenharia de Software 
## Equipe: 
<div align="center">
  <img src="https://portal.cin.ufpe.br/wp-content/uploads/2020/07/Horizontal-Vermelho-Logotipo-CIn-UFPE.png" alt="logo_cin" width="400" height="auto" style="border-radius:20px;" />
  <h2>
    Banco de Dados - CIN UFPE
  </h2>
  <h1>
    Projeto — Comedoria 2024.1
  </h1> 
</div> 

## 🧠 Equipe: 

 Celeste Azul Gomes de Gouveia Pereira - caggp@cin.ufpe.br

@@ -21,45 +28,32 @@ Projeto para a cadeira de Banco de Dados e Engenharia de Software
Um sistema de gerenciamento de salgados para auxiliar as vendas feitas pela equipe de Marcelinho Salgados.
Diante do processo de venda desses salgados, surgiu a necessidade da criação de um sistema de reservas, para que os alunos possam indicar o interesse na compra de salgados específicos, sistema esse que auxiliaria também no controle de vendas, cadastro de clientes e funcionários, obtenção e análise de dados.

## 📝 Requisitos da modelagem
Como explicado anteriormente, a modelagem do banco foi construída a partir do contexto do Empreendimento Marcelinho Salgados;
O foco principal do projeto são as reservas e as vendas que ocorrem no empreendimento.

Os requisitos da modelagem foram atendidos da seguinte forma:

- Atributos:
  -Composto, multivalorado
   -Horario, Sabor

- Relacionamentos:

 -Relacionamento 1:1, 1:N, N:M
   -Cliente-CartãoFidelidade, Funcionário-Venda, Reserva-Salgados

 -Relacionamento parcial-total, parcial-parcial
  -Funcionario-Pedido,Cliente-Salgado

 -Relacionamento Unário ou Auto Relacionamento, N-ário
  -Funcionário-Funcionário, Cliente-Reserva-Salgado

 -Relacionamento Identificador ou Entidade Fraca
  -Cliente-CartãoFidelidade

 -Outros:

 -Herança (qualquer tipo)
  -Pedido-Venda-Reserva , Funcionario-Gerente-Vendedor
