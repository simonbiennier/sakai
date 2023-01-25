import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Checkbox } from "primereact/checkbox";
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

interface LoginValues {
  username: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const router = useRouter();

  const { layoutConfig } = useContext(LayoutContext);

  const [focused, setFocused] = useState({
    username: false,
    password: false,
  });

  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
    { "p-input-filled": layoutConfig.inputStyle === "filled" }
  );

  const validate = (values: LoginValues) => {
    const errors: FormikErrors<LoginValues> = {};

    if (!values.username) {
      errors.username = "Username cannot be empty";
    } else if (!values.password) {
      errors.password = "Password cannot be empty";
    }

    return errors;
  };

  const formik = useFormik<LoginValues>({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onSubmit: async () => router.push("/"),
  });

  return (
    <div className={containerClassName}>
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

            <h1 className="text-900 font-bold text-5xl mb-6">Login</h1>
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
                      className={classNames("pl-3", {
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
                      inputClassName={classNames("pl-3", {
                        "p-invalid": formik.errors.password,
                      })}
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
                      className={"ml-2"}
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

              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    name="rememberMe"
                    className="mr-2"
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>

                <Link
                  href={
                    router.query.next
                      ? `/register?next=${router.query.next}`
                      : "/register"
                  }
                >
                  <a
                    className="font-medium no-underline ml-2 text-right cursor-pointer"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Register
                  </a>
                </Link>
              </div>
              <Button className="p-3 text-xl" label="Sign In" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
