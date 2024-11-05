import React, { useState } from "react";
import { Input, Button, Upload, Slider, Row, Col, Card } from "antd";
import { UploadOutlined, RightOutlined } from "@ant-design/icons";

const SettingsPage = () => {
  const [openAiKey, setOpenAiKey] = useState("");
  const [pineconeKey, setPineconeKey] = useState("");
  const [pineconeEnv, setPineconeEnv] = useState("");
  const [pineconeIndex, setPineconeIndex] = useState("");
  const [chunkSize, setChunkSize] = useState(1200);
  const [overlapSize, setOverlapSize] = useState(20);

  return (
    <div
      className="h-screen"
      style={{
        background: "linear-gradient(to bottom, #000055, #a0e9fd)",
        padding: "24px",
      }}
    >
      <Row gutter={16} style={{ height: "100%" }}>
        <Col span={12}>
          <Row
            gutter={16}
            style={{ marginBottom: "16px", paddingTop: "100px" }}
          >
            <Col span={12}>
              <Input.Password
                placeholder="OpenAI API Key"
                value={openAiKey}
                onChange={(e) => setOpenAiKey(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
            </Col>
            <Col span={12}>
              <Input.Password
                placeholder="Pinecone API Key"
                value={pineconeKey}
                onChange={(e) => setPineconeKey(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
            </Col>
          </Row>
          <Row gutter={16} style={{ marginBottom: "16px" }}>
            <Col span={12}>
              <Input
                placeholder="Pinecone Environment"
                value={pineconeEnv}
                onChange={(e) => setPineconeEnv(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Pinecone Index Name"
                value={pineconeIndex}
                onChange={(e) => setPineconeIndex(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
            </Col>
          </Row>

          {/* Nút No namespaces found và nút Start Chatting */}
          <Row gutter={16} style={{ marginBottom: "16px" }}>
            <Col span={12}>
              <Button
                type="default"
                size="small"
                style={{
                  backgroundColor: "#E77474", // Nền màu của nút
                  color: "white", // Màu chữ của nút
                  width: "80%", // Rút ngắn chiều rộng
                }}
              >
                No namespaces found
              </Button>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                icon={<RightOutlined />}
                size="small" // Đặt kích thước nút nhỏ lại
                style={{
                  backgroundColor: "white", // Màu nền của nút
                  borderColor: "#4E8095", // Màu viền của nút
                  color: "#4E8095", // Màu chữ của nút
                  width: "80%", // Rút ngắn chiều rộng
                }}
              >
                Start Chatting
              </Button>
            </Col>
          </Row>
        </Col>

        {/* Bảng bên phải với nền màu đen xám và chữ trắng */}
        <Col span={12}>
          <Card
            title={<span style={{ color: "white" }}>Creating Namespaces</span>}
            bordered={false}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#333", // Nền màu đen xám
              color: "white", // Màu chữ trắng
              height: "100%", // Đảm bảo chiều cao 100%
            }}
          >
            {/* Thêm đoạn văn bản */}
            <p style={{ color: "white", marginBottom: "16px" }}>
              Treat namespaces like topics of conversation. You can create as
              many as you like, and they can be used to organize your data.
            </p>
            <Upload.Dragger
              name="files"
              multiple
              action="/upload.do"
              style={{
                marginBottom: "16px",
                borderRadius: "8px",
                border: "2px dashed white",
                color: "white",
                padding: "106px", // Tăng padding để ô lớn hơn
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px", // Tăng chiều cao
              }}
            >
              <p className="ant-upload-drag-icon" style={{ margin: 0 }}>
                <UploadOutlined style={{ color: "white", fontSize: "20px" }} />
              </p>
              <p
                className="ant-upload-text"
                style={{ color: "white", margin: 0 }}
              >
                Drag and drop or click to select files to upload
              </p>
            </Upload.Dragger>

            {/* Nút upload với màu và kích thước mới */}
            <div style={{ textAlign: "right", marginBottom: "16px" }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#5C45DB",
                  borderColor: "#5C45DB",
                  marginBottom: "16px",
                }}
              >
                Upload files
              </Button>
            </div>

            {/* Kích thước đoạn */}
            <div style={{ marginBottom: "16px", color: "white" }}>
              <Row justify="space-between">
                <Col>Chunk size</Col>
                <Col>{chunkSize}</Col>
              </Row>
              <Slider
                min={500}
                max={2000}
                value={chunkSize}
                onChange={(value) => setChunkSize(value)}
              />
            </div>

            {/* Kích thước */}
            <div style={{ color: "white" }}>
              <Row justify="space-between">
                <Col>Overlap size</Col>
                <Col>{overlapSize}%</Col>
              </Row>
              <Slider
                min={0}
                max={100}
                value={overlapSize}
                onChange={(value) => setOverlapSize(value)}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;
