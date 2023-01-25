import PrimeReact from "primereact/api";
import { Button } from "primereact/button";
import { InputSwitch, InputSwitchChangeParams } from "primereact/inputswitch";
import { RadioButton, RadioButtonChangeParams } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import { FC, useContext, useEffect, useState } from "react";
import { LayoutContext, LayoutConfig } from "../../contexts/LayoutContext";

interface LayoutSettingsProps {}

const LayoutSettings: FC<LayoutSettingsProps> = ({}) => {
  const [scales] = useState([12, 14, 16, 18, 20]);
  const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);

  const changeInputStyle = (e: RadioButtonChangeParams) => {
    setLayoutConfig((prevState: any) => ({
      ...prevState,
      inputStyle: e.value,
    }));
  };

  const changeRipple = (e: InputSwitchChangeParams) => {
    PrimeReact.ripple = e.value;
    setLayoutConfig((prevState: any) => ({ ...prevState, ripple: e.value }));
  };

  const changeMenuMode = (e: RadioButtonChangeParams) => {
    setLayoutConfig((prevState: LayoutConfig) => ({
      ...prevState,
      menuMode: e.value,
    }));
  };

  const decrementScale = () => {
    setLayoutConfig((prevState) => ({
      ...prevState,
      fontSize: prevState.fontSize - 2,
    }));
  };

  const incrementScale = () => {
    setLayoutConfig((prevState: LayoutConfig) => ({
      ...prevState,
      fontSize: prevState.fontSize + 2,
    }));
  };

  const applyScale = (fontSize: number) => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  useEffect(() => {
    applyScale(layoutConfig.fontSize);
  }, [layoutConfig.fontSize]);

  return (
    <>
      <h5>Scale</h5>
      <div className="flex align-items-center">
        <Button
          icon="pi pi-minus"
          type="button"
          onClick={decrementScale}
          className="p-button-text p-button-rounded w-2rem h-2rem mr-2"
          disabled={layoutConfig.fontSize === scales[0]}
        />
        <div className="flex gap-2 align-items-center">
          {scales.map((item) => {
            return (
              <i
                className={classNames("pi pi-circle-fill", {
                  "text-primary-400": item === layoutConfig.fontSize,
                  "text-100": item !== layoutConfig.fontSize,
                })}
                key={item}
              />
            );
          })}
        </div>
        <Button
          icon="pi pi-plus"
          type="button"
          onClick={incrementScale}
          className="p-button-text p-button-rounded w-2rem h-2rem ml-2"
          disabled={layoutConfig.fontSize === scales[scales.length - 1]}
        />
      </div>

      <h5>Menu Type</h5>
      <div className="grid">
        <div className="md:col-2 mr-2">
          <div className="field-radiobutton">
            <RadioButton
              name="menuMode"
              value={"static"}
              checked={layoutConfig.menuMode === "static"}
              onChange={(e) => changeMenuMode(e)}
              inputId="modeStatic"
            />
            <label htmlFor="modeStatic">Static</label>
          </div>
        </div>
        <div className="md:col-2 ml-2">
          <div className="field-radiobutton">
            <RadioButton
              name="menuMode"
              value={"overlay"}
              checked={layoutConfig.menuMode === "overlay"}
              onChange={(e) => changeMenuMode(e)}
              inputId="modeOverlay"
            />
            <label htmlFor="modeOverlay">Overlay</label>
          </div>
        </div>
      </div>

      <h5>Input Style</h5>
      <div className="grid">
        <div className="md:col-2 mr-2">
          <div className="field-radiobutton">
            <RadioButton
              name="inputStyle"
              value={"outlined"}
              checked={layoutConfig.inputStyle === "outlined"}
              onChange={(e) => changeInputStyle(e)}
              inputId="inputOutlined"
            />
            <label htmlFor="inputOutlined">Outlined</label>
          </div>
        </div>
        <div className="md:col-2 ml-2">
          <div className="field-radiobutton">
            <RadioButton
              name="inputStyle"
              value={"filled"}
              checked={layoutConfig.inputStyle === "filled"}
              onChange={(e) => changeInputStyle(e)}
              inputId="inputFilled"
            />
            <label htmlFor="inputFilled">Filled</label>
          </div>
        </div>
      </div>

      <h5>Ripple Effect</h5>
      <InputSwitch
        checked={layoutConfig.ripple}
        onChange={(e) => changeRipple(e)}
      />
    </>
  );
};

export default LayoutSettings;
