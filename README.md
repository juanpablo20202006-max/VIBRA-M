# Juntos hacemos País — Plataforma Social (VIBRA-M)

Plataforma web de impacto social que apoya y visibiliza a madres artesanas y comunidades de Colombia (La Guajira, Bolívar, Antioquia y los Llanos Orientales). Combina historias de vida, donaciones transparentes en tiempo real, catálogo de kits escolares y trazabilidad mediante escaneo de códigos QR en cada morral.

---

## 🚀 Estructura del Proyecto

- **`index.html` (Referencia 1 — Página Principal):**
  - **Header & Navegación:** 7 enlaces oficiales estructurados (*Inicio, Nuestra Causa, Nuestros Diseños / Kit Escolar, Donar, Historias de las Madres, Eventos*) y botón destacado *Donar Ahora*.
  - **Hero Principal:** Presentación institucional con fotografía auténtica y llamado a la acción.
  - **Nuestra Misión y Cómo Ayudamos:** Bloques de impacto (*Empoderamiento de Madres* y *Acceso a la Educación*) con cuadrícula fotográfica 2x2.
  - **Colección Solidaria:** Previsualización de los 3 morrales con acceso directo al catálogo.
  - **Plataforma de Donaciones Transparente:** Fondo arena (`#E5C18F`), selector de frecuencia (*única / mensual*), montos sugeridos y personalizados en USD/COP, y barras de progreso de campañas activas en tiempo real.
  - **Historias que Viajan (Escaneo QR):** Visor con cámara en tiempo real (`jsQR`), selector de pruebas y búsqueda manual de identificadores de morral (`MOR-109`, `MOR-305`, `MOR-842`).
  - **Tarjetas de Historias:** Historias de Sofía, María y Carmen, con reproductor de testimonio en audio/voz y formulario de gratitud.
  - **Eventos Comunitarios & Footer Oficial:** Información de contacto en Colombia, redes sociales y copyright dinámico.

- **`disenos.html` (Referencia 2 — Nuestros Diseños / Kit Escolar):**
  - **Título Oficial:** *"Conoce Nuestros Diseños - Kit Escolar"* centrado en rosa de marca (`#D81B60`) sobre fondo blanco.
  - **Catálogo de Morrales a 3 Columnas:**
    1. **DISEÑO: VILLAVICENCIO:** Inspirado en los amaneceres y la fauna silvestre de los Llanos Orientales.
    2. **DISEÑO: PEREIRA:** Celebrando el Paisaje Cultural Cafetero y el hilado en fibras naturales de fique.
    3. **DISEÑO: BUCARAMANGA:** Inspirado en la Ciudad de los Parques y los relieves del Cañón del Chicamocha.
  - **Interacción de Donación por Kit:** Al pulsar *"Donar para este Kit"*, se vincula automáticamente el morral seleccionado en la tarjeta de donaciones con comprobante de auditoría.
  - **Plataforma de Donaciones Transparente:** Módulo completo sobre fondo arena.

- **`DESIGN.md`:** Sistema de diseño, guía de estilo oficial, paleta cromática, tipografías y reglas de accesibilidad WCAG.

---

## 🎨 Paleta de Colores Oficial

- **Rosa Principal:** `#D81B60`
- **Rosa Claro:** `#F8E8EE`
- **Terracota / Marrón Artesanal:** `#A66A50`
- **Crema:** `#F8F3E9`
- **Arena / Beige:** `#E5C18F`
- **Texto Principal:** `#171717`
- **Texto Secundario:** `#555555`
- **Superficies:** `#FFFFFF`
- **Bordes:** `#E5E1DE`

---

## 🛠️ Tecnologías y Requisitos

- HTML5 semántico y CSS3 moderno (Variables CSS, Flexbox, CSS Grid, animaciones suaves).
- JavaScript Vanilla ES6+ sin frameworks pesados ni dependencias externas frágiles.
- Librería `jsQR` para escaneo de códigos QR con cámara web / móvil.
- Totalmente responsive (móvil, tablet y escritorio).
- Listo para abrir directamente en cualquier navegador web.
