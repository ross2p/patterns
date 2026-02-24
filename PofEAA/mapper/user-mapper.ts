// ==========================================
// Data Mapper Pattern — Object ↔ Representation Conversion
// ==========================================

// --- Domain Entity (rich domain object) ---
class UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly createdAt: Date,
  ) {}

  public getDisplayName(): string {
    return `${this.name} <${this.email}>`;
  }
}

// --- API Response DTO (what the client receives) ---
interface UserResponseDto {
  id: string;
  name: string;
  email: string;
  memberSince: string; // formatted date string
}

// --- JWT Token Payload (minimal data for authentication) ---
interface UserPayload {
  userId: string;
  email: string;
}

// --- Database Row (raw row from the database) ---
interface UserRow {
  user_id: string;
  user_name: string;
  user_email: string;
  created_at: string; // ISO string from DB
}

// --- Mapper Interface ---
// Defines a contract for converting between representations.
interface Mapper<TEntity, TDto> {
  toEntity(raw: any): TEntity;
  toDto(entity: TEntity): TDto;
}

// --- User Mapper (Entity ↔ API Response) ---
class UserMapper implements Mapper<UserEntity, UserResponseDto> {
  public toEntity(row: UserRow): UserEntity {
    return new UserEntity(
      row.user_id,
      row.user_name,
      row.user_email,
      new Date(row.created_at),
    );
  }

  public toDto(entity: UserEntity): UserResponseDto {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      memberSince: entity.createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  }
}

// --- Payload Mapper (Entity → JWT Payload) ---
// A specialized mapper for authentication — extracts only the data needed for tokens.
class PayloadMapper {
  public userEntityToPayload(entity: UserEntity): UserPayload {
    return {
      userId: entity.id,
      email: entity.email,
    };
  }
}

// ==========================================
// Usage
// ==========================================
function main() {
  // Simulate a raw database row
  const dbRow: UserRow = {
    user_id: "usr_42",
    user_name: "Alice Johnson",
    user_email: "alice@example.com",
    created_at: "2024-06-15T10:30:00Z",
  };

  const userMapper = new UserMapper();
  const payloadMapper = new PayloadMapper();

  // DB Row → Domain Entity
  const entity = userMapper.toEntity(dbRow);
  console.log("🏗️  Domain Entity:", entity);
  console.log("   Display Name:", entity.getDisplayName());

  // Domain Entity → API Response DTO
  const dto = userMapper.toDto(entity);
  console.log("\n📤 API Response DTO:", dto);

  // Domain Entity → JWT Payload
  const payload = payloadMapper.userEntityToPayload(entity);
  console.log("\n🔐 JWT Payload:", payload);

  // Demonstrate batch mapping
  const rows: UserRow[] = [
    dbRow,
    {
      user_id: "usr_43",
      user_name: "Bob Smith",
      user_email: "bob@example.com",
      created_at: "2025-01-20T08:00:00Z",
    },
  ];

  const dtos = rows.map((row) => userMapper.toDto(userMapper.toEntity(row)));
  console.log("\n📋 Batch mapped DTOs:", dtos);
}

main();
