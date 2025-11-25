import { Col, ConfigProvider, Divider, Layout, Row } from "antd";
import { useState } from "react";
import CardsSection from "./components/CardsSection";
import CountdownSection from "./components/CountdownSection";
import GallerySection from "./components/GallerySection";
import GiftModal from "./components/GiftModal";
import MapSection from "./components/MapSection";
import TimelineSection from "./components/TimelineSection";
import "./styles/global.css";

const { Content } = Layout;

function App() {
  const [showModalBank, setShowModalBank] = useState(false);

  // ⬇️ PONÉ TUS ENLACES REALES AQUÍ
  const GOOGLE_FORMS_URL = "https://forms.cloud.microsoft/r/aa97wziSH7";
  const GOOGLE_MAPS_URL_IGLESIA = "https://maps.app.goo.gl/TCQhhc5VxZajekQD9";
  const GOOGLE_MAPS_URL_SALON = "https://maps.app.goo.gl/hknZeyrN1uA7Zvuj9";
  const GOOGLE_MAPS_IFRAME_IGLESIA = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d64346.381223810895!2d-72.6225248!3d-38.7774844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d1430550c667%3A0xd3db9d2c6c58beb7!2sIglesia%20San%20Antonio!5e1!3m2!1ses!2sar!4v1762916415164!5m2!1ses!2sa";
  const GOOGLE_MAPS_IFRAME_SALON = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4153.386479588008!2d-72.65097109039563!3d-38.77586723070747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d6ed4c99c253%3A0x19ae2909bb994cff!2sParque%20Los%20Canelos%2C%20Centro%20de%20eventos!5e1!3m2!1ses-419!2sar!4v1762733270490!5m2!1ses-419!2sar";


  // ⬇️ PONÉ TUS CUENTAS/CBU AQUÍ (ejemplos)
  const accounts = [
    { label: "Alias 🇦🇷 (ARS)", value: "LEOBUSTAMANTEBBVA", note: "Banco BBVA" },
    { label: "Cuenta Vista 🇨🇱 (CLP)", value: "00-027-48223-4", note: "Banco de Chile" },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "rgb(246,214,230)"
          },
          Typography: {
            fontFamilyCode: "'Rouge Script, cursive'"
          }
        },
      }}
    >
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              '--heart-size': `${15 + Math.random() * 15}px`,
              '--rotation': `${-20 + Math.random() * 40}deg`,
              '--sway': `${-30 + Math.random() * 60}px`,
              background: i % 3 === 0
                ? "var(--accent-red)"
                : i % 3 === 1
                  ? "var(--accent-rose)"
                  : "#ff69b4"
            } as any}
          />
        ))}
      </div>
      <Layout style={{ minHeight: "100vh", background: "linear-gradient(#0b0d13, #1a1420)" }}>
        <Content>
          <CountdownSection />
          <CardsSection
            onOpenGifts={() => setShowModalBank(true)}
            formsUrl={GOOGLE_FORMS_URL}
            mapsUrlIglesia={GOOGLE_MAPS_URL_IGLESIA}
            mapsUrlSalon={GOOGLE_MAPS_URL_SALON}
          />
          <GallerySection />
          <TimelineSection />

          <Divider style={{ marginTop: 0 }} />
          <Row >
            <Col span={12}>
              <MapSection destino={"Iglesia San Antonio"} iframeSrc={GOOGLE_MAPS_IFRAME_IGLESIA} />
            </Col>

            <Col span={12}>
              <MapSection destino={"Centro de eventos Los Canelos"} iframeSrc={GOOGLE_MAPS_IFRAME_SALON} />
            </Col>
          </Row>

          <GiftModal
            open={showModalBank}
            onClose={() => setShowModalBank(false)}
            accounts={accounts}
          />
        </Content>
      </Layout>
    </ConfigProvider >
  );
}

export default App;