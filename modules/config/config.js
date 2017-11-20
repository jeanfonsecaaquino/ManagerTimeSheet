var fs = require('fs');

module.exports = new class EnvConfig {
    constructor() {
        for (let x = 0; x < process.argv.length; x++) {
            const enviroment = process.argv[x].split("=");
            if (enviroment.length === 2 && enviroment[0] === "ENV") {
                this.enviroment = enviroment[1];
                this.printEnviroment();
            }
        }
    }
    getConfig() {
        switch(this.enviroment){
            case "development" :
                const configFile = "./modules/config/development/config.json";
                if (fs.existsSync(configFile)) {
                    return JSON.parse(fs.readFileSync(configFile));
                }
            break;
        }
    }
    printEnviroment() {
        console.log('Configurações de ambientes carregadas com sucesso, ambiente atual: ' + this.enviroment);
    }
}