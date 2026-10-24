/* =========================================================
   SAÚDECLINIC — demo.js
   Botón flotante de WhatsApp (se crea solo, sin tocar el HTML)
   ========================================================= */

// 👈 Pon aquí el número de la clínica: 55 + DDD + número, sin espacios
const NUMERO_WHATSAPP = '+5592993018859';

const MENSAJE = 'Olá! Gostaria de agendar uma consulta.';

const botao = document.createElement('a');
botao.href = 'https://wa.me/' + NUMERO_WHATSAPP + '?text=' + encodeURIComponent(MENSAJE);
botao.target = '_blank';
botao.rel = 'noopener';
botao.setAttribute('aria-label', 'Agendar consulta pelo WhatsApp');
botao.textContent = '💬';

Object.assign(botao.style, {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: '#22c55e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px',
  textDecoration: 'none',
  boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)',
  zIndex: '999',
  transition: 'transform .25s ease'
});

/* crece un poco al pasar el mouse */
botao.addEventListener('mouseenter', () => botao.style.transform = 'scale(1.12)');
botao.addEventListener('mouseleave', () => botao.style.transform = 'scale(1)');

document.body.appendChild(botao);

    // 1. Al cargar la página, verificamos la memoria del teléfono/navegador
    window.onload = function() {
        if (!localStorage.getItem("acepto_politicas")) {
            // Si NO ha aceptado, mostramos el aviso
            document.getElementById("aviso-privacidad").style.display = "block";
        }
    };

    // 2. Al hacer clic en el botón, guardamos el dato localmente y ocultamos el aviso
    function aceitarTermos() {
        localStorage.setItem("acepto_politicas", "true");
        document.getElementById("aviso-privacidad").style.display = "none";
    }
