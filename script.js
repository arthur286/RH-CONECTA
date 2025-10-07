// Conteúdo para os tópicos frequentes
const topicContents = {
    ferias: `
        <h4>Férias</h4>
        <p>As férias são um direito de todo trabalhador regido pela CLT. Abaixo seguem Duvidas Frequentes:</p>
        <ul>
        <details>
  <summary>Qual é o período aquisitivo?</summary>
  <p>12 meses de trabalho.</p>
</details>

<details>
  <summary>Qual é o período concessivo?</summary>
  <p>Até 12 meses após o período aquisitivo.</p>
</details>

<details>
  <summary>Qual a duração das férias?</summary>
  <p>30 dias corridos para quem não teve mais de 5 faltas injustificadas.</p>
</details>

<details>
  <summary>Quando o pagamento das férias deve ser feito?</summary>
  <p>O pagamento deve ser realizado até 2 dias antes do início das férias.</p>
</details>

<details>
  <summary>Com quanta antecedência devo agendar as férias?</summary>
  <p>É necessário dar pelo menos 30 dias de antecedência para agendar as férias.</p>
</details>

<p>Para solicitar suas férias, entre em contato com o RH pelo e-mail: <a href="mailto:ferias@empresa.com">ferias@empresa.com</a></p>
    `,
    salario: `
        <h4>Salário</h4>
        <h4>Informações sobre salários e benefícios</h4>

<details>
  <summary>Quando o pagamento é realizado?</summary>
  <p>O pagamento é realizado até o 5º dia útil de cada mês.</p>
</details>

<details>
  <summary>Onde posso acessar o meu holerite?</summary>
  <p>O holerite é disponibilizado digitalmente no portal do colaborador.</p>
</details>

<details>
  <summary>Quais são os benefícios inclusos?</summary>
  <p>Vale-refeição, vale-alimentação e plano de saúde.</p>
</details>

<details>
  <summary>Com quem posso falar sobre descontos?</summary>
  <p>Para dúvidas sobre descontos, entre em contato com o departamento pessoal.</p>
</details>

<details>
  <summary>Como funcionam os reajustes salariais?</summary>
  <p>Reajustes salariais seguem a política da empresa e são comunicados formalmente.</p>
</details>

<details>
  <summary>O que fazer em caso de erro no pagamento?</summary>
  <p>Em caso de discrepância no pagamento, contate imediatamente: 
     <a href="mailto:financeiro@empresa.com">financeiro@empresa.com</a>
  </p>
</details>

    `,
    beneficios: `
        <h4>Benefícios</h4>
<p>Nossa empresa oferece um pacote completo de benefícios:</p>

<details>
  <summary>O plano de saúde tem coparticipação?</summary>
  <p>Sim, o plano de saúde oferecido possui coparticipação.</p>
</details>

<details>
  <summary>Qual o valor do vale-refeição?</summary>
  <p>R$ 30,00 por dia útil.</p>
</details>

<details>
  <summary>Qual o valor do vale-alimentação?</summary>
  <p>R$ 20,00 por dia útil.</p>
</details>

<details>
  <summary>O plano odontológico é obrigatório?</summary>
  <p>Não, o plano odontológico é opcional.</p>
</details>

<details>
  <summary>Tenho direito a vale-transporte ou auxílio combustível?</summary>
  <p>Sim, você pode optar por vale-transporte ou auxílio combustível.</p>
</details>

<details>
  <summary>A empresa oferece acesso ao Gympass?</summary>
  <p>Sim, a empresa oferece acesso ao Gympass.</p>
</details>

<details>
  <summary>Existe participação nos resultados?</summary>
  <p>Sim, temos um programa de participação nos resultados.</p>
</details>

<details>
  <summary>Como faço para aderir ou alterar meus benefícios?</summary>
  <p>Entre em contato pelo e-mail: 
     <a href="mailto:beneficios@empresa.com">beneficios@empresa.com</a>
  </p>
</details>

    `,
    documentos: `
        <h4>Documentos</h4>
<p>Documentação necessária e processos relacionados:</p>

<details>
  <summary>Quais documentos são necessários para admissão?</summary>
  <p>Carteira de trabalho, RG, CPF, comprovante de residência e número do PIS.</p>
</details>

<details>
  <summary>Qual o prazo para entrega de atestados médicos?</summary>
  <p>Atestados médicos devem ser entregues em até 48 horas após o retorno ao trabalho.</p>
</details>

<details>
  <summary>Como solicitar a segunda via do holerite?</summary>
  <p>Envie a solicitação para o e-mail: 
    <a href="mailto:documentos@empresa.com">documentos@empresa.com</a>
  </p>
</details>

<details>
  <summary>Como pedir uma declaração de vínculo empregatício?</summary>
  <p>Solicite com no mínimo 48 horas de antecedência.</p>
</details>

<details>
  <summary>Como faço para alterar meus dados cadastrais?</summary>
  <p>Preencha o formulário disponível no portal do colaborador.</p>
</details>

    `
};

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listeners para os tópicos frequentes
    const topicItems = document.querySelectorAll('.frequent-topics li');
    const topicContent = document.getElementById('topicContent');
    
    topicItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover a classe 'active' de todos os itens
            topicItems.forEach(i => i.classList.remove('active'));
            
            // Adicionar a classe 'active' ao item clicado
            this.classList.add('active');
            
            const topic = this.getAttribute('data-topic');
            
            // Mostrar o conteúdo correspondente
            if (topicContents[topic]) {
                topicContent.innerHTML = topicContents[topic];
            }
        });
    });
    
    // Manipular o envio do formulário
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject');
        const subjectText = subject.options[subject.selectedIndex].text;
        const message = document.getElementById('message').value;
        
        // Validação simples
        if (!name || !email || !subject.value || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Simular envio (em um caso real, aqui teria uma requisição AJAX)
        alert(`Obrigado, ${name}! Sua mensagem sobre "${subjectText}" foi enviada com sucesso. Entraremos em contato em breve.`);
        
        // Limpar o formulário
        contactForm.reset();
    });
    
    // Animação da barra de progresso
    const progressBar = document.getElementById('progressBar');
    setTimeout(() => {
        progressBar.style.width = '41%';
    }, 500);
});