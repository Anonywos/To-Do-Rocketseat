import Text from "../components/Text";
import Icon from "../components/icon";
import TrashIcon from "../assets/icons/trash.svg?react";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Container from "../components/container";

export default function PageComponents () {
    return (
        <Container>
            <Text className="text-pink-base">Olá mundo</Text>
            <Icon svg={TrashIcon} />
            <Badge variant="primary">5</Badge>
            <Badge variant="secondary">2 de 5</Badge>
            <Button>Teste</Button>
            <ButtonIcon icon={TrashIcon} variant="tertiary"/>
            <Button icon={TrashIcon} handling>Criando...</Button>
            <ButtonIcon icon={TrashIcon} variant="tertiary" handling/>
        </Container>
  )
}