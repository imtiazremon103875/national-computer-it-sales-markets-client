import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)

    };
    if (loading || gLoading) {
        return <Loading></Loading>
    }


    let errorElement
    if (error || gError) {
        errorElement = <p className='text-red-500'> {error?.message} || {gError?.message}</p>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "email required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid email'
                                }
                            })} type="email" placeholder="Type your Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "password required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'must be 6 character longer'
                                }
                            })} type="password" placeholder="Type your password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {errorElement}

                        <input className='btn btn-primary  w-full max-w-xs' value="LOG In" type="submit" />
                    </form>
                    <p><small>New To Doctor Portal? <Link to="/register"><span className='text-primary'>Create An Account</span></Link></small></p>



                    <div class="divider ">OR</div>


                    <button onClick={() => signInWithGoogle()} class="btn btn-primary">Login with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;