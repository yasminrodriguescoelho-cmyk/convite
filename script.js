
/*
  PERSONALIZE AQUI:
  1) Confira o número do WhatsApp com DDI + DDD.
  2) O link da localização está configurado abaixo.
*/

// Número do WhatsApp: código do país + DDD + número
const WHATSAPP_NUMBER = "554198852478";

const LINK_LOCALIZACAO =
  "https://maps.app.goo.gl/qY4bQ7VW1KUAoPoG7";

// Elementos do convite
const envelopeScreen = document.getElementById("envelopeScreen");
const inviteScreen = document.getElementById("inviteScreen");
const openEnvelope = document.getElementById("openEnvelope");

const rsvpButton = document.getElementById("rsvpButton");
const locationButton = document.getElementById("locationButton");

const giftsButton = document.getElementById("giftsButton");
const giftsModal = document.getElementById("giftsModal");
const closeGifts = document.getElementById("closeGifts");
const closeGiftsBottom = document.getElementById("closeGiftsBottom");

const infoButton = document.getElementById("infoButton");
const infoModal = document.getElementById("infoModal");
const closeInfo = document.getElementById("closeInfo");
const closeInfoBottom = document.getElementById("closeInfoBottom");

// ======================================
// ABRIR O ENVELOPE
// ======================================

if (openEnvelope && envelopeScreen && inviteScreen) {
  openEnvelope.addEventListener("click", () => {
    envelopeScreen.classList.add("opening");
    openEnvelope.disabled = true;

    window.setTimeout(() => {
      envelopeScreen.classList.add("hidden");
      inviteScreen.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 950);
  });
}

// ======================================
// CONFIRMAÇÃO DE PRESENÇA E LOCALIZAÇÃO
// ======================================

function configurarLinks() {
  if (rsvpButton) {
    const mensagem = encodeURIComponent(
      "Oii! Recebi seu convite e vim confirmar minha presença! 🎂💕"
    );

    rsvpButton.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

    rsvpButton.target = "_blank";
    rsvpButton.rel = "noopener noreferrer";
  }

  if (locationButton) {
    locationButton.href = LINK_LOCALIZACAO;
    locationButton.target = "_blank";
    locationButton.rel = "noopener noreferrer";
  }
}

// ======================================
// SUGESTÕES DE PRESENTES
// ======================================

function abrirSugestoes() {
  if (!giftsModal) return;

  giftsModal.classList.remove("hidden");
  closeGifts?.focus();
}

function fecharSugestoes() {
  if (!giftsModal) return;

  giftsModal.classList.add("hidden");
}

giftsButton?.addEventListener("click", abrirSugestoes);
closeGifts?.addEventListener("click", fecharSugestoes);
closeGiftsBottom?.addEventListener("click", fecharSugestoes);

giftsModal?.addEventListener("click", (event) => {
  if (event.target === giftsModal) {
    fecharSugestoes();
  }
});

// ======================================
// INFORMAÇÕES IMPORTANTES
// FICAM ESCONDIDAS ATÉ CLICAR NO BOTÃO
// ======================================

function abrirInformacoes() {
  if (!infoModal) return;

  infoModal.classList.remove("hidden");
  infoModal.style.display = "flex";
}

function fecharInformacoes() {
  if (!infoModal) return;

  infoModal.classList.add("hidden");
  infoModal.style.display = "none";
}

infoButton?.addEventListener("click", abrirInformacoes);
closeInfo?.addEventListener("click", fecharInformacoes);
closeInfoBottom?.addEventListener("click", fecharInformacoes);

infoModal?.addEventListener("click", (event) => {
  if (event.target === infoModal) {
    fecharInformacoes();
  }
});

// ======================================
// TECLA ESCAPE FECHA AS JANELAS
// ======================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharSugestoes();
    fecharInformacoes();
  }
});

// ======================================
// INICIALIZAÇÃO
// ======================================

// Garantir que as janelas comecem fechadas
fecharSugestoes();
fecharInformacoes();

// Configurar os links
configurarLinks();
