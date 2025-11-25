import { Modal, List, Typography, Button, message, Space, Tag, Divider, Row, Col } from "antd";
import { CopyOutlined, GiftOutlined } from "@ant-design/icons";
import type { GiftAccount } from "../types/gift";

type Props = {
    open: boolean;
    onClose: () => void;
    accounts: GiftAccount[];
};

export default function GiftModal({ open, onClose, accounts }: Props) {
    const onCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            message.success("Copiado al portapapeles");
        } catch {
            message.error("No se pudo copiar");
        }
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            onOk={onClose}
            title={<Space><GiftOutlined /> <span>Regalos & Datos bancarios</span></Space>}
            okText="Cerrar"
            cancelButtonProps={{ style: { display: "none" } }}
        >
            <Typography.Paragraph>
                Si deseás hacernos un regalo, podés usar cualquiera de estas cuentas. ¡Gracias por ser parte de
                este momento! 🌿
            </Typography.Paragraph>
            <Divider />
            <Row>
                <Col span={12}>
                    <Typography>
                        Lorena Castillo<br />
                        RUT: 18743331-2
                    </Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        Alexis Bustamante<br />
                        CUIL: 20-40807723-1
                    </Typography>
                </Col>
            </Row>
            <Divider />
            <List
                itemLayout="vertical"
                dataSource={accounts}
                renderItem={(acc) => (
                    <List.Item>
                        <Space direction="vertical" size={4} style={{ width: "100%" }}>
                            <Space wrap>
                                <Tag color="magenta">{
                                    <Typography>{acc.label}</Typography>}
                                </Tag>
                                {acc.note ? <Tag>{<Typography>{acc.note}</Typography>}</Tag> : null}
                            </Space>
                            <Typography>{acc.value}</Typography>
                            <Button
                                icon={<CopyOutlined />}
                                onClick={() => onCopy(acc.value)}
                                style={{ width: "fit-content" }}
                            >
                                Copiar
                            </Button>
                        </Space>
                    </List.Item>
                )}
            />
        </Modal>
    );
}