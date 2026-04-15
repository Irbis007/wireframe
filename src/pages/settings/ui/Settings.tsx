import { PageMarkup } from "@shared/ui";
import { FaPen, FaUser } from "react-icons/fa";

import "./style.css";
import { useState } from "react";
import { MyDetails } from "@widgets/forms/my-details";
import { ChangePassword } from "@widgets/forms/changePassword";
import { Appearance } from "@widgets/forms/appearance/ui/Appearance";

const tabsTitles = ["My details", "Appearance", "Password"];

export const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <PageMarkup
      title="Settings"
      description="Aenean consectetur odio in condimentum tristique. In blandit ante dui condimentum."
      rightContent={
        <div className="user_avatar settings">
          <div className="user_icon">
            <FaUser size={30} color="var(--bg-primary)" />
          </div>
          <div className="user_avatar-pen">
            <FaPen size={11} />
          </div>
          <button className="user_avatar-remove">Remove avatar</button>
        </div>
      }
      withoutHeaderGap
    >
      <div className="settings-tab_buttons">
        <div className="tab_buttons-wrapper">
          {tabsTitles.map((item, i) => (
            <div
              className={`tab_button ${activeTab === i && "active"}`}
              onClick={() => setActiveTab(i)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {activeTab === 0 && <MyDetails />}
      {activeTab === 1 && <Appearance />}
      {activeTab === 2 && <ChangePassword />}
    </PageMarkup>
  );
};
