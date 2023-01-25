import { InputText, InputTextProps } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FC } from "react";

interface InputProps {
  formik: any;
  type: string;
  name: string;
}

const Input: FC<
  InputProps & InputTextProps & React.RefAttributes<HTMLInputElement>
> = (props) => {
  const { formik, type, name, ...rest } = props;

  switch (type) {
    case "text":
      return (
        <>
          <InputText
            name={name}
            id={name}
            type="text"
            value={formik.values[name]}
            onChange={formik.handleChange}
            className={classNames("pl-3", {
              "p-invalid": formik.errors[name],
            })}
            aria-describedby={`${name}-help`}
            {...rest}
          />
          {formik.errors[name] && (
            <small id={`${name}-help`} className="ml-2 mt-1 p-error">
              {formik.errors[name] as string}
            </small>
          )}
        </>
      );
    default:
      return null;
  }
};

export default Input;
