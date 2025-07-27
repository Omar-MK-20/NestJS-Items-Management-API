# NestJS Items Management API

A RESTful API built with NestJS for managing items with MongoDB integration. Deployed on Vercel.

## 🚀 Live Demo

**Production URL**: [https://nest-js-items-management-api.vercel.app](https://nest-js-items-management-api.vercel.app)

## 🛠️ Tech Stack

- **Framework**: NestJS 11.x
- **Database**: MongoDB with Mongoose ODM
- **Language**: TypeScript
- **Deployment**: Vercel
- **Configuration**: @nestjs/config

## 📋 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB database(local or cloud)

### Installation
```bash
# Clone and install packages
git clone <repository-url>
cd nest-app
npm install

3. **Configure MongoDB connection**
   
   Create a `.env` file in the root directory and add your MongoDB URI:
   ```bash
   # Create .env file
   touch .env
   ```
   
   Add the following content to your `.env` file:
   ```env
   # MongoDB Connection String
   mongoUri=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
   
   # Server Configuration
   PORT=3000
   
   # Environment
   NODE_ENV=development
   ```
   
   Replace the `mongoUri` value with your actual MongoDB connection string.

4. **Run the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

## 📚 API Endpoints

### Base URLs
- **Local**: `http://localhost:3000`
- **Production**: `https://nest-js-items-management-api.vercel.app`

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/items` | Get all items |
| `GET` | `/items/:id` | Get item by ID |
| `POST` | `/items` | Create new item |
| `PUT` | `/items/:id` | Update item |
| `DELETE` | `/items/:id` | Delete item |

### Example Usage

```bash
# Health check
curl https://nest-js-items-management-api.vercel.app/

# Get all items
curl https://nest-js-items-management-api.vercel.app/items

# Create a new item
curl -X POST https://nest-js-items-management-api.vercel.app/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Item", "description": "Test Description", "qty": 10}'
```

## 📊 Data Models

### Item Structure
```typescript
interface Item {
  id?: string;      // MongoDB ObjectId (auto-generated)
  name: string;     // Item name (required)
  desc?: string;    // Item description (optional)
  qty?: number;     // Quantity (optional)
}
```

### Create Item DTO
```typescript
class CreateItemDto {
  readonly name: string;        // Item name (required)
  readonly description: string; // Item description (required)
  readonly qty: number;         // Quantity (required)
}
```

## 🧪 Testing

```bash
npm run test          # Unit tests
npm run test:e2e      # E2E tests
npm run test:cov      # Coverage
```

## 🛠️ Development

```bash
npm run start:dev     # Development mode
npm run build         # Build
npm run lint          # Lint
npm run format        # Format code
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `mongoUri` | MongoDB connection string | Required |
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment mode | development |

## 📁 Project Structure

```
src/
├── items/
│   ├── dto/
│   │   └── create-item.dto.ts    # Data Transfer Objects
│   ├── interfaces/
│   │   └── items.interface.ts    # TypeScript interfaces
│   ├── schema/
│   │   └── item.schema.ts        # Mongoose schema
│   ├── items.controller.ts       # REST API endpoints
│   ├── items.service.ts          # Business logic
│   └── items.module.ts           # Module configuration
├── app.controller.ts             # Main app controller
├── app.service.ts               # Main app service
├── app.module.ts                # Root module
└── main.ts                      # Application entry point
```

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request
