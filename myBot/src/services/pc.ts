// import { exec } from 'node:child_process';

// export class PcService {
//     public launchGame(): void {
//         console.log('Поступила команда на запуск');

//         // Windows: calc
//         // Mac: open -a Calculator
//         // Ubuntu, Fedora, Debian: gnome-calculator
//         // Linux KDE: kcalc

//         // 'C:\\Games\\CyberPunk 2077\\bin\\x64\\Cyberpunk2077.exe'

//         const command = 'open -a Calculator';

//         exec(command, (error, stdout, stderr) => {
//             if (error) {
//                 console.error(`Ошибка запуска:`, error);
//                 return;
//             }

//             console.log('Программа успешно запустилась!');
//         });
//     }
// }

import { IOperatingSystem } from '../typings';
export class PcService {
    constructor (private _os: IOperatingSystem) {}

    public openCalculator(): void {
        this._os.openCalculator();
    };

    public closeCalculator(): void {
        this._os.closeCalculator();
    };

    public launchGame(gamePath: string): void {
        this._os.launchGame(gamePath);
    };   
};