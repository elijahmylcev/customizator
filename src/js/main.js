const { default: Customization } = require('./customizator');

window.addEventListener('DOMContentLoaded', () => {
	const panel = new Customization();
	panel.render();
});
