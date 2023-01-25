import { useRouter } from "next/router";
import { Button } from "primereact/button";
import Logo from "../common/Logo";

const Error = () => {
  const router = useRouter();

  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
      <div className="flex flex-column align-items-center justify-content-center">
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--error-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-5 px-5 sm:px-8 flex flex-column align-items-center"
            style={{ borderRadius: "53px" }}
          >
            <Logo
              color="var(--error-color)"
              size={100}
              className="mb-2 w-6rem flex-shrink-0"
            />
            <h1 className="text-900 font-bold text-5xl mb-2">Error</h1>
            <div className="text-600 mb-5">Something went wrong.</div>
            <Button
              icon="pi pi-arrow-left"
              label="Go back"
              className="p-button-text"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
