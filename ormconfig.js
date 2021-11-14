require("dotenv").config();

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // databases: process.env.DATABASE,
  synchronize: false,
  logging: false,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ["src/core/infra/data/database/entities/**/*"],
  migrations: ["src/core/infra/data/database/migrations/**/*"],
  cli: {
    entitiesDir: "src/core/infra/data/database/entities",
    migrationsDir: "src/core/infra/data/database/migrations",
  },
};
