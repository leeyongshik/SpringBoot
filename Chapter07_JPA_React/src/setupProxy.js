const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/user', {
			target: 'http://localhost:8080', 
			changeOrigin: true,
		})
	);
};