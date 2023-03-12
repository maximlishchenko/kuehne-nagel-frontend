import { useState } from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { EditOutlined } from "@ant-design/icons";
import EditButton from "./EditButton";

function MyTable({ data, setData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingShipment, setEditingShipment] = useState(null);

  const handleDelete = (record) => {
    let newData = [...data];
    setData(newData.filter((item) => item.orderNo !== record.orderNo));
  };

  const onEdit = (record) => {
    setIsEditing(true);
    // storing previous orderNo to further find the required shipment
    setEditingShipment({ ...record, prevOrderNo: record.orderNo });
  };

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Tracking Number",
      dataIndex: "trackingNo",
      key: "trackingNo",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Consignee",
      dataIndex: "consignee",
      key: "consignee",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record)}
          >
            <Button danger>Delete row</Button>
          </Popconfirm>
        </Space>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => {
        return (
          <EditOutlined
            onClick={() => {
              onEdit(record);
            }}
          />
        );
      },
    },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} />
      <EditButton
        setData={setData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editingShipment={editingShipment}
        setEditingShipment={setEditingShipment}
      ></EditButton>
    </>
  );
}

export default MyTable;
