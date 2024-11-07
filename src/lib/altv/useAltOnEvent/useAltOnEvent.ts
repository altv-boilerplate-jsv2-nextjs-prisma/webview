import { useEffect } from 'react';

type Callback = (...args: any[]) => void;

/**
 * Listen alt:V client event and unregister it on unmount
 * @param {string} eventName The event name
 * @param {Callback} callback The event callback
 * @example
 * const myCallback = useCallback((arg1: string, arg2: number) => {
 *     console.log(arg1);
 * }, [])
 *
 * useAltOnEvent('myEventName', myCallback);
 */
export function useAltOnEvent(eventName: string, callback: Callback) {
	useEffect(() => {
		if ('alt' in window) {
			console.log('alt.on', eventName);
			alt.on(eventName, callback);
		}

		return () => {
			if('alt' in window) {
				console.log('alt.off', eventName);
				alt.off(eventName, callback);
			}
		};
	}, [callback]);
}