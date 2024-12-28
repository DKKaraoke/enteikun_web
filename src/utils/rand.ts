// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Random {
	private static readonly kRandomThreshold = 99000;
	private static readonly k100Threshold = 99990;
	private static readonly k100Probability = 500;

	static getU32(seed: number): number {
		let next: bigint = BigInt(seed);

		next = next * BigInt(1103515245) + BigInt(12345);
		let result: bigint = (next / BigInt(65536)) % BigInt(2048);

		next = next * BigInt(1103515245) + BigInt(12345);
		result <<= BigInt(10);
		result ^= (next / BigInt(65536)) % BigInt(1024);

		next = next * BigInt(1103515245) + BigInt(12345);
		result <<= BigInt(10);
		result ^= (next / BigInt(65536)) % BigInt(1024);

		return Number(result);
	}

	static getScore(time: number): number {
		const random: number = Random.getU32(time);
		const result: number =
			((random + time) % (99999 - Random.kRandomThreshold)) +
			Random.kRandomThreshold;
		if (Random.k100Threshold < result) {
			const threshold: number = (random + time) % 1000;
			if (threshold < Random.k100Probability) {
				return 100000;
			}
		}
		return result;
	}
}
