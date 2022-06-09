import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import Card from "../components/Card";
import "./Tab1.css";

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log("Begin async operation");
  setTimeout(() => {
    console.log("Async operation has ended");
    event.detail.complete();
  }, 2000);
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Card />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Card />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Card />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Card />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
