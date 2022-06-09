import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

const Card: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        blanditiis voluptatibus cumque sequi cupiditate, corrupti voluptatem. At
        incidunt, numquam quibusdam temporibus rem minima? Culpa assumenda
        aliquid dolorem ipsa exercitationem, soluta blanditiis perspiciatis
        eveniet possimus natus eius hic repudiandae voluptas quis quae accusamus
        molestias, veritatis sint minima officia ab. Molestiae, aliquid!
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
