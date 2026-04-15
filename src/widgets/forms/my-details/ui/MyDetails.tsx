import { Button, Input } from "@shared/ui";
import { useState } from "react";

import "./style.css";
import { Dropdown } from "@features/dropdown";
type FormValues = {
  name: string;
  surname: string;
  address: string;
  emailAddress: string;
  role: "Admin" | "Editor";
};

export const MyDetails = () => {
  const [formValues, setFormValues] = useState<FormValues>({} as FormValues);

  const onChangeValue = (value: string, key: keyof FormValues) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="my_details">
      <div className="my_details-form">
        <Input
          value={formValues.name}
          onChange={(v) => onChangeValue(v, "name")}
          type="text"
          label="Name"
          placeholder="Name"
        />
        <Input
          value={formValues.surname}
          onChange={(v) => onChangeValue(v, "surname")}
          type="text"
          label="Surname"
          placeholder="Surname"
        />
        <Input
          value={formValues.address}
          onChange={(v) => onChangeValue(v, "address")}
          type="text"
          label="Address"
          placeholder="Address"
        />
        <Input
          value={formValues.emailAddress}
          onChange={(v) => onChangeValue(v, "emailAddress")}
          type="text"
          label="Email Address"
          placeholder="Email Address"
        />
        <Dropdown
          withShadow
          title={formValues.role || "Admin"}
          label="Role"
          dropdownItems={[
            {
              title: "Admin",
              onClick: () =>
                setFormValues((prev) => ({ ...prev, role: "Admin" })),
            },
            {
              title: "Editor",
              onClick: () =>
                setFormValues((prev) => ({ ...prev, role: "Editor" })),
            },
          ]}
        />
      </div>
      <Button title="Save settings" />
    </div>
  );
};
