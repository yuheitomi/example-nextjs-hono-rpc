# Next.js and Hono RPC with Turborepo

This is a monorepo project that demonstrates a modern web application architecture using Next.js, Hono, and Turborepo. The project showcases type-safe RPC communication between frontend and backend services.

## Project Structure

The project is organized as a monorepo using Turborepo and pnpm workspaces:

```
.
├── apps/
│   ├── frontend/    # Next.js application
│   └── backend/     # Hono server with RPC endpoints
├── package.json     # Root package.json
├── turbo.json       # Turborepo configuration
└── pnpm-workspace.yaml
```

## Key Features

- **Turborepo**: Efficient monorepo management with optimized build caching
- **Type-safe RPC**: Using Hono's RPC capabilities for type-safe API communication
- **Automatic Type Generation**: Backend types are automatically generated during compilation
- **Modern Stack**:
  - Frontend: Next.js 15 with React 19
  - Backend: Hono server
  - Package Manager: pnpm
  - TypeScript for type safety

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development environment:
   ```bash
   pnpm dev
   ```

## Development

- Frontend development: `cd apps/frontend && pnpm dev`
- Backend development: `cd apps/backend && pnpm dev`
- Build all packages: `pnpm build`

## Type Generation

The backend automatically generates RPC types during compilation, which are then consumed by the frontend. This ensures type safety across the entire application stack.

## Credits

This project is strongly influenced by [hono-rpc-perf-tips-example](https://github.com/m-shaka/hono-rpc-perf-tips-example), which provides excellent examples of Hono RPC implementation and performance optimization techniques.

## License

MIT
