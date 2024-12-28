import { IonItem, IonLabel, IonList } from "@ionic/react";
import dayjs from "dayjs";
import { chunk } from "lodash";
import { useEffect, useState } from "react";
import { DKScore } from "../utils/score";

export const ScoreChart: React.FC = () => {
	const [scores, setScores] = useState<DKScore[]>([]);
	const currentTime: number = dayjs().set("minute", 0).set("second", 0).unix();

	useEffect(() => {
		setScores(
			Array.from(
				{ length: 60 * 60 * 12 },
				(_, index) => new DKScore(currentTime + index),
			),
		);
	}, [currentTime]);

	return (
		<IonList>
			{chunk(scores, 60 * 30).map((scores, index) => {
				const values: number[] = [
					[99991, 99992, 99993, 99994, 99995, 99996, 99997, 99998],
					[100000],
				].map(
					(value) =>
						scores.filter((score) => value.includes(score.rawValue)).length,
				);
				const total: number = values.reduce((acc, value) => acc + value, 0);
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<IonItem key={index}>
						<div className="w-full text-sm">
							{dayjs(currentTime * 1000)
								.add(index * 30 * 60, "second")
								.format("HH:mm:ss")}
							<div className="flex w-full">
								{values.map((value, index) => {
									const colors: string[] = ["#F1C40F", "#E74C3C", "#3498DB"];
									return (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											className="flex"
											style={{
												width: `${(value / total) * 100}%`,
												backgroundColor: colors[index],
											}}
										>
											{value / total > 0.1 && (
												<div className="text-sm font-semibold text-gray-800 px-2 overflow-clip">
													{(value / total).toLocaleString("en", {
														style: "percent",
													})}
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</IonItem>
				);
			})}
		</IonList>
	);
};
