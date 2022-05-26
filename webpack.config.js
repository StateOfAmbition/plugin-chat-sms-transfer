const DotEnvWebpack = require('dotenv-webpack');
module.exports = (config, { isProd, isDev, isTest }) => {
    /**
     * Customize the webpack by modifying the config object.
     * Consult https://webpack.js.org/configuration for more information
     */
    // We dynamically change the path to the .env that contains the file corresponding to our profile
    let envPath;


    switch (process.env.TWILIO_PROFILE) {
        case 'sidekick-stage':
            envPath = '.env.stage';
            break;
        case 'sidekick-prod':
            envPath = '.env.prod';
            break;
        default:
          envPath = '.env.dev';

    }
    if(isDev) {
        envPath = '.env.dev'
    }
    // If path was set, use the dotenv-webpack to inject the variables
    console.log("envPath: ", envPath)
    
    if (envPath) {
        config.plugins.push(new DotEnvWebpack({
            path: envPath
        }));
    }
    return config;
}
