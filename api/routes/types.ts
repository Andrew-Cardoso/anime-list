import {FastifyInstance, FastifyLoggerInstance, FastifyReply, FastifyRequest} from 'fastify';
import {RouteGenericInterface} from 'fastify/types/route';
import {IncomingMessage, Server, ServerResponse} from 'http';

type Req = FastifyRequest<
	RouteGenericInterface,
	Server,
	IncomingMessage,
	unknown,
	FastifyLoggerInstance
>;
type Rep = FastifyReply<Server, IncomingMessage, ServerResponse, RouteGenericInterface, unknown>;
type Res = FastifyInstance<Server, IncomingMessage, ServerResponse>;

export type Handler = (req: Req, rep: Rep) => any;
