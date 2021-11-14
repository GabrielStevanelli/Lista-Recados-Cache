"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheRepository = void 0;
const redis_1 = require("../data/connections/redis");
class CacheRepository {
    async set(key, value) {
        const redis = await redis_1.Redis.getConnection();
        return await redis.set(key, JSON.stringify(value));
    }
    async setex(key, value, ttl) {
        const redis = await redis_1.Redis.getConnection();
        return await redis.set(key, JSON.stringify(value), "EX", ttl);
    }
    async get(key) {
        const redis = await redis_1.Redis.getConnection();
        const value = await redis.get(key);
        if (!value)
            return null;
        return JSON.parse(value);
    }
    async del(key) {
        const redis = await redis_1.Redis.getConnection();
        const result = await redis.del(key);
        return result !== 0;
    }
}
exports.CacheRepository = CacheRepository;
