import os from 'os';
import { PlayCallback } from "./bot/callbacks/action.play";
import { BotApp } from "./bot/client";
import { MenuCommand } from "./bot/commands/menu";
import { PlayCommand } from "./bot/commands/play";
import { StartCommand } from "./bot/commands/start";
import { AuthMiddleware } from "./bot/middlewares/auth.middleware";
import { ConfigService } from "./services/config";
import { PcService } from "./services/pc";
import { IOperatingSystem } from "./typings";
import { MacAdapter } from "./services/OS/macOs";
import { WindowsAdapter } from "./services/OS/windows";
import { LinuxAdapter } from "./services/OS/linux";
import { PcControlFacade } from './services/facades/pc.control';

const startBot = () => {
    console.log('Инициализация бота');

    let currentOS: IOperatingSystem;
    const platform = os.platform();

    switch (platform) {
        case 'darwin':
            currentOS = new MacAdapter();
            break;
        case 'win32':
            currentOS = new WindowsAdapter();
            break;
        case 'linux':
            currentOS = new LinuxAdapter();
            break;
        default:
            throw new Error(`OC ${platform} не поддерживается!`);
    }

    const configService = new ConfigService();
    const pcService = new PcService(currentOS);
    const pcControl = new PcControlFacade(pcService);

    const startCmd = new StartCommand();
    const playCmd = new PlayCommand(pcControl);
    const menuCmd = new MenuCommand();

    const playCallback = new PlayCallback(pcControl);

    const allCommands = [startCmd, playCmd, menuCmd];
    const allCallbacks = [playCallback];

    const authMiddleware = new AuthMiddleware(configService);

    const botApp = new BotApp(configService, authMiddleware, allCommands, allCallbacks);

    botApp.start();
}

startBot();