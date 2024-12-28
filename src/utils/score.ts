import dayjs from "dayjs";
import { Random } from "./rand";

export class DKScore {
	readonly id: number;
	private readonly _value: number;
	private readonly _time: number;

	constructor(time: number) {
		this.id = time;
		this._value = Random.getScore(time);
		this._time = time;
	}

	get rawValue(): number {
		return this._value;
	}

	get value(): string {
		return (this._value * 0.001).toFixed(3);
	}

	get time(): string {
		return dayjs(this._time * 1000).format("HH:mm:ss");
	}
}
