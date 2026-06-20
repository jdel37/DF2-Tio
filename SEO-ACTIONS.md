# SEO — Acciones para posicionar "D2F" en Google (Colombia)

> Lo del código YA está hecho (titles brand-first, schema con "D2F", páginas de marca, sitemap, etc.).
> Lo que falta NO es código: es indexación + autoridad + Google Business Profile.
> Esta guía deja todo listo para copiar y pegar. Haz los pasos en orden.

---

## DATOS OFICIALES (NAP) — usa EXACTAMENTE esto en todos lados

```
Nombre:      D2F Consulting
Categoría:   Business management consultant (Consultor de gestión empresarial)
Teléfono:    +57 310 235 3201
Email:       d2fgestion@gmail.com
Web:         https://www.d2fgestion.com
Ciudades:    Bogotá y Medellín, Colombia
Horario:     Lunes a Viernes, 08:00–18:00
```
⚠️ No cambies ni un espacio entre sitios. La consistencia del NAP es señal de ranking.

---

## PASO 1 — Google Search Console (5 min) — hace que Google vea los cambios YA

1. Entra a https://search.google.com/search-console (propiedad d2fgestion.com).
2. Barra superior "Inspección de URLs" → pega y pide indexación de cada una:
   - `https://www.d2fgestion.com`
   - `https://www.d2fgestion.com/blog/d2f-consulting-quienes-somos`
   - `https://www.d2fgestion.com/blog`
   - `https://www.d2fgestion.com/blog/consultoria-empresarial-colombia`
   - `https://www.d2fgestion.com/blog/planeacion-estrategica-empresas-colombia`
3. Menú "Sitemaps" → confirma que `sitemap.xml` está "Correcto" (7 URLs).

---

## PASO 2 — Google Business Profile (EL más importante para "d2f" en Colombia)

Esto es lo que te pone en el mapa y en el panel de marca al buscar "d2f" desde Colombia.

1. https://business.google.com → busca "D2F Consulting"; reclama o crea.
2. Rellena con el NAP de arriba (idéntico).
3. **Descripción** (pegar):
```
D2F Consulting es una firma de consultoría empresarial y gestión estratégica en Colombia con más de 20 años de experiencia, con presencia en Bogotá y Medellín. Ayudamos a empresas de todos los tamaños —pymes, startups y multinacionales— a crecer con estrategia, tecnología y resultados medibles.

Nuestras seis líneas de servicio:
• Gestión Estratégica: planeación y crecimiento corporativo.
• Transformación Digital: automatización y análisis de datos.
• Gestión de Proyectos: metodologías ágiles y tradicionales.
• Marketing y Comunicación: estrategia digital y marca.
• Desarrollo de Franquicias: expansión nacional e internacional.
• Academia: formación en liderazgo e innovación.

Agenda una consulta inicial gratuita y transforma tu empresa con D2F Consulting.
```
4. Categoría principal: **Business management consultant**. Secundarias: Marketing consultant, Business development service.
5. **VERIFICA el perfil** (Google manda código por correo/teléfono/video). SIN verificar, no apareces. ← lo más importante.
6. Sube logo + 5–10 fotos. Publica algo 1 vez por semana.

---

## PASO 3 — Backlinks (autoridad = por qué Google elige TU "d2f")

Crea perfil con el NAP en cada uno (gratis). Empieza por los de arriba:

| Sitio | URL | Prioridad |
|---|---|---|
| LinkedIn (página empresa) | https://www.linkedin.com/company/10602504 | confirmar que el campo "sitio web" apunta a d2fgestion.com |
| Cámara de Comercio de Bogotá | https://www.ccb.org.co | alta (si estás registrado, pide enlace en directorio) |
| Clutch | https://clutch.co | alta (directorio B2B fuerte) |
| GoodFirms | https://www.goodfirms.co | alta |
| Bing Places | https://www.bingplaces.com | importa desde Google, 1 clic |
| Páginas Amarillas CO | https://www.paginasamarillas.com.co | media |
| Cylex Colombia | https://colombia.cylex.com.co | media |
| Crunchbase | https://www.crunchbase.com | media |

**Mensaje para pedir enlace a clientes/aliados:**
```
Asunto: Pequeño favor — enlace en su web

Hola [nombre],
Fue un placer trabajar con [empresa]. Estamos creciendo nuestra presencia
digital y nos ayudaría mucho que nos incluyan como aliado/proveedor en su
sitio, enlazando a https://www.d2fgestion.com. Con gusto hacemos lo mismo
por ustedes. ¿Les parece?
Gracias, [firma]
```

---

## PASO 4 — Reseñas (cuando quieras; multiplicador de ranking)

1. GBP → "Pedir reseñas" → copia el link.
2. Mándalo a clientes (Johanna, Victor, Yamel ya dieron testimonio):
```
Hola [nombre], fue un gusto trabajar contigo. ¿Nos dejas una reseña corta
en Google? 1 minuto: [link]. ¡Gracias!
```
Meta: 10+ reseñas reales. Luego actualizar `aggregateRating.reviewCount` en layout.tsx al número real (NO inventar).

---

## PASO 5 — DNS email (pendiente, no afecta ranking pero quedó mal puesto)

En el panel DNS que controla `ns-cloud-*.googledomains.com` (donde vive el TXT
`google-site-verification`), añade 2 registros TXT:
```
TXT   @        v=spf1 -all
TXT   _dmarc   v=DMARC1; p=reject; rua=mailto:d2fgestion@gmail.com
```

---

## Expectativa realista

- "d2f consulting" / "d2f gestion" / "d2f colombia": #1 alcanzable ~1–2 semanas tras
  indexación + GBP verificado. Es tu entidad exacta, sin competencia real.
- "d2f" a secas: término ambiguo mundial. Subirás lo más alto que permita tu
  autoridad + geolocalización Colombia. No hay garantía de #1 mundial en ese token.

El factor #1 que falta = **verificar Google Business Profile**. Hazlo primero.
