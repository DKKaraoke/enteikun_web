import { IonItem, IonList, IonProgressBar } from "@ionic/react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DKScore } from "../utils/score";
import styles from "./ScoreTimer.module.scss";

const Score = (props: { score: DKScore; index: number }): React.JSX.Element => {
	const { score, index } = props;
	const className: string =
		score.rawValue <= 99990
			? "text-gray-100"
			: score.rawValue === 100000
				? "text-red-500"
				: "text-red-500";
	return (
		<>
			<div className={styles.monospaced}>
				<p className="text-gray-100 text-sm font-seprimary">{score.time}</p>
				<p className={classNames(className, "text-md font-bold")}>
					{score.value}
				</p>
			</div>
		</>
	);
};

export const ScoreTimer: React.FC = () => {
	const [scores, setScores] = useState<DKScore[]>([]);

	useEffect(() => {
		const currentTime: number = dayjs().unix();
		setScores(
			Array.from(
				{ length: 3600 },
				(_, index) => new DKScore(currentTime + index),
			),
		);
		const update = setInterval(() => {
			setScores((scores) => scores.slice(1));
		}, 1000);
		return () => clearInterval(update);
	}, []);

	if (scores.length === 0) {
		return <IonProgressBar type="indeterminate" />;
	}

	return (
		<IonList>
			{scores.slice(0, 30).map((score) => (
				<IonItem key={score.id} color={score.id % 2 === 0 ? "light" : "medium"}>
					<Score score={score} index={score.id} />
				</IonItem>
			))}
		</IonList>
	);
};
