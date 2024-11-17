export default {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "morrowind_user",
    password: "password123",
    database: "morrowind_db",
    entities: ["src/entities/**/*.ts"],
    synchronize: true, // Automatically update the schema (for development only)
};