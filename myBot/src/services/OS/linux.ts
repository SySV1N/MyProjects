import { exec } from "child_process";
import { IOperatingSystem } from "../../typings";

export class LinuxAdapter implements IOperatingSystem {
        openCalculator(): void {
            console.log('[Linux] Открываю калькулятор...');

            // gnome-calculator - GNOME, kcalc - KDE
            exec('kcalc');
        }
    
        closeCalculator(): void {
            console.log('[Linux] Закрываю калькулятор...');
            exec('killall -9 kcalc');
        }
    
        launchGame(gamePath: string): void {
            console.log(`[Linux] Запускаю приложение: ${gamePath}`);
            exec(`"${gamePath}"`);
        }
}