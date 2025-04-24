import Fastify, { FastifyInstance } from 'fastify';

export default function createServer(host: string, port: number) {
    const fastify = Fastify({
        logger: true
    });

    fastify.get('/time', async (request, reply) => {
        console.log(`Received request for time from ${request.ip}`);
        reply.send({ time: new Date().toISOString() });
    });

    fastify.listen({
        host: host,
        port: port
    }, (err, address) => {

        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }

        fastify.log.info(`Server listening at ${address}`);
    });
}