# Micro app — Catalog

Remote de **Module Federation** para el host [MicroApps](../MicroApps).

- Puerto dev: **9001**
- Federation name: `catalog`
- Expone: `./App` → `src/App.tsx`
- **No** genera binario nativo (lo provee el host)

## Requisitos

- Node.js ≥ 20
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
