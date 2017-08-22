/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from 'views/container/';

import article from './article';

export default {
	path     : '/adv',
	name     : '高级实战',
	icon     : 'inbox',
	component: Container.Home,
	redirect : '/adv/article',
	children : [article]
};