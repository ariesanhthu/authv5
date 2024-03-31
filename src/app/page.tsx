import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </div>
  );
}
