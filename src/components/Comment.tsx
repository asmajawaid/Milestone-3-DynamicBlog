'use client'
import { useState } from 'react';

type Comment = {
    name: string;
    message: string;
};

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [form, setForm] = useState({ name: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Add the new comment to the list
        setComments([...comments, form]);

        // Clear the form fields
        setForm({ name: '', message: '' });
    };

    return (
        <div className="p-10 bg-dPink items-center justify-center shadow-lg shadow-dbrown rounded-sm mx-20 my-20">
            <h2 className="text-lg md:text-3xl  text-start text-dbrown capitalize lg:mt-5">Comments</h2>
            <ul>
                {comments.map((comment, idx) => (
                    <li key={idx} className="mt-4 border-b pb-2">
                        <p className="font-bold">{comment.name}</p>
                        <p>{comment.message}</p>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit} className="mt-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full p-2 active:border-yellow-600 border-[2px] shadow-md font-semibold rounded-md px-4 py-2 mb-2 text-dbrown transition-all duration-300 focus:border-dbrown focus:outline-none"
                />
                <textarea
                    placeholder="Your Comment"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full p-2 active:border-yellow-600 border-[2px]  shadow-md font-semibold rounded-md px-4 py-2 mb-2 text-dbrown transition-all duration-300 focus:border-dbrown focus:outline-none"
                />
                <button type="submit" className="text-dbrown text-sm border-[1px] border-dbrown shadow-md hover:border-secondaryColor font-semibold hover:text-dbrown rounded-md hover:bg-lPink transition-all duration-300 active:bg-yellow-600 hover:shadow-md px-4 py-2">
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default Comments;
