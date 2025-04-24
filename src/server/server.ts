import Fastify, { FastifyInstance } from 'fastify';

export default function createServer(host: string, port: number) {
    /**
     * Create a Fastify server instance on the specified host and port.
     * 
     * @param {string} host - Host address for the server.
     * @param {number} port - Port that the server listens on.
     */
    const fastify = Fastify({
        logger: true
    });

    fastify.get('/time', async (request: any, reply: any) => {
        console.log(`Received request for time from ${request.ip}`);
        reply.send({ time: new Date().toISOString() });
    });

    fastify.listen({
        host: host,
        port: port
    }, (err: any, address: any) => {

        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }

        fastify.log.info(`Server listening at ${address}`);
    });
}