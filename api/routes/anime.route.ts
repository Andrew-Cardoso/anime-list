import axios from 'axios';
import {redis} from '../redis';
import {Handler} from './types';

type QueryParams = {
	pageSize?: number;
	offset?: number;
	filter?: string;
};

const URL = 'https://kitsu.io/api/edge/anime';

const buildUrlParams = (query?: QueryParams) => {
	const params: string[] = [];
	if (!query) return params;

	query.pageSize && params.push(`page[limit]=${query.pageSize}`);
	query.offset && params.push(`page[offset]=${query.offset}`);
	query.filter && params.push(`filter${query.filter}`);

	return params;
};

export const handler: Handler = async (req, reply) => {
	const query = req.query as QueryParams;

	const params = buildUrlParams(query);

	const finalUrl = [URL, params.join('&')].join('?');

	const cached = await redis.get(finalUrl);

	if (cached) return JSON.parse(cached);

	const response = await axios.get(finalUrl);

	const items = response?.data?.data;

	if (!items) return reply.code(503).send();

	const count = response.data.meta.count;

	await redis.set(finalUrl, JSON.stringify({items, count}));

	return {items, count};
};
