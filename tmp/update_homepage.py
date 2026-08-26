from pathlib import Path
import base64

idx = Path("index.liquid")
text = idx.read_text(encoding="utf-8")
original = text

def once(old, new, label):
    global text
    if old not in text:
        raise SystemExit(f"Missing marker: {label}")
    text = text.replace(old, new, 1)

# Block 02: shorten only the trust strip.
once("""  .vl-v2-trust-item {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 25px;""",
"""  .vl-v2-trust-item {
    min-height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 20px;""", "trust item")
once("""  .vl-v2-trust-item strong {
    margin-bottom: 7px;""",
"""  .vl-v2-trust-item strong {
    margin-bottom: 4px;""", "trust strong")
once("""  .vl-v2-trust-item span {
    color: #666;
    font-size: 13px;""",
"""  .vl-v2-trust-item span {
    color: #666;
    font-size: 12px;""", "trust span")

# Compact B2B/Why sections.
once("""  .vl-v2-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 30px;
    margin-bottom: 45px;""",
"""  .vl-v2-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 30px;
    margin-bottom: 32px;""", "heading margin")
once("""  .vl-v2-client {
    min-height: 180px;
    padding: 25px;""",
"""  .vl-v2-client {
    min-height: 132px;
    padding: 20px;""", "client card")
once("""  .vl-v2-why {
    padding: 35px;""",
"""  .vl-v2-why {
    padding: 24px;""", "why card")
once("""  .vl-v2-why h3 {
    margin: 20px 0 10px;""",
"""  .vl-v2-why h3 {
    margin: 16px 0 8px;""", "why heading")

# Add compact section utility after gray section.
once("""  .vl-v2-section--gray {
    background: var(--vl-gray-50);
  }
""",
"""  .vl-v2-section--gray {
    background: var(--vl-gray-50);
  }

  .vl-v2-section--compact {
    padding: 64px 0;
  }
""", "compact section css")

# Veles Light CSS before calculator CSS.
light_css = """  /* =========================================================
     VELES LIGHT
  ========================================================= */

  .vl-v2-light {
    position: relative;
    overflow: hidden;
    background: #0b0b0b;
    color: #fff;
  }

  .vl-v2-light .vl-v2-container {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .vl-v2-light-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(320px, .75fr);
    gap: 48px;
    align-items: center;
  }

  .vl-v2-light-media {
    overflow: hidden;
    border: 1px solid #333;
    background: #111;
  }

  .vl-v2-light-media img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .vl-v2-light-copy {
    max-width: 520px;
  }

  .vl-v2-light-logo {
    display: block;
    width: min(100%, 360px);
    height: auto;
    margin-bottom: 28px;
    filter: invert(1);
  }

  .vl-v2-light .vl-v2-eyebrow {
    color: #fff;
  }

  .vl-v2-light .vl-v2-eyebrow::before {
    background: #fff;
  }

  .vl-v2-light h2 {
    margin: 0 0 18px;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: clamp(34px, 4vw, 52px);
    line-height: 1.05;
  }

  .vl-v2-light p {
    margin: 0 0 28px;
    color: #cfcfcf;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 1.7;
  }

  .vl-v2-light .vl-v2-btn {
    border-color: #fff;
    background: #fff;
    color: #000 !important;
  }

  .vl-v2-light .vl-v2-btn:hover {
    background: transparent;
    color: #fff !important;
  }

  .vl-v2-light-note {
    margin-top: 28px;
    padding-top: 16px;
    border-top: 1px solid #333;
    color: #888;
    font-size: 11px;
    line-height: 1.5;
  }

"""
once("""  /* =========================================================
     B2B CALCULATOR INTRO
  ========================================================= */""",
light_css + """  /* =========================================================
     B2B CALCULATOR INTRO
  ========================================================= */""", "light css marker")

# Insert Veles Light after catalog and before calculator.
light_html = """
  <!-- =======================================================
       4. VELES LIGHT
  ======================================================== -->

  <section class="vl-v2-light">
    <div class="vl-v2-container">
      <div class="vl-v2-light-grid">

        <div class="vl-v2-light-media">
          <img
            src="{{ \"veles-light-photo.webp\" | asset_url }}"
            alt="Veles Light — дизайнерские настольные лампы из натурального дерева"
            loading="lazy"
            decoding="async">
        </div>

        <div class="vl-v2-light-copy">
          <div class="vl-v2-eyebrow">Новая линия Veles</div>

          <img
            class="vl-v2-light-logo"
            src="{{ \"veles-light-logo.webp\" | asset_url }}"
            alt="VELES LIGHT"
            loading="lazy"
            decoding="async">

          <h2>Природа, воплощённая в свете.</h2>

          <p>
            Veles Light — отдельное направление Veles:
            дизайнерские светильники ручной работы из натурального массива дерева
            для премиальных интерьеров и индивидуальных проектов.
          </p>

          <a
            href="https://veleslight.ru"
            class="vl-v2-btn"
            target="_blank"
            rel="noopener noreferrer">
            Перейти в Veles Light →
          </a>

          <div class="vl-v2-light-note">
            Собственное производство · натуральное дерево · custom-made
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- =======================================================
       5. CALCULATOR
  ======================================================== -->

"""
once("""  <!-- =======================================================
       4. CALCULATOR
  ======================================================== -->

  <section""", light_html + """  <section""", "calculator insertion")

# Renumber subsequent blocks; final CTA stays unnumbered.
once("""  <!-- =======================================================
       5. CUSTOM PRODUCTION
  ======================================================== -->""",
"""  <!-- =======================================================
       6. CUSTOM PRODUCTION
  ======================================================== -->""", "custom comment")
once("""  <!-- =======================================================
       6. CLIENTS
  ======================================================== -->

  <section class="vl-v2-section vl-v2-section--gray">""",
"""  <!-- =======================================================
       7. B2B
  ======================================================== -->

  <section class="vl-v2-section vl-v2-section--gray vl-v2-section--compact">""", "b2b section")
once("""  <!-- =======================================================
       7. WHY US
  ======================================================== -->

  <section class="vl-v2-section">""",
"""  <!-- =======================================================
       8. WHY VELES LEGS
  ======================================================== -->

  <section class="vl-v2-section vl-v2-section--compact">""", "why section")
once("""  <!-- =======================================================
       8. FINAL CTA
  ======================================================== -->""",
"""  <!-- =======================================================
       FINAL CTA
  ======================================================== -->""", "final cta comment")

# Add verified LocalBusiness JSON-LD before the homepage JS.
schema = """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://veles-legs.ru/#localbusiness",
  "name": "Veles Legs",
  "legalName": "ООО «ФК «ВЕЛЕС»",
  "url": "https://veles-legs.ru/",
  "telephone": [
    "+7-499-290-52-00",
    "+7-985-990-93-05"
  ],
  "email": "veles.mf@yandex.ru",
  "taxID": "5074060050",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "ОГРН",
    "value": "1185074011594"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Большая Серпуховская, 43 к102",
    "addressLocality": "Подольск",
    "addressRegion": "Московская область",
    "postalCode": "142105",
    "addressCountry": "RU"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  }]
}
</script>


"""
once("""<script>
(function () {""", schema + """<script>
(function () {""", "schema insertion")

if text == original:
    raise SystemExit("No changes made")

idx.write_text(text, encoding="utf-8")
Path("veles-light-photo.webp").write_bytes(base64.b64decode("""__PHOTO__"""))
Path("veles-light-logo.webp").write_bytes(base64.b64decode("""__LOGO__"""))
print("updated", idx.stat().st_size)
