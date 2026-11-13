

## 1. Initialize TypeScript

```bash
npx tsc --init
```
Creates `tsconfig.json`, which stores TypeScript compiler settings.

## 2. Folder Structure

```text
project/
├── src/       # TypeScript files (.ts)
├── dist/      # Compiled JavaScript files (.js)
├── package.json
└── tsconfig.json
```

Set these folders in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src"]
}
```

## 3. Compile TypeScript

```bash
npx tsc -p .
```

Compiles the project using the `tsconfig.json` in the current directory.

## 4. Create `.gitignore`

```bash
npx gitignore node
```

Generates a Node.js `.gitignore` file.

## 5. Install Development Tools

```bash
npm i -D typescript
npm i -D tsc-watch
```

`-D` means `--save-dev`: installs a package as a development dependency.

## 6. Auto-Compile and Restart

Add this to `package.json`:

```json
"scripts": {
  "dev": "tsc-watch --onSuccess \"node dist/index.js\""
}
```

Run:

```bash
npm run dev
```

`tsc-watch` recompiles TypeScript when files change and runs the Node.js app after successful compilation.

## 7. Type Definitions

```bash
npm i express
npm i -D @types/express
npm i -D @types/node
```

- `@types/express` — TypeScript types for Express.
- `@types/node` — Types for Node.js APIs like `fs`, `path`, `http`, and `process`.

## 8. Zod — Environment Validation

Install:

```bash
npm i zod
```

Example `src/env.ts`:

```typescript
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().min(1)
});

export const env = envSchema.parse(process.env);
```

Zod validates environment variables at runtime.

## Quick Revision

| Command | Purpose |
|---|---|
| `npx tsc --init` | Create `tsconfig.json` |
| `npx tsc -p .` | Compile using project config |
| `npx gitignore node` | Generate Node.js `.gitignore` |
| `npm i -D typescript` | Install TypeScript for development |
| `npm i -D tsc-watch` | Watch and recompile files |
| `npm i -D @types/node` | Install Node.js types |
| `npm i -D @types/express` | Install Express types |
| `npm i zod` | Install Zod |
| `npm run dev` | Start development script |

**Remember:** TypeScript (`.ts`) is compiled into JavaScript (`.js`), which Node.js executes.
"""


