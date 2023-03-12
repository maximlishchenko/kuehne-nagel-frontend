import { Modal, Input } from "antd";

function EditButton({
  setData,
  isEditing,
  setIsEditing,
  editingShipment,
  setEditingShipment,
}) {
  const resetEditing = () => {
    setIsEditing(false);
    setEditingShipment(null);
  };

  return (
    <Modal
      title="Edit Shipment"
      visible={isEditing}
      okText="Save"
      onCancel={() => {
        resetEditing();
      }}
      onOk={() => {
        setData((pre) => {
          return pre.map((item) => {
            if (item.orderNo === editingShipment.prevOrderNo) {
              return editingShipment;
            } else {
              return item;
            }
          });
        });
        resetEditing();
      }}
    >
      <Input
        value={editingShipment?.orderNo}
        onChange={(e) => {
          setEditingShipment((pre) => {
            return { ...pre, orderNo: e.target.value };
          });
        }}
      />
      <Input
        value={editingShipment?.date}
        onChange={(e) => {
          setEditingShipment((pre) => {
            return { ...pre, date: e.target.value };
          });
        }}
      />
      <Input
        value={editingShipment?.customer}
        onChange={(e) => {
          setEditingShipment((pre) => {
            return { ...pre, customer: e.target.value };
          });
        }}
      />
      <Input
        value={editingShipment?.trackingNo}
        onChange={(e) => {
          setEditingShipment((pre) => {
            return { ...pre, trackingNo: e.target.value };
          });
        }}
      />
      <Input
        value={editingShipment?.status}
        onChange={(e) => {
          setEditingShipment((pre) => {
            return { ...pre, status: e.target.value };
          });
        }}
      />
      <Input
        value={editingShipment?.consignee}
        onChange={(e) => {
          setEditingShipment((pre) => {
            return { ...pre, consignee: e.target.value };
          });
        }}
      />
    </Modal>
  );
}

export default EditButton;
