# Micro app — Catalog

Remote de **Module Federation** para el host [MicroApps](../MicroApps).

Manual del proyecto completo: [MicroApps/docs/00-manual-de-usuario.md](../MicroApps/docs/00-manual-de-usuario.md).

- Puerto dev: **9001**
- Federation name: `catalog`
- Expone: `./App` → `src/App.tsx`
- **No** genera binario nativo (lo provee el host)

## Requisitos

- Node.js 24 (ver `.nvmrc`; mínimo 22.13)
- El host MicroApps debe apuntar a:
  `catalog@http://localhost:9001/${platform}/mf-manifest.json`

## Arranque

```bash
npm install
npm start
```

Comprobar:

```bash
curl http://localhost:9001/android/mf-manifest.json
```

## Lint / format (Biome)

```bash
npm run lint
npm run lint:fix
npm run format
```

## Uniwind, typecheck y Changesets

- Estilos con `className` (Uniwind/Tailwind v4): `global.css` + `UniwindRspackPlugin` desde `../MicroApps/packages/uniwind-rspack`. El CSS se importa en `src/App.tsx` (módulo expuesto).
- `npm run typecheck` — `tsc` filtrado (sin errores de node_modules).
- `npm test` / `test:watch` / `test:coverage` — Jest + React Native Testing Library (ver [MicroApps/docs/09-tests.md](../MicroApps/docs/09-tests.md)).
- `npm run changeset` / `changeset:status` / `changeset:version`.

Detalle: [MicroApps/docs/08-uniwind-typecheck-changesets.md](../MicroApps/docs/08-uniwind-typecheck-changesets.md)

## Pipeline de PR

`.github/workflows/pr-verify.yml` corre en cada pull request a `main`: `npm ci` → typecheck → tests (Jest) → Biome. Clona el host como carpeta hermana para resolver `@microapps/uniwind-rspack` (rama `HOST_REF`). En local: `npm run verify`.

Detalle: [MicroApps/docs/10-ci-turbo-rozenite.md](../MicroApps/docs/10-ci-turbo-rozenite.md)

## Relación con el host

Coloca este repo **junto** al host:

```text
Proyectos/
├── MicroApps/           # host (base)
├── microapp-catalog/    # este repo
└── microapp-profile/
```

Desde el host:

```bash
npm run start:catalog   # o: npm start en esta carpeta
```
