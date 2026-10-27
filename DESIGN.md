# DESIGN.md — Juntos hacemos País
Sistema de Diseño e Identidad Visual Oficial

## 1. Descripción General
Plataforma web para una iniciativa social colombiana sin ánimo de lucro que empodera y dignifica a madres artesanas y comunidades en departamentos como La Guajira, Bolívar, Antioquia y los Llanos Orientales. El sitio combina historias humanas, información sobre la causa, donaciones transparentes, un catálogo de kits escolares artesanales y una experiencia interactiva para escanear códigos QR asociados a morrales.

La interfaz transmite **confianza, cercanía, impacto social y transparencia radical**. La experiencia visual es cálida y humana, con fotografía auténtica, tarjetas limpias y llamadas a la acción visibles.

---

## 2. Paleta de Colores Oficial

| Uso | Nombre | Código Hex | Aplicación |
| :--- | :--- | :--- | :--- |
| **Rosa Principal** | Fucsia Marca | `#D81B60` | Botones de donación, estados activos, enlaces destacados e iconos principales |
| **Rosa Claro** | Pálido / Detalle | `#F8E8EE` | Fondos de insignias (badges), estados hover y elementos suaves |
| **Terracota** | Marrón Artesanal | `#A66A50` | Botones secundarios, etiquetas de técnica artesanal y fibra natural |
| **Crema** | Fondo Cálido | `#F8F3E9` | Secciones informativas, eventos y experiencia de escaneo QR |
| **Arena / Beige** | Fondo Destacado | `#E5C18F` | Plataforma de Donaciones Transparente |
| **Texto Principal** | Negro Suave | `#171717` | Encabezados, títulos y textos de alto contraste |
| **Texto Secundario** | Gris Oscuro | `#555555` | Descripciones, párrafos de apoyo y metadatos |
| **Superficies** | Blanco Puro | `#FFFFFF` | Header, tarjetas de productos, modales y footer |
| **Bordes** | Gris Claro | `#E5E1DE` | Separadores, divisores y contornos de tarjetas |

---

## 3. Tipografía y Jerarquía
- **Familia tipográfica:** `Plus Jakarta Sans`, sans-serif moderno, geométrico y altamente legible.
- **Títulos principales (Display / H1):** 700 - 800 weight, escala fluida `clamp(2rem, 4vw, 3.2rem)`.
- **Títulos de sección (H2):** 800 weight, escala `clamp(1.6rem, 2.8vw, 2.4rem)`.
- **Subtítulos y tarjetas (H3):** 700 weight, `1.15rem - 1.35rem`.
- **Texto de párrafo (Body):** 400 - 500 weight, interlineado `1.6 - 1.65` para lectura cómoda.
- **Botones y etiquetas:** 600 - 700 weight, bordes completamente redondeados (`border-radius: 9999px`).

---

## 4. Estructura de Navegación y Header
Header horizontal sobre fondo blanco con sombra sutil (`0 2px 10px rgba(0,0,0,0.03)`).
Distribución obligatoria de izquierda a derecha:
1. **Logotipo** de Juntos hacemos País (emblema con corazón artesanal + tipografía oficial).
2. **Inicio** (`index.html`)
3. **Nuestra Causa** (`#mision` / `index.html#mision`)
4. **Nuestros Diseños / Kit Escolar** (`disenos.html`)
5. **Donar** (`#donaciones`)
6. **Historias de las Madres** (`#historias`)
7. **Eventos** (`#eventos`)
8. **Botón destacado "Donar Ahora"** (`.btn-primary`, rosa `#D81B60`, texto blanco).

En móvil: menú compacto accesible con botón hamburguesa y navegación táctil optimizada.

---

## 5. Páginas y Secciones del Proyecto

### 5.1 Referencia 1: Página Principal (`index.html`)
- **Hero Principal:** Fotografía amplia de madres tejedoras y familias, título *"Juntos hacemos País"*, texto de apoyo y botón *"Apoya a una Madre"*.
- **Nuestra Misión y Cómo Ayudamos:** 2 columnas. Columna izquierda con 2 bloques de impacto (*Empoderamiento de Madres* y *Acceso a la Educación*). Columna derecha con cuadrícula fotográfica 2x2.
- **Plataforma de Donaciones Transparente:** Fondo arena (`#E5C18F`), título centrado, 2 áreas (Izquierda: ilustración corazón, tarjeta con frecuencia, montos $10, $25, $50, $100 y personalizado; Derecha: campañas activas con barras de progreso y pasarelas de pago).
- **Historias que Viajan — Escanea tu Morral:** Fondo crema (`#F8F3E9`), mockup móvil con morral y código QR, botón de escáner con cámara HTML5, fallback manual y códigos de prueba.
- **Tarjetas de Historias:** Cuadrícula de 3 columnas (Sofía MOR-109, María MOR-305, Carmen MOR-842) y tarjeta de voluntariado. Modales interactivos de historia con reproductor de audio/voz y envío de gratitud.
- **Eventos Comunitarios:** Fechas de ferias y talleres de hilado en vivo.
- **Footer Oficial:** 4 columnas (Inicio, Nuestra Causa, Contacto Info, Marca) con copyright dinámico.

### 5.2 Referencia 2: Nuestros Diseños / Kit Escolar (`disenos.html`)
- **Título de la sección:** Centrado, en color fucsia de marca (`#D81B60`), fondo blanco: *"Conoce Nuestros Diseños - Kit Escolar"*.
- **Catálogo de 3 Morrales (3 columnas en escritorio):**
  1. **DISEÑO: VILLAVICENCIO:** Morral con motivos llaneros, sol y fauna del Meta. Descripción y botón *"Donar para este Kit"*.
  2. **DISEÑO: PEREIRA:** Morral con motivos del Paisaje Cultural Cafetero. Descripción y botón *"Donar para este Kit"*.
  3. **DISEÑO: BUCARAMANGA:** Morral con motivos de los Parques y el Cañón de Santander. Descripción y botón *"Donar para este Kit"*.
- **Interacción de Donación por Kit:** Al pulsar *"Donar para este Kit"*, la página se desplaza suavemente hacia la sección de donaciones y preselecciona el kit escolar en el formulario de donación.
- **Plataforma de Donaciones Transparente:** Continuación de la sección sobre fondo arena, vinculada al kit seleccionado.
- **Footer Oficial:** Idéntico y consistente con la navegación global.

---

## 6. Principios de Accesibilidad y Usabilidad
- Ratios de contraste WCAG AA cumplidos en todos los textos sobre fondos de color.
- Navegación accesible por teclado (`:focus-visible` con anillo fucsia).
- Atributos semánticos (`role="progressbar"`, `aria-checked`, `aria-label`, `alt` descriptivos).
- Soporte de reducción de movimiento (`@media (prefers-reduced-motion)`).
- Validación de datos monetarios en tiempo real sin permitir valores negativos o vacíos.
