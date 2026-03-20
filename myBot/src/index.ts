import { PlayCallback } from "./bot/callbacks/action.play";
import { BotApp } from "./bot/client";
import { MenuCommand } from "./bot/commands/menu";
import { PlayCommand } from "./bot/commands/play";
import { StartCommand } from "./bot/commands/start";
import { AuthMiddleware } from "./bot/middlewares/auth.middleware";
import { ConfigService } from "./services/config";
import { PcService } from "./services/pc";

const startBot = () => {
    console.log('Инициализация бота');

    const configService = new ConfigService();
    const pcService = new PcService();

    const startCmd = new StartCommand();
    const playCmd = new PlayCommand(pcService);
    const menuCmd = new MenuCommand();

    const playCallback = new PlayCallback(pcService);

    const allCommands = [startCmd, playCmd, menuCmd];
    const allCallbacks = [playCallback];

    const authMiddleware = new AuthMiddleware(configService);

    const botApp = new BotApp(configService, authMiddleware, allCommands, allCallbacks);

    botApp.start();
}

startBot();