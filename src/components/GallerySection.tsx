import { Typography, Image, Row, Col } from "antd";

const sampleImages = [
    "https://orange-anteater-411585.hostingersite.com/wp-content/uploads/2025/11/c8733db5-aafb-4954-943a-2cc727cac0a1.jpg",
    "https://orange-anteater-411585.hostingersite.com/wp-content/uploads/2025/11/IMG-20231208-WA0116.jpg",
    "https://orange-anteater-411585.hostingersite.com/wp-content/uploads/2025/11/IMG-20240504-WA0021.jpg",
    "https://orange-anteater-411585.hostingersite.com/wp-content/uploads/2025/11/20240224_1616222-scaled.jpg",
    "https://orange-anteater-411585.hostingersite.com/wp-content/uploads/2025/11/20220906_1455112-scaled.jpg",
];
export default function GallerySection() {
    return (
        <section className="section" >
            <div className="container" style={{ textAlign: "center" }}>
                <Typography.Title className="h1-romantic" style={{ color: "white" }}>Nuestra historia</Typography.Title>
                <Typography.Paragraph style={{ color: "white" }}>Algunos momentos de amor y aventura 🌸</Typography.Paragraph>

                <Image.PreviewGroup >
                    <Row gutter={[8, 8]}>
                        {sampleImages.map((url, i) => (
                            <Col key={i}>
                                <Image
                                    key={i}
                                    src={url}
                                    alt={`Foto ${i + 1}`}
                                    width={200}
                                    style={{
                                        margin: 8,
                                        borderRadius: 8,
                                        objectFit: "cover",
                                        height: 300,
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Image.PreviewGroup>
            </div>
        </section>
    );
}