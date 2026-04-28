# Getting Started

## Project Config
Angular 21 application with:
- **Standalone components** (no NgModules)
- **TypeScript 5.9**
- **Jasmine** for testing
- **Routing** enabled
- Plans enum for user plans (FREE, PRO, ENTERPRISE)

## Commands
```bash
npm start        # Start dev server
npm run build    # Build for production
npm test         # Run unit tests (Jasmine)
```

## Testing
Angular tests use **Jasmine** with **Karma**:

**Run all tests:**
```bash
npm test
```

**Skip watch mode for CI:**
```bash
ng test --watch=false
```

## Project Structure
```
src/
├── app/
│   ├── main.ts            # Entry point
│   ├── app.config.ts      # Root config (providers, imports)
│   ├── app.routes.ts      # Route definitions
│   ├── app.component.ts   # Root component
│   ├── users.types.ts     # Users & Plan enum
│   └── pages/
│       ├── login/
│       │   ├── login.component.{ts,html,css}
│       │   └── login.component.spec.ts
│       └── home/
│           ├── home.component.{ts,html,css}
│           └── home.routes.ts
```

## Build Output
Production build output: `dist/vibecode`

## Important Notes
- Components are **standalone** - no `@NgModule` or `imports` in decorators
- The default `app.config.ts` is where providers and imports go
- Login endpoint: POST `/login` returns `{ username, role, plan }`
- Auth state stored in `localStorage` as JSON

## Workflow Requirements
- **Update AGENTS.md regularly** after significant changes are merged
- **Build from scratch** by removing `node_modules` and rebuilding if tests fail
- **Add unit tests** to every feature change before committing
- Each component should have matching `{component}.spec.ts` test file