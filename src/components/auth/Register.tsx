import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { LayoutContext } from "../../contexts/LayoutContext";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import Logo from "../common/Logo";
import { FormikErrors, useFormik } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import Link from "next/link";
import { Toast } from "primereact/toast";

interface RegisterValues {
  username: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const toast = useRef<Toast>(null!);

  const router = useRouter();
  const { layoutConfig } = useContext(LayoutContext);

  const [focused, setFocused] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
    { "p-input-filled": layoutConfig.inputStyle === "filled" }
  );

  const validate = (values: RegisterValues) => {
    const errors: FormikErrors<RegisterValues> = {};

    if (!values.username) {
      errors.username = "Username cannot be empty";
      return errors;
    }

    if (!values.password) {
      errors.password = "Password cannot be empty";
      return errors;
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      return errors;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: async () => {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Registration successful",
        life: 10000,
      });

      toast.current.show({
        severity: "info",
        summary: "Login",
        detail: "You can now login",
        life: 10000,
      });
    },
  });

  return (
    <div className={containerClassName}>
      <Toast ref={toast} position="top-right" hidden={false} />
      <div className="p-fluid flex flex-column align-items-center justify-content-center">
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-5 px-5 sm:px-8 flex flex-column align-items-center"
            style={{ borderRadius: "53px" }}
          >
            <Logo
              color="var(--primary-color)"
              size={100}
              className="mb-1 w-6rem flex-shrink-0"
            />

            <h1 className="text-900 font-bold text-5xl mb-6">Register</h1>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <div className="field mb-5">
                <div className="p-inputgroup mb-2">
                  <span className="p-inputgroup-addon">
                    <AiOutlineUser size={40} />
                  </span>
                  <span className="p-float-label">
                    <InputText
                      onFocus={() =>
                        setFocused({
                          ...focused,
                          username: true,
                        })
                      }
                      onBlur={() =>
                        setFocused({
                          ...focused,
                          username: false,
                        })
                      }
                      name="username"
                      id="username"
                      type="text"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      className={classNames("w-full", "pl-3", {
                        "p-invalid": formik.errors.username,
                      })}
                      aria-describedby="username-help"
                    />
                    <label
                      style={{
                        fontSize: formik.values.username
                          ? "0.8rem"
                          : focused.username
                          ? "0.8rem"
                          : "1rem",
                      }}
                      htmlFor="username"
                      className="ml-2"
                    >
                      Username
                    </label>
                  </span>
                </div>
                {formik.errors.username && (
                  <small id="username-help" className="ml-7 p-error">
                    {formik.errors.username}
                  </small>
                )}
              </div>

              <div className="field mb-5">
                <div className="p-inputgroup mb-2">
                  <span className="p-inputgroup-addon">
                    <MdPassword size={40} />
                  </span>
                  <span className="p-float-label">
                    <Password
                      onFocus={() =>
                        setFocused({
                          ...focused,
                          password: true,
                        })
                      }
                      onBlur={() =>
                        setFocused({
                          ...focused,
                          password: false,
                        })
                      }
                      name="password"
                      inputId="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      toggleMask
                      feedback={false}
                      className="w-full"
                      inputClassName={classNames("w-full", "pl-3", {
                        "p-invalid": formik.errors.password,
                      })}
                      aria-describedby="password-help"
                    />
                    <label
                      style={{
                        fontSize: formik.values.password
                          ? "0.8rem"
                          : focused.password
                          ? "0.8rem"
                          : "1rem",
                      }}
                      htmlFor="password"
                      className="ml-2"
                    >
                      Password
                    </label>
                  </span>
                </div>
                {formik.errors.password && (
                  <small id="password-help" className="ml-7 p-error">
                    {formik.errors.password}
                  </small>
                )}
              </div>

              <div className="field mb-5">
                <div className="p-inputgroup mb-2">
                  <span className="p-inputgroup-addon">
                    <MdPassword size={40} />
                  </span>
                  <span className="p-float-label">
                    <Password
                      onFocus={() =>
                        setFocused({
                          ...focused,
                          confirmPassword: true,
                        })
                      }
                      onBlur={() =>
                        setFocused({
                          ...focused,
                          confirmPassword: false,
                        })
                      }
                      name="confirmPassword"
                      inputId="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      toggleMask
                      feedback={false}
                      className="w-full"
                      inputClassName={classNames("w-full", "pl-3", {
                        "p-invalid": formik.errors.confirmPassword,
                      })}
                      aria-describedby="confirmPassword-help"
                    />
                    <label
                      style={{
                        fontSize: formik.values.confirmPassword
                          ? "0.8rem"
                          : focused.confirmPassword
                          ? "0.8rem"
                          : "1rem",
                      }}
                      htmlFor="confirmPassword"
                      className="ml-2"
                    >
                      Confirm Password
                    </label>
                  </span>
                </div>
                {formik.errors.confirmPassword && (
                  <small id="confirmPassword-help" className="ml-7 p-error">
                    {formik.errors.confirmPassword}
                  </small>
                )}
              </div>

              <div className="flex align-items-center justify-content-end mb-5 gap-5">
                <Link
                  href={
                    router.query.next
                      ? `/login?next=${router.query.next}`
                      : "/login"
                  }
                >
                  <a
                    className="font-medium no-underline mr-2 text-right cursor-pointer"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Login
                  </a>
                </Link>
              </div>
              <Button
                label="Register"
                className="w-full p-3 text-xl"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
