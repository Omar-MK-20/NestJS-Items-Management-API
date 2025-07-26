# NestJS Items Management API

A RESTful API built with NestJS framework for managing items with MongoDB integration.

## 🚀 Features

- **RESTful API**: Complete CRUD operations for items
- **MongoDB Integration**: Persistent data storage using Mongoose ODM
- **TypeScript**: Full type safety and modern JavaScript features
- **Validation**: Request validation using DTOs
- **Modular Architecture**: Clean separation of concerns with NestJS modules

## 🛠️ Tech Stack

- **Framework**: NestJS 11.x
- **Database**: MongoDB with Mongoose ODM
- **Language**: TypeScript
- **Testing**: Jest
- **Code Quality**: ESLint, Prettier

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database (local or cloud)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nest-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB connection**
   
   Update the MongoDB URI in `src/config/keys.ts`:
   ```typescript
   export default {
     mongoUri: 'your-mongodb-connection-string'
   }
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 1. Get All Items
Retrieves all items from the database.

- **URL**: `/items`
- **Method**: `GET`
- **Response**: Array of items
- **Status Codes**:
  - `200`: Success

**Example Response**:
```json
[
  {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "Sample Item",
    "desc": "This is a sample item",
    "qty": 100
  }
]
```

#### 2. Get Item by ID
Retrieves a specific item by its ID.

- **URL**: `/items/:id`
- **Method**: `GET`
- **Parameters**:
  - `id` (string): MongoDB ObjectId of the item
- **Response**: Item object or error message
- **Status Codes**:
  - `200`: Success
  - `404`: Item not found

**Example Response**:
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": "Sample Item",
  "desc": "This is a sample item",
  "qty": 100
}
```

**Error Response**:
```json
"there is no item with id 64f8a1b2c3d4e5f6a7b8c9d0"
```

#### 3. Create New Item
Creates a new item in the database.

- **URL**: `/items`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "New Item",
    "description": "Description of the new item",
    "qty": 50
  }
  ```
- **Response**: Created item object
- **Status Codes**:
  - `201`: Created successfully

**Example Response**:
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
  "name": "New Item",
  "desc": "Description of the new item",
  "qty": 50
}
```

#### 4. Update Item
Updates an existing item by ID.

- **URL**: `/items/:id`
- **Method**: `PUT`
- **Parameters**:
  - `id` (string): MongoDB ObjectId of the item
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Updated Item",
    "description": "Updated description",
    "qty": 75
  }
  ```
- **Response**: Updated item object or null
- **Status Codes**:
  - `200`: Updated successfully
  - `404`: Item not found

**Example Response**:
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": "Updated Item",
  "desc": "Updated description",
  "qty": 75
}
```

#### 5. Delete Item
Deletes an item by ID.

- **URL**: `/items/:id`
- **Method**: `DELETE`
- **Parameters**:
  - `id` (string): MongoDB ObjectId of the item
- **Response**: Deleted item object or null
- **Status Codes**:
  - `200`: Deleted successfully
  - `404`: Item not found

**Example Response**:
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": "Deleted Item",
  "desc": "This item was deleted",
  "qty": 25
}
```

### Data Models

#### Item Interface
```typescript
interface Item {
  id?: string;      // MongoDB ObjectId (auto-generated)
  name: string;     // Item name (required)
  desc?: string;    // Item description (optional)
  qty?: number;     // Quantity (optional)
}
```

#### Create Item DTO
```typescript
class CreateItemDto {
  readonly name: string;        // Item name (required)
  readonly description: string; // Item description (required)
  readonly qty: number;         // Quantity (required)
}
```

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🛠️ Development

### Available Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Project Structure

```
src/
├── config/
│   └── keys.ts              # Configuration (MongoDB URI)
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

## 🔧 Configuration

The application uses a simple configuration file located at `src/config/keys.ts`. Update the MongoDB connection string to point to your database:

```typescript
export default {
  mongoUri: 'mongodb+srv://username:password@cluster.mongodb.net/database'
}
```

## 📝 Environment Variables

You can also use environment variables for configuration:

- `PORT`: Server port (default: 3000)
- `MONGODB_URI`: MongoDB connection string

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.
