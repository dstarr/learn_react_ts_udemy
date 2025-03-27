import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters." }),
    age: z.number({
            required_error: "Age is required",
            invalid_type_error: "Age must be a number",
        })
        .min(18, { message: "Age must be at least 18." })
        .max(100, { message: "Age must be at most 100." })
});

type FormSchema = z.infer<typeof formSchema>;


const App = () => {

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });

    const ageValue = watch("age");
    const nameValue = watch("name");

    const isNameValid = (): boolean => {
        try {
            formSchema.shape.name.parse(nameValue);
            return true;
        } catch (error) {
            return false;
        }
    }

    const isAgeValid = (): boolean => {
        try {
            formSchema.shape.age.parse(ageValue);
            return true;
        } catch (error) {
            return false;
        }
    }

    const onFormSubmit = (data: FieldValues) => {
        console.log(data.name);
        console.log(data.age);
    }

    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            {...register('name', { required: true, minLength: 3 })}
                            id="name"
                            placeholder="Enter name"
                            className={`border border-gray-200 rounded-md py-2 px-4 rounded-md`}
                        />
                    </div>

                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <div className="flex flex-col gap-2">
                        <label htmlFor="age">Age</label>
                        <input type="number"
                            {...register('age', { required: true, min: 1, max: 10, valueAsNumber: true })}
                            id="age"
                            placeholder="Enter age"
                            className={`border border-gray-200 rounded-md py-2 px-4 rounded-md disabled:opacity-50`}
                            disabled={!isNameValid()}
                        />
                    </div>

                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}

                    <button type="submit"
                        disabled={!isNameValid() || !isAgeValid()}
                        className="bg-gray-800 text-white py-2 mt-4 px-6 rounded-md disabled:opacity-50">Save</button>
                </form>
            </div>

        </>
    )
}

export default App
