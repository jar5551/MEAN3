"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = require("./app.config");
exports.default = (mongoose) => {
    const gracefulExit = function () {
        mongoose.connection.close(() => {
            console.log(`Mongoose connection ` +
                `has disconnected through app termination`);
            process.exit(0);
        });
    };
    mongoose.Promise = Promise;
    mongoose.connection.on('connected', () => {
        console.log(`Successfully connected to ${app_config_1.AppConfig.ENV}` +
            ` database on startup `);
    });
    mongoose.connection.on('error', (err) => {
        console.error(`Failed to connect to ${app_config_1.AppConfig.ENV} ` +
            ` database on startup `, err);
    });
    mongoose.connection.on('disconnected', () => {
        console.log(`Mongoose default connection to ${app_config_1.AppConfig.ENV}` +
            ` database disconnected`);
    });
    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
    const mongoPort = app_config_1.AppConfig.MONGO.port ? ':' + app_config_1.AppConfig.MONGO.port : '';
    let mongoUserPassword = '';
    if (app_config_1.AppConfig.MONGO.username && app_config_1.AppConfig.MONGO.password) {
        mongoUserPassword = app_config_1.AppConfig.MONGO.username + ':' + app_config_1.AppConfig.MONGO.password + '@';
    }
    const uri = `mongodb://${mongoUserPassword + app_config_1.AppConfig.MONGO.host + mongoPort}/${app_config_1.AppConfig.MONGO.database}`;
    mongoose.connect(uri, (error) => {
        if (error) {
            throw error;
        }
    });
};
