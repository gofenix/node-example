'use strict';

const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const Offset = kafka.Offset;
const Client = kafka.Client;
const topic = 'cust_basic_service';

const client = new Client('61.144.241.205:9092');
const topics = [{
    topic: topic,
    partition: 1
}];
const options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };
const consumer=new Consumer(client, topics, options);
const offset = new Offset(client);

consumer.on('message', message => {
    console.log(message);
});

consumer.on('error', err=>{
    console.log(err);
});
