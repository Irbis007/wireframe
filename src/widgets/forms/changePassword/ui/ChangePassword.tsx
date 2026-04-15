import { Button, Input } from "@shared/ui";
import { useState } from "react";

export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "25px 0",
        }}
      >
        <Input
          type="text"
          value={oldPassword}
          onChange={setOldPassword}
          label="Current password"
          placeholder="Current password"
        />
        <Input
          type="text"
          value={newPassword1}
          onChange={setNewPassword1}
          label="New password"
          placeholder="New password"
        />
        <Input
          type="text"
          value={newPassword2}
          onChange={setNewPassword2}
          label="Confirm new password"
          placeholder="Confirm new password"
        />
      </div>
      <div style={{marginTop: '15px'}}>
        <Button title="Save Password"/>
      </div>
    </div>
  );
};
