import {
    Button, Card, CardBody,
    CardHeader, Divider, Input,
} from "@nextui-org/react";
//import React from "react";

import {useForm, Controller} from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formScema = z.object ({
    email : z.string().email('Email Yang bener Cokk !!'),
    username: z.string().min(5, 'Username minimal 5 !'),
    password: z.string().min(8, 'Asuuu Yang bener cok'),
});

const RegisPage = () => {
    const {handleSubmit, control} = useForm({
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
        resolver: zodResolver(formScema),
    });

    const newUser = (data) => {
        console.log(data);
        // reset();
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="w-[300px] bg-slate-300">
                <CardHeader className="font-semibold text-lg">Sign Up</CardHeader>
                <Divider />
                <CardBody>
                    <form onSubmit={handleSubmit(newUser)} className="flex flex-col gap-4">
                        <Controller 
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => {
                                return (
                                    <Input 
                                    {...field}
                                    label="Email"
                                    size="sm" 
                                    isInvalid={Boolean(fieldState.error)}
                                    errorMessage={fieldState.error?.message}
                                    />
                                );
                            }}
                        />
                        <Controller 
                            name="username"
                            control={control}
                            render={({ field, fieldState }) => {
                                return (
                                    <Input 
                                    {...field}
                                    label="Username"
                                    size="sm" 
                                    isInvalid={Boolean(fieldState.error)}
                                    errorMessage={fieldState.error?.message}
                                    />
                                );
                            }}
                        />
                        <Controller 
                            name="password"
                            control={control}
                            render={({ field, fieldState }) => {
                                return (
                                    <Input 
                                    {...field}
                                    label="Password"
                                    type="password"
                                    size="sm" 
                                    isInvalid={Boolean(fieldState.error)}
                                    errorMessage={fieldState.error?.message}
                                    />
                                );
                            }}
                        />
                        <Button type="submit" color="primary">Sign Up</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default RegisPage;