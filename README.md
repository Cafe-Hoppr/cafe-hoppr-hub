# Cafe Hoppr

A modern web application for discovering and reviewing cafes in Bandung. Find your perfect Work From Cafe (WFC) spot or simply explore new cafes around the city.

## Features

- 🏪 **Browse Cafes**: Discover cafes with detailed information and reviews
- ⭐ **Rate & Review**: Add reviews with comprehensive ratings (price, wifi, seating, amenities, etc.)
- 🔍 **Search & Filter**: Find cafes by name or review content
- 📊 **Detailed Ratings**: 10+ rating categories including WiFi, seating comfort, electricity sockets, food quality, and more
- 📍 **Location Links**: Direct links to Google Maps and Apple Maps
- 👥 **Contributor System**: Multiple contributors can add reviews for the same cafe

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Icons**: Custom SVG icons + Lucide React
- **Database**: Neon PostgreSQL
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Notifications**: Sonner (Toast notifications)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm` or `corepack enable`)
- A Neon PostgreSQL database (or any PostgreSQL database)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cafe-hoppr-hub
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Copy the example environment file and update it with your actual values:
```bash
cp .env.example .env
```

Then edit the `.env` file and add your Neon PostgreSQL database connection string:
```env
VITE_DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

**Important**: The `.env` file should be in the root directory and will not be committed to git (it's already in `.gitignore`). Make sure to add your actual Neon PostgreSQL database connection string here.

4. Run the development server:
```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── AddCafeModal/   # Multi-page form for adding cafes
│   ├── EditCafeModal/  # Multi-page form for editing cafes
│   ├── icons/          # Custom SVG icon components
│   └── ui/             # shadcn-ui components
├── contexts/            # React Context providers
├── integrations/       # Database and external service integrations
│   └── neon/           # Neon database client and types
├── pages/              # Page components
└── lib/                # Utility functions
```

## Database Schema

The application uses two main tables:

- **cafes**: Stores cafe information (name, location, photos, operational hours, etc.)
- **reviews**: Stores individual reviews with ratings (supports multiple reviews per cafe)

## Building for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## Development

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint to check for code issues
- `pnpm run lint:fix` - Run ESLint and automatically fix issues
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check code formatting without making changes

### Code Quality

This project uses automated code quality tools that run on every git commit:

- **Prettier**: Code formatting
- **ESLint**: Code linting
- **Lefthook**: Git hooks for automated checks

**Commit Message Format**: All commit messages must follow [Semantic Commit](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Examples**:
- `feat: add review modal functionality`
- `fix(cafe-card): resolve image placeholder issue`
- `docs: update README with setup instructions`
- `style: format code with prettier`
- `refactor(modal): simplify form validation logic`

The commit hook will automatically:
1. Format your code with Prettier
2. Lint your code with ESLint
3. Validate your commit message format

If any check fails, the commit will be blocked until issues are resolved.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for personal use.
