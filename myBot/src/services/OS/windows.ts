import { exec } from "node:child_process";
import { IOperatingSystem } from "../../typings";

export class WindowsAdapter implements IOperatingSystem {
    openCalculator(): void {
        console.log('[Windows] Открываю калькулятор...');
        exec('calc');
    }

    closeCalculator(): void {
        console.log('[Windows] Закрываю калькулятор...');
        exec('taskkill /IM CalculatorApp.exe /F');
    }

    launchGame(gamePath: string): void {
        console.log(`[Windows] Запускаю приложение: ${gamePath}`);
        exec(`"${gamePath}"`);
    }
}