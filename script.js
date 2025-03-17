// Script para o site Gisele Nutrivida

// Espera o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // Toggle do menu móvel
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Fecha o menu móvel quando um link é clicado
  const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  // Navegação suave para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Ajuste para considerar o cabeçalho fixo
          behavior: "smooth",
        });
      }
    });
  });

  // Destaque automático para itens de navegação com base na rolagem
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Seleciona todas as seções que têm IDs correspondentes aos links de navegação
    document.querySelectorAll("section[id]").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove a classe ativa de todos os links
        document.querySelectorAll(".md\\:flex a").forEach((link) => {
          link.classList.remove("text-green-600");
          link.classList.add("text-gray-700");
        });

        // Adiciona a classe ativa ao link correspondente à seção visível
        const activeLink = document.querySelector(
          '.md\\:flex a[href="#' + sectionId + '"]'
        );
        if (activeLink) {
          activeLink.classList.remove("text-gray-700");
          activeLink.classList.add("text-green-600");
        }

        // Também atualiza o menu mobile
        document.querySelectorAll(".md\\:hidden a").forEach((link) => {
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("text-green-600");
            link.classList.remove("text-gray-500");
          } else {
            link.classList.remove("text-green-600");
            link.classList.add("text-gray-500");
          }
        });
      }
    });
  });

  // Manipulação do formulário de contato
  const contactForm = document.querySelector("#contato form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simples validação do formulário
      let isValid = true;
      const nome = document.getElementById("nome");
      const email = document.getElementById("email");
      const telefone = document.getElementById("telefone");
      const mensagem = document.getElementById("mensagem");

      if (!nome.value.trim()) {
        isValid = false;
        nome.classList.add("border-red-500");
      } else {
        nome.classList.remove("border-red-500");
      }

      if (!email.value.trim() || !email.value.includes("@")) {
        isValid = false;
        email.classList.add("border-red-500");
      } else {
        email.classList.remove("border-red-500");
      }

      if (!mensagem.value.trim()) {
        isValid = false;
        mensagem.classList.add("border-red-500");
      } else {
        mensagem.classList.remove("border-red-500");
      }

      if (isValid) {
        // Em uma implementação real, você enviaria os dados para um servidor
        // Por enquanto, apenas mostraremos um alerta
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        contactForm.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      }
    });
  }

  // CORREÇÃO: Removemos o efeito de revelação que estava causando o problema
  // Em vez de adicionar opacity-0 a todas as seções, vamos criar uma animação mais simples e segura

  // Aplicar animações de entrada mais sutis nas seções
  document.querySelectorAll("section").forEach((section, index) => {
    // Atraso baseado na posição da seção para entrada escalonada
    const delay = index * 100;

    // Definir um estilo de transição para cada seção
    section.style.transition = "all 0.5s ease";

    // Adicionar um pequeno efeito de fade in ao rolar
    window.addEventListener("scroll", function () {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        // Adicionar sombra sutil e transformação leve quando a seção entra na viewport
        section.style.transform = "translateY(0)";
        section.style.opacity = "1";
      }
    });

    // Configuração inicial (leve deslocamento)
    section.style.transform = "translateY(20px)";
    section.style.opacity = "0.95";

    // Aplicar a transformação após um pequeno atraso para a primeira visualização
    setTimeout(() => {
      section.style.transform = "translateY(0)";
      section.style.opacity = "1";
    }, delay);
  });
});
