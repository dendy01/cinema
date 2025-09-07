import type { MovieCardProps } from "../components/MovieCard/MovieCard.props";

export const cards: MovieCardProps[] = [
	{
		id: crypto.randomUUID(),
		title: 'Black Widow',
		stars: 324,
		image: '/images/black-widow-image.png',
		inFavorites: false
	},
	{
		id: crypto.randomUUID(),
		title: 'Shang Chi',
		stars: 124,
		image: '/images/shang-chi-image.png',
		inFavorites: true
	},
	{
		id: crypto.randomUUID(),
		title: 'Loki',
		stars: 235,
		image: '/images/loki-image.png',
		inFavorites: true
	},
	{
		id: crypto.randomUUID(),
		title: 'How I Met Your Mother',
		stars: 123,
		image: '/images/your-mother-image.png',
		inFavorites: false
	},
	{
		id: crypto.randomUUID(),
		title: 'Money Heist',
		stars: 8125,
		image: '/images/money-heist-image.png',
		inFavorites: true
	},
	{
		id: crypto.randomUUID(),
		title: 'Friends',
		stars: 123,
		image: '/images/friends-image.png',
		inFavorites: false
	},
	{
		id: crypto.randomUUID(),
		title: 'The Big Bang Theory',
		stars: 12,
		image: '/images/big-bang-image.png',
		inFavorites: false
	},
	{
		id: crypto.randomUUID(),
		title: 'Two And a Half Men',
		stars: 456,
		image: '/images/half-men-image.png',
		inFavorites: false
	}
];