import { exec } from "node:child_process";
import { IOperatingSystem } from "../../typings";

export class MacAdapter implements IOperatingSystem {
    openCalculator(): void {
        console.log('[MacOS] Открываю калькулятор...');
        exec('open -a Calculator');
    }

    closeCalculator(): void {
        console.log('[MacOS] Закрываю калькулятор...');
        exec('killall Calculator');
    }

    launchGame(gamePath: string): void {
        console.log(`[MacOS] Запускаю приложение: ${gamePath}`);
        exec(`open "${gamePath}"`);
    }
}