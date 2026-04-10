# Log modifiche sito - 5 marzo 2026

## Modifiche effettuate

### 1. Abstract collassabile per "Murals Against Bullets"
- Aggiunto pulsante [Abstract] accanto al titolo del paper nella sezione Work in Progress
- Cliccando si espande/comprime l'abstract completo
- Usa il componente Bootstrap `collapse`
- Commit: `1bf28d2` - Add collapsible abstract for Murals Against Bullets paper

### 2. Abstract collassabile per "Illicit Shadows: The Cultural Goods Trade Gap for Italy"
- Aggiunto pulsante [Abstract] accanto al titolo del paper nella sezione Publications
- Stesso meccanismo di collapse
- Commit: `1454a6d` - Add collapsible abstract for Illicit Shadows paper

### 3. Riordino sezioni in research.html
- Spostata la sezione "Work in Progress" prima di "Publications"
- Ordine finale: Research Interests > Work in Progress > Publications > Workshops and Conferences Organized
- Commit: `da930c2` - Move Work in Progress section before Publications

### 4. Stile CSS per abstract
- Aggiunta classe `.abstract-toggle` per il pulsante [Abstract]
- Aggiunta classe `.abstract-text` con bordo laterale verde (accent color) e sfondo leggero
- File modificato: `style.css`

### 5. Eliminazione repository fork
- Eliminata la repository forkata `eacciai/clo-author` da GitHub

## File modificati
- `research.html`
- `style.css`