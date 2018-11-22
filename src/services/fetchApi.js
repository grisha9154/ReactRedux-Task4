export default class FetchApi {
	static get(url , param){
		return fetch(`${url}${this.insertParam(param)}`);
	}

	static insertParam(param){
		if(!param){
			return null;
		}
		const mapOfParam = Object.keys(param).map((key)=> {
			return `${key}="${param[key]}"`;
		});

		return `?${mapOfParam.join('&')}`;
	}
}