import { Client, Entity, Schema, Repository, Client } from 'redis-om';

const Client=new Client();

async function connect(){
    if (!client.isOpen()){
        await client.open(process.env.REDIS_URL);
    }
}
