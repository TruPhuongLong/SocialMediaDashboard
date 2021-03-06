import express from 'express';
import consign from 'consign';

const app = express();


consign()
    .include("src/db")
    .then("src/libs/middlewares/config.middleware.js")
    .then("src/routes")
    .then("src/libs/boot.js")
    .into(app);

