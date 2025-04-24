import dotenv from 'dotenv';
import fs from 'fs';
import createClient from '../client/client';
import createServer from '../server/server';

dotenv.config();
const serverDetails = JSON.parse(fs.readFileSync('./config/serverDetails.json', 'utf-8'));

console.log(serverDetails.host);