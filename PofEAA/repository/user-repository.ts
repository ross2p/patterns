// ==========================================
// Repository Pattern — Data Access Layer
// ==========================================

// --- Domain Entity ---
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// --- DTOs (Data Transfer Objects for input) ---
interface CreateUserDto {
  name: string;
  email: string;
}

interface UpdateUserDto {
  name?: string;
  email?: string;
}

// --- Repository Interface ---
// Defines a collection-like API for accessing domain objects,
// hiding all database-specific details from the rest of the application.
interface UserRepository {
  create(data: CreateUserDto): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: string, data: UpdateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}

// --- In-Memory Implementation ---
// A concrete repository that stores data in a Map (simulates a database).
class InMemoryUserRepository implements UserRepository {
  private users: Map<string, User> = new Map();
  private nextId = 1;

  async create(data: CreateUserDto): Promise<User> {
    const user: User = {
      id: String(this.nextId++),
      name: data.name,
      email: data.email,
      createdAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error(`User with id ${id} not found`);

    const updated: User = {
      ...user,
      ...data,
    };
    this.users.set(id, updated);
    return updated;
  }

  async delete(id: string): Promise<void> {
    if (!this.users.has(id)) {
      throw new Error(`User with id ${id} not found`);
    }
    this.users.delete(id);
  }
}

// --- Service Layer (Client) ---
// The service works with the repository interface,
// completely unaware of the underlying storage mechanism.
class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(name: string, email: string): Promise<User> {
    const existing = await this.userRepository.findByEmail(email);
    if (existing) {
      throw new Error(`User with email ${email} already exists`);
    }
    return this.userRepository.create({ name, email });
  }

  async getUserProfile(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUserName(id: string, name: string): Promise<User> {
    return this.userRepository.update(id, { name });
  }

  async removeUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}

// ==========================================
// Usage
// ==========================================
async function main() {
  // Inject the in-memory implementation (could be swapped for PostgresUserRepository, etc.)
  const repository = new InMemoryUserRepository();
  const service = new UserService(repository);

  // Create users
  const alice = await service.registerUser("Alice", "alice@example.com");
  const bob = await service.registerUser("Bob", "bob@example.com");
  console.log("✅ Created:", alice);
  console.log("✅ Created:", bob);

  // Read a user
  const found = await service.getUserProfile(alice.id);
  console.log("\n🔍 Found user:", found);

  // Update a user
  const updated = await service.updateUserName(alice.id, "Alice Smith");
  console.log("\n✏️  Updated:", updated);

  // List all users
  const allUsers = await repository.findAll();
  console.log("\n📋 All users:", allUsers);

  // Delete a user
  await service.removeUser(bob.id);
  const afterDelete = await repository.findAll();
  console.log("\n🗑️  After deleting Bob:", afterDelete);
}

main().catch(console.error);
