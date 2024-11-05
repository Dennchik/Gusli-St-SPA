function redirects() {
	window.onload = function () {
		var segmentCount = 0;
		var l = window.location;
		l.replace(
			l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
			l.pathname.split('/').slice(0, 1 + segmentCount).join(
				'/') + '/Test-Project/build/#' +
			l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g,
				'~and~') +
			(l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
			l.hash
		);
	};
}