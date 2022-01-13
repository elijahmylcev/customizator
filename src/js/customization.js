export default class Customization {
	constructor() {
		this.btnBlock = document.createElement('div');
		this.colorPicker = document.createElement('input');

		this.btnBlock.addEventListener('click', e => this.onScaleChange(e));
	}

	onScaleChange(e) {
		let scale;
		const body = document.querySelector('body');
		if (e.target.value) {
			scale = +e.target.value.replace(/x/g, '');
		}

		function recurse(element) {
			element.childNodes.forEach(node => {
				if (
					node.nodeName === '#text' &&
					node.nodeValue.replace(/\s+/g, '').length > 0
				) {
					let value = window.getComputedStyle(node.parentNode, null).fontSize;
					console.log(value);
				} else {
					recurse(node);
				}
			});
		}

		recurse(body);
	}

	render() {
		let scaleInputS = document.createElement('input');
		let scaleInputM = document.createElement('input');
		let panel = document.createElement('div');

		panel.append(this.btnBlock, this.colorPicker);

		scaleInputS.classList.add('scale_btn');
		scaleInputM.classList.add('scale_btn');
		this.btnBlock.classList.add('scale');
		this.colorPicker.classList.add('color');

		scaleInputS.setAttribute('type', 'button');
		scaleInputM.setAttribute('type', 'button');
		scaleInputS.setAttribute('value', '1x');
		scaleInputM.setAttribute('value', '1.5x');

		this.colorPicker.setAttribute('type', 'color');
		this.colorPicker.setAttribute('value', '#ffffff');

		this.btnBlock.append(scaleInputS, scaleInputM);

		panel.classList.add('panel');
		document.querySelector('body').append(panel);
	}
}
