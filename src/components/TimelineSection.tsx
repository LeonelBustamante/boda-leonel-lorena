import { Typography, Timeline, ConfigProvider } from "antd";

export default function TimelineSection() {
    return (
        <section className="section" >
            <div className="container" style={{ textAlign: "center" }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Timeline: {
                                tailColor: "#FFFFFF"
                            },
                        },
                    }}>
                    <Typography.Title
                        className="h1-romantic"
                        style={{
                            fontSize: 72,
                            lineHeight: 1.05,
                            marginBottom: 0,
                            color: "#f5f6f8",
                            fontWeight: 400,
                            letterSpacing: 2,
                        }}
                    >Agenda del gran día</Typography.Title>
                    <Typography.Paragraph style={{
                        marginTop: 16,
                        color: "#f5f6f8",
                    }}> Así compartiremos juntos nuestro 10 de abril 💞</Typography.Paragraph>

                    <Timeline

                        mode="alternate"
                        style={{ color: "white" }}
                        items={[
                            { color: "blue", children: <Typography.Title style={{ color: "white" }} level={5}>17:00 - Boda en Iglesia San Antonio - Padre las casas</Typography.Title> },
                            { color: "red", children: <Typography.Title style={{ color: "white" }} level={5}>19:00 - Centro de eventos Los Canelos</Typography.Title> },
                            { color: "orange", children: <Typography.Title style={{ color: "white" }} level={5}>Una historia feliz</Typography.Title> },
                        ]}
                    />
                </ConfigProvider>
            </div>
        </section >
    );
}