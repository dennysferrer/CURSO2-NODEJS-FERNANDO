"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.http = void 0;
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
