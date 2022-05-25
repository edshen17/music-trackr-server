"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: '.env' });
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const api_1 = require("./routes/api");
const constants_1 = require("./constants");
const app = (0, express_1.default)();
const corsConfig = {
    origin: true,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsConfig));
app.enable('trust proxy');
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false,
}));
app.use((0, compression_1.default)());
app.use('/api', api_1.api);
if (constants_1.IS_PRODUCTION) {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`);
        }
        else {
            next();
        }
    });
    // static folder
    app.use(express_1.default.static(__dirname + '/public/'));
    // handle spa
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
app.use(express_1.default.static('public'));
const port = process.env.PORT || 5000;
http_1.default.createServer(app).listen(port, function () {
    console.log(`Express server listening on port ${port}`);
});
