import { useState } from "react";

const Tabs = () => {

    const [selectedTab, setSelectedTab] = useState<string>("add");

    const handleToggleTab = (tab: string) => {
        setSelectedTab(tab);
    }

    return (
        <div role="tablist" className="tabs tabs-box tabs-sm">
            <a role="tab" className={`tab ${selectedTab === "add" && "tab-active font-bold"}`} onClick={() => handleToggleTab("add")}>
                Add entry
            </a>
            <a role="tab" className={`tab ${selectedTab === "entries" && "tab-active font-bold"}`} onClick={() => handleToggleTab("entries")}>
                Journal entries
            </a>
        </div>
    );
};

export default Tabs;
