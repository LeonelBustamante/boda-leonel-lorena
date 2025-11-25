import { Col, Flex, Row, Typography } from "antd";
import { useState } from "react";
import Countdown from "react-countdown";

export default function CountdownSection() {
    const [mensaje, setMensaje] = useState("¡Faltan solo unos momentos para el día más especial de nuestras vidas! 💖");

    const fechaBoda = new Date("2026-04-10T00:00:00");
    const tiempoObjetivo = fechaBoda.getTime();

    const alFinalizar = () => {
        setMensaje("💒 ¡El gran día ha llegado!");
    };

    const alCambiar = (valorRestante: number) => {
        if (valorRestante < 30 * 24 * 60 * 60 * 1000) {
            setMensaje("✨ ¡Solo falta un mes para la boda!");
        }
    };

    const renderBloque = (valor: string | number, etiqueta: string) => {
        return (
            <Col style={{ textAlign: "center" }}>
                <div
                    // Estilos del bloque para asemejar al preview: caja oscura, borde redondeado, sombra y número en rosa
                    style={{
                        width: 130,
                        height: 110,
                        background: "rgba(26, 25, 40, 0.95)",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 0 rgba(0,0,0,0.35)",
                        margin: "0 auto",
                    }}
                >
                    <Typography.Title
                        level={1}
                        style={{
                            margin: 0,
                            color: "#ff6fa1",
                            fontSize: 46,
                            lineHeight: 1,
                            fontWeight: 700,
                        }}
                    >
                        {valor}
                    </Typography.Title>
                </div>

                {/* Etiqueta debajo del bloque */}
                <Typography.Title level={5} style={{ marginTop: 8, color: "#9aa0a6", fontWeight: 600 }}>
                    {etiqueta}
                </Typography.Title>
            </Col>
        );
    };

    return (
        <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
            <Row justify="center" align="middle" style={{ textAlign: "center", width: "100%" }}>
                <Col span={24} style={{ marginBottom: 16 }}>
                    <Typography.Title
                        className="rouge-script-regular"
                        style={{
                            fontSize: 72,
                            lineHeight: 1.05,
                            marginBottom: 0,
                            color: "#f5f6f8",
                            fontWeight: 400,
                            letterSpacing: 2,
                        }}
                    >
                        Leonel & Lorena
                    </Typography.Title>
                </Col>

                {/* Subtítulo / descripción corta */}
                <Col span={24} style={{ marginBottom: 8 }}>
                    <Typography.Title
                        level={3}
                        style={{
                            fontWeight: 400,
                            fontSize: 22,
                            color: "#bfc6c9",
                        }}
                    >
                        💍 Cuenta regresiva para nuestro gran día 💍
                    </Typography.Title>
                </Col>

                <Row gutter={32} justify="center" align="middle" style={{ marginTop: 24, marginBottom: 24 }}>
                    <Countdown
                        date={tiempoObjetivo}
                        renderer={(props: any) => {
                            const { days, hours, minutes, seconds, completed, total } = props;

                            if (completed) {
                                alFinalizar();
                                return (
                                    <>
                                        {renderBloque(0, "Días")}
                                        {renderBloque(0, "Horas")}
                                        {renderBloque(0, "Minutos")}
                                        {renderBloque(0, "Segundos")}
                                    </>
                                );
                            }

                            if (total < 30 * 24 * 60 * 60 * 1000) {
                                alCambiar(total);
                            }

                            return (
                                <>
                                    {renderBloque(days, "Días")}
                                    {renderBloque(hours, "Horas")}
                                    {renderBloque(minutes, "Minutos")}
                                    {renderBloque(seconds, "Segundos")}
                                </>
                            );
                        }}
                    />
                </Row>

                <Col span={24}>
                    <Typography.Paragraph
                        style={{
                            fontStyle: "italic",
                            color: "#99a0a4",
                            fontSize: 18,
                            maxWidth: 700,
                            margin: "0 auto",
                        }}
                    >
                        {mensaje}
                    </Typography.Paragraph>
                </Col>
            </Row>
        </Flex>
    );
}