import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { pieChartOutline, settingsOutline, timerOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import { DKChart } from "./pages/DKChart";
import { DKSetting } from "./pages/DKSetting";
import { DKTimer } from "./pages/DKTimer";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/scores">
						<DKTimer />
					</Route>
					<Route exact path="/charts">
						<DKChart />
					</Route>
					<Route path="/settings">
						<DKSetting />
					</Route>
					<Route exact path="/">
						<Redirect to="/scores" />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="scores" href="/scores">
						<IonIcon aria-hidden="true" icon={timerOutline} />
						<IonLabel>Scores</IonLabel>
					</IonTabButton>
					<IonTabButton tab="charts" href="/charts">
						<IonIcon aria-hidden="true" icon={pieChartOutline} />
						<IonLabel>Charts</IonLabel>
					</IonTabButton>
					<IonTabButton tab="settings" href="/settings">
						<IonIcon aria-hidden="true" icon={settingsOutline} />
						<IonLabel>Settings</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
