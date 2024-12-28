import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { ScoreTimer } from "../components/ScoreTimer";

export const DKTimer: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>RTScore</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">RTScore</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ScoreTimer />
			</IonContent>
		</IonPage>
	);
};
