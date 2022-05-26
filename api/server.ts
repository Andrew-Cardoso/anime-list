import Fastify from 'fastify';
import cors from '@fastify/cors';
import {handler} from './routes/anime.route';
import {startRedis} from './redis';

const fastify = Fastify();
fastify.register(cors);

fastify.get('/animes', handler);

(async () => {
	try {
		await startRedis();
		await fastify.listen(3000);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
})();
