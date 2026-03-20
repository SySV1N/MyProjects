import dotenv from 'dotenv';

export class ConfigService {
    private _config: dotenv.DotenvParseOutput;

    public constructor() {
        const cfg = dotenv.config();

        if (cfg.error) {
            throw new Error("Не найден файл .env");
        }

        if (!cfg.parsed) {
            throw new Error("Пустой файл .env");
        }

        this._config = cfg.parsed;
    }

    public get(key: string): string {
        const response = this._config[key];

        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }

        return response;
    }

    public getNumber(key: string): number {
        const response = this._config[key];

        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }

        if (Number.isNaN(response)) {
            throw new Error(`Значение не является числом, ключ которого: ${key}`);
        }

        return Number(response);
    }
}