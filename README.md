# GiNutrivida - Site Institucional

Site oficial da GiNutrivida, uma plataforma de coaching de saúde holística especializada em avaliação de composição corporal, planos nutricionais personalizados e programas de saúde.

## Site em Produção

O site está atualmente hospedado no Netlify e pode ser acessado através do seguinte domínio:
[https://ginutrivida.netlify.app](https://ginutrivida.netlify.app)

## Estrutura do Projeto

```
gisele-nutrivida/
├── index.html                         # Página inicial
├── programa-descoberta.html           # Página do Programa Descoberta
├── programa-equilibrio-metabolico.html # Página do Programa Equilíbrio Metabólico
├── programa-estilo-igbas.html         # Página do Programa Estilo de Vida com IGBas
├── programa-jornada-21-dias.html      # Página da Jornada 21 Dias
├── programa-atletas.html              # Página do Programa para Atletas
├── consulta-gratuita.html             # Página da Consulta Introdutória Gratuita
├── programa.html                      # Página genérica de programa
├── images/                            # Diretório de imagens
│   ├── Logo.png                       # Logo da GiNutrivida
│   └── ...                           # Outras imagens do site
├── styles.css                         # Estilos personalizados
└── script.js                          # JavaScript para interatividade
```

### Descrição das Páginas

- **index.html**: Página principal com apresentação da GiNutrivida e todos os serviços
- **programa-descoberta.html**: Detalhes do programa inicial para novos clientes
- **programa-equilibrio-metabolico.html**: Programa Metabolic Balance® oficial
- **programa-estilo-igbas.html**: Programa baseado no Índice Glicêmico Baixo
- **programa-jornada-21-dias.html**: Programa intensivo de transformação em 21 dias
- **programa-atletas.html**: Programa especializado para atletas de alta performance
- **consulta-gratuita.html**: Página para agendamento de consulta introdutória
- **programa.html**: Template base para páginas de programas

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS (via CDN)
- Font Awesome (para ícones)
- Google Fonts (Poppins)

## Como Executar o Projeto

1. Basta abrir o arquivo `index.html` em qualquer navegador moderno.
2. Não é necessário servidor local ou instalação de dependências.

## Como Fazer o Deploy

### Opção 1: Hospedagem Compartilhada

1. Faça o upload de todos os arquivos para o diretório raiz da sua hospedagem via FTP.
2. Configure o domínio para apontar para esse diretório.

### Opção 2: GitHub Pages

1. Crie um repositório no GitHub
2. Faça o upload dos arquivos para o repositório
3. Ative o GitHub Pages nas configurações do repositório

### Configuração Atual: Netlify

O site está atualmente hospedado no Netlify com deploy automático integrado ao repositório GitHub. Para atualizar o site:

1. Faça push das alterações para o repositório principal no GitHub
2. O Netlify detectará automaticamente as mudanças e fará o deploy
3. O site estará disponível em [https://ginutrivida.netlify.app](https://ginutrivida.netlify.app)

Para configurar um novo deploy no Netlify:

1. Crie uma conta no Netlify
2. Conecte com seu repositório Git
3. Configure as variáveis de ambiente necessárias
4. O deploy será automático a cada push no repositório

## Personalização

Para personalizar o site, você pode modificar:

- Informações de contato no arquivo `index.html`
- Cores e estilos no arquivo `styles.css`
- Comportamento e animações no arquivo `script.js`

## Recursos Adicionais

- As imagens atuais são do Unsplash e devem ser substituídas por imagens reais
- Os links para WhatsApp e redes sociais devem ser atualizados com as informações corretas

## Suporte Multilíngue (Futura Implementação)

Para implementar suporte multilíngue, sugerimos:

- Weglot
- Linguise
- MotaWord Active

Detalhes para integração futura estão documentados no arquivo de planejamento.

---

© 2025 GiNutrivida. Todos os direitos reservados.
