import * as ymaps3 from 'ymaps3';

(async function initMap() {
	const officeContainer = document.querySelector('[data-contact-js]');

	try {
		await ymaps3.ready;

		const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapControl } = ymaps3;
		const { YMapDefaultMarker, YMapZoomControl, YMapGeolocationControl, YMapRotateTiltControl } = await import('@yandex/ymaps3-default-ui-theme');
	
		class FullscreenButton extends ymaps3.YMapComplexEntity {
			constructor(map, rootContainer) {
				super({});
				this.map = map;
				this.rootContainer = rootContainer;
				this._element = null;
				this._control = null;
			}
	
			_fullScreenBtnHandler() {
				if (document.fullscreenElement) {
					document.exitFullscreen();
					this.rootContainer.removeAttribute('style');
				} else {
					this.map.container.requestFullscreen();
					this.rootContainer.style.height = 'auto';
				}
			}

			_createElement() {
				const fullScreenButtonElement = document.createElement('button');

				fullScreenButtonElement.type = 'button';
				fullScreenButtonElement.onclick = this._fullScreenBtnHandler.bind(this);
				fullScreenButtonElement.classList.add('ymaps3x0--fullscreen');

				document.addEventListener('fullscreenchange', e => {
					fullScreenButtonElement.classList.toggle('exit', document.fullscreenElement);
				});

				return fullScreenButtonElement;
			}

			_onAttach() {
				this._element = this._createElement();
				this._detachDom = ymaps3.useDomContext(this, this._element, this._element);
			}

			_onDetach() {
				this._detachDom();
				this._detachDom = null;
				this._element = null;
			}
		}

		if (officeContainer) {
			const map1 = new YMap(
				officeContainer, {
					location: {
						center: [37.704764, 55.722914],
						zoom: 16
					}
				}, [
					new YMapDefaultSchemeLayer({}),
					new YMapDefaultFeaturesLayer({})
				]		
			);
	
			map1.addChild(new YMapDefaultMarker({
				coordinates: [37.704764, 55.722914],
				color: 'red',
				title: 'Adwear ★5.0',
				subtitle: 'До 18:00',
				size: 'normal',
				iconName: 'clothes_shop'
			}));
	
			map1.addChild(
				new YMapControls({position: 'right'}, [
					new YMapControl().addChild(new FullscreenButton(map1, officeContainer)),
					new YMapZoomControl({}),
					new YMapGeolocationControl({}),
					new YMapRotateTiltControl({}),
				])
			);
		}


	} catch (error) {
		console.error("Ошибка при инициализации карты:", error);
	}

	document.addEventListener('click', e => {
		officeContainer.classList.toggle('active', e.target.closest('[data-contact-js]'));
	});
})();