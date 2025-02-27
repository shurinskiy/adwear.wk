import * as ymaps3 from 'ymaps3';

(async function initMap() {
	const rootContainer = document.querySelector('[data-contact-js]');
	if (! rootContainer) return;

	try {
		await ymaps3.ready;

		const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapControl } = ymaps3;
		const { YMapDefaultMarker, YMapZoomControl, YMapGeolocationControl, YMapRotateTiltControl } = await import('@yandex/ymaps3-default-ui-theme');

		const map = new YMap(
			rootContainer, {
				location: {
					center: [37.704764, 55.722914],
					zoom: 16
				}
			}, [
				new YMapDefaultSchemeLayer({}),
				new YMapDefaultFeaturesLayer({})
			]		
		);

		function fullScreenBtnHandler() {
			if (document.fullscreenElement) {
				document.exitFullscreen();
				rootContainer.removeAttribute('style');
			} else {
				map.container.requestFullscreen();
				rootContainer.style.height = 'auto';
			}
		}

		class FullscreenButton extends ymaps3.YMapComplexEntity {
			constructor() {
				super({});
				this._element = null;
				this._control = null;
			}

			_createElement() {
				const fullScreenButtonElement = document.createElement('button');

				fullScreenButtonElement.type = 'button';
				fullScreenButtonElement.onclick = fullScreenBtnHandler;
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


		map.addChild(new YMapDefaultMarker({
			coordinates: [37.704764, 55.722914],
			color: 'red',
			title: 'Adwear ★5.0',
			subtitle: 'До 18:00',
			size: 'normal',
			iconName: 'clothes_shop'
		}));

		map.addChild(
			new YMapControls({position: 'right'}, [
				new YMapControl().addChild(new FullscreenButton({})),
				new YMapZoomControl({}),
				new YMapGeolocationControl({}),
				new YMapRotateTiltControl({}),
			])
		);

	} catch (error) {
		console.error("Ошибка при инициализации карты:", error);
	}		

})();