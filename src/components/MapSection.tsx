import { Typography } from "antd";

type Props = {
    destino: string;
    iframeSrc: string;
};

export default function MapSection({ destino, iframeSrc }: Props) {
    return (
        <section id="mapa" className="section" style={{ paddingTop: 24 }}>
            <div className="container">
                <Typography.Title level={3} className="h1-romantic" style={{ textAlign: "center", color: "white" }}>
                    Cómo llegar a {destino}
                </Typography.Title>
                <div className="map-responsive" style={{ marginTop: 16 }}>
                    <iframe
                        src={iframeSrc}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        title="Mapa - Los Canelos Temuco"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}