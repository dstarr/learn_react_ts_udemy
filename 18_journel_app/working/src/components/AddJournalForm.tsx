import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    title: z.string({ required_error: 'Title is required' }).min(5, {
        message: 'Title must be at least 5 characters long'
    }),
    feeling: z.string({ required_error: 'Feeling is required' }).min(1),
    content: z.string({ required_error: 'Content is required' }).min(20, {
        message: 'Content must be at least 20 characters long'
    })
});

type FormData = z.infer<typeof formSchema>;

const AddJournalForm = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

    const onFormSubmit = (data: FieldValues) => {
        console.log(data);
    };



    return (
        <>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="flex flex-col gap-2">
                    <label
                        className="input input-bordered flex w-full items-center gap-2"
                        {...register('title')}
                    >
                        Journal title
                        <input
                            type="text"
                            className="grow"
                            placeholder="Title"
                        />
                    </label>
                    {errors.title && (
                        <p className="mt-1 font-medium text-red-500">
                            {errors.title.message}
                        </p>
                    )}
                    <label htmlFor="feeling" className="form-control w-full">
                        How are you feeling today?
                    </label>
                    <select
                        id="feeling"
                        defaultValue="Pick a color"
                        className="select select-bordered w-full"
                        {...register('feeling')}
                    >
                        <option>Happy</option>
                        <option>Neutral</option>
                        <option>Sad</option>
                    </select>
                    <textarea
                        className="textarea textarea-borderd w-full"
                        rows={10}
                        {...register('content')}
                    ></textarea>
                    {errors.content && (
                        <p className="mt-1 font-medium text-red-500">
                            {errors.content.message}
                        </p>
                    )}
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        </>
    );
};

export default AddJournalForm;
