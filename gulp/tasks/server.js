//* Task server
// export function server() {
// 	$.browserSync.init({
// 		server: {
// 			baseDir: $.path.root
// 		},
// 		notify: false,
// 	});
// }

export async function server() {
	const historyApiFallback = (await import('connect-history-api-fallback')).default;

	$.browserSync.init({
		server: {
			baseDir: $.path.root
		},
		notify: false,
		middleware: [
			historyApiFallback() // Перенаправление всех маршрутов на index.html
		]
	});
}