import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { ScoreChart } from "../components/ScoreChart";

export const DKChart: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>DKChart</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">DKChart</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ScoreChart />
			</IonContent>
		</IonPage>
	);
};
