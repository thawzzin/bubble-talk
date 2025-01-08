import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Login = () => {
  const formSchema = z.object({
    email: z.string(),
    password: z.string().min(6),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex items-center bg-slate-200 h-screen p-5">
      <div className="w-[60%]">
        <img
          className="w-[70%] object-cover mx-auto"
          src="/assets/login.png"
          alt="login"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-1 bg-white h-full rounded-sm">
        <img className="w-20" src="/assets/btlogo.png" alt="logo" />
        <h2 className="font-bold text-xl my-5 uppercase">Welcome Back</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input id="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className={cn("mx-auto block w-full")} type="submit">
              Login
            </Button>
          </form>
        </Form>
        <p className="mt-5 text-sm">
          Don't have an account? <Link to="/signup" className="font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
