const gulp = require('gulp');
const smartgrid = require('smart-grid');
function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];

	let settings = require('./smartgrid.js');
	smartgrid('./src/css', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';
	smartgrid('./src/css', settings);

	done();
}
gulp.task('grid', grid);
