import Icon, { EnvironmentOutlined, GiftOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Typography } from "antd";

type Props = {
    onOpenGifts: () => void;
    formsUrl: string;
    mapsUrlIglesia: string;
    mapsUrlSalon: string;
};

const ConfirmacionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M638-80 468-250l56-56 114 114 226-226 56 56L638-80ZM480-520l320-200H160l320 200Zm0 80L160-640v400h206l80 80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v174l-80 80v-174L480-440Zm0 0Zm0-80Zm0 80Z" /></svg>
);

export default function CardsSection({ onOpenGifts, formsUrl, mapsUrlIglesia, mapsUrlSalon }: Props) {
    return (
        <Row style={{ minHeight: "30vh", padding: "4rem 1rem" }} align="middle">
            <Col span={20} offset={2}>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={8}>
                        <Card hoverable>
                            <Space direction="vertical" size="small" style={{ width: "100%" }}>
                                <Icon component={ConfirmacionIcon} style={{ fontSize: 28, color: "#fbc3dfff" }} />
                                <Typography.Title level={4}>Confirmar asistencia</Typography.Title>
                                <Typography.Paragraph>
                                    Ayudanos completando el formulario para organizar todo.
                                </Typography.Paragraph>
                                <Button
                                    block
                                    href={formsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ir al formulario
                                </Button>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card hoverable>
                            <Space direction="vertical" size="small" style={{ width: "100%" }}>
                                <EnvironmentOutlined style={{ fontSize: 28, color: "#fbc3dfff" }} />
                                <Typography.Title level={4}>Cómo llegar</Typography.Title>
                                <Typography.Paragraph>
                                    Indicaciones para llegar a los lugares importantes.
                                </Typography.Paragraph>
                                <Button
                                    block
                                    href={mapsUrlIglesia}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Google Maps a la Iglesia
                                </Button>
                                <Button
                                    block
                                    href={mapsUrlSalon}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Google Maps al Salón
                                </Button>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card hoverable>
                            <Space direction="vertical" size="small" style={{ width: "100%" }}>
                                <GiftOutlined style={{ fontSize: 28, color: "#fbc3dfff" }} />
                                <Typography.Title level={4}>Regalos</Typography.Title>
                                <Typography.Paragraph>
                                    Si querés hacernos un regalo, acá están nuestros datos bancarios.
                                </Typography.Paragraph>
                                <Button block onClick={onOpenGifts}>
                                    Ver CBU / Cuentas
                                </Button>
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}