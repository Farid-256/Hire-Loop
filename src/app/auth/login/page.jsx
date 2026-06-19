'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()

    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || '/'

    const onSubmit = async (data) => {
        const { error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Login successful!");
            router.push(redirectTo);
        }
    }

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 w-full max-w-md shadow-2xl">

                <h2 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h2>
                <p className="text-gray-400 text-center text-sm mb-8">Login to your account</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-gray-300 text-sm block mb-1">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="you@example.com"
                            className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-gray-300 text-sm block mb-1">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            placeholder="Enter your password"
                            className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-2xl transition cursor-pointer mt-2"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Dont have an account?{' '}
                    <Link href={`/auth/registation?redirect=${redirectTo}`} className="text-cyan-400 hover:underline font-medium">
                        Create Account
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;