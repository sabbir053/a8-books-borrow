
import BookDetails from '@/components/home/BookDetails';
import React from 'react';


const booksData = [
    {
        "id": 1,
        "title": "Eloquent JavaScript",
        "author": "Marijn Haverbeke",
        "description": "Eloquent JavaScript takes you from the very basics of programming to advanced topics like asynchronous programming and browser APIs. This edition includes a deep dive into modern ES6+ features, functional programming patterns, and how to build full-scale applications using Node.js. It's an essential guide for any web developer looking to master the language of the web.",
        "category": "Tech",
        "available_quantity": 5,
        "image_url": "https://i.ibb.co.com/BVBwhysq/IEVC-s-Vu4.png"
    },
    {
        "id": 2,
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "description": "Alicia Berenson is a famous painter who shoots her husband five times in the face and then never speaks another word. Her refusal to talk turns a domestic tragedy into something far more mysterious, a mystery that captures the public imagination and casts Alicia into notoriety. Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with her and uncover the shocking truth.",
        "category": "Story",
        "available_quantity": 8,
        "image_url": "https://i.ibb.co.com/5g8xdBnv/6513040-80.webp"
    },
    {
        "id": 3,
        "title": "Brief Answers to the Big Questions",
        "author": "Stephen Hawking",
        "description": "In this final book from the greatest scientist of our era, Stephen Hawking leaves us with his ultimate thoughts on the universe's biggest questions. From 'Is there a God?' to 'Is time travel possible?', Hawking addresses the challenges we face as a species and where we, as a planet, are heading next. A brilliant, last message to the world that explores the boundaries of human knowledge and science.",
        "category": "Science",
        "available_quantity": 12,
        "image_url": "https://i.ibb.co.com/0RVWHxGT/470.webp"
    },
    {
        "id": 4,
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "description": "Even bad code can function, but if code isn't clean, it can bring a development organization to its knees. Robert C. Martin presents a revolutionary paradigm for writing high-quality code. This book is divided into three parts: principles, patterns, and practices for writing clean code, followed by several case studies of increasing complexity. It is a must-read for any developer who wants to produce professional, maintainable software.",
        "category": "Tech",
        "available_quantity": 3,
        "image_url": "https://i.ibb.co.com/5Xm6zJvL/37aaf821bfaf5e5fdd096a684b3a0bd9.png"
    },
    {
        "id": 5,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "description": "This modern classic tells the story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
        "category": "Story",
        "available_quantity": 15,
        "image_url": "https://i.ibb.co.com/YFXtB3BF/1587673469517.png"
    },
    {
        "id": 6,
        "title": "The Selfish Gene",
        "author": "Richard Dawkins",
        "description": "Professor Dawkins explains that the gene is the fundamental unit of evolution. This imaginative, powerful, and stylistically brilliant work not only brought the insights of Neo-Darwinism to a wide audience but galvanized the biology community, generating much debate and stimulating whole new areas of research. It remains a classic work of evolutionary theory that explains how complex life emerged from simple building blocks.",
        "category": "Science",
        "available_quantity": 7,
        "image_url": "https://i.ibb.co.com/jj0Pqg6/9780198788607.webp"
    },
    {
        "id": 7,
        "title": "You Don't Know JS Yet",
        "author": "Kyle Simpson",
        "description": "Regardless of how much experience you have with JavaScript, odds are you don't fully understand the language. This book series gets into the hidden corners of JavaScript that most developers never take the time to learn. You'll explore closures, prototypes, and the 'this' keyword in extreme detail. If you want to move beyond just 'getting it to work' and start writing truly efficient code, this is your roadmap.",
        "category": "Tech",
        "available_quantity": 10,
        "image_url": "https://i.ibb.co.com/vvD6xC0X/25136217.jpg"
    },
    {
        "id": 8,
        "title": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "description": "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home. A heartbreaking coming-of-age story and a surprising murder mystery.",
        "category": "Story",
        "available_quantity": 6,
        "image_url": "https://i.ibb.co.com/HL0zWKbX/81-Gcr1-Vn75-L-CR2-0-1276-720-SR684-386.jpg"
    },
    {
        "id": 9,
        "title": "Cosmos",
        "author": "Carl Sagan",
        "description": "Cosmos is one of the bestselling science books of all time. With a new introduction by Sagan's collaborator, Ann Druyan, this classic work explores the 15 billion years of cosmic evolution that have transformed matter into consciousness. Sagan traces the origins of knowledge and the scientific method and explores our place in the universe, looking toward a future where we might finally reach the stars.",
        "category": "Science",
        "available_quantity": 9,
        "image_url": "https://i.ibb.co.com/pDX8PHG/1200x630wz.png"
    },
    {
        "id": 10,
        "title": "The Pragmatic Programmer",
        "author": "Andrew Hunt & David Thomas",
        "description": "The Pragmatic Programmer is one of those rare tech books you’ll read, re-read, and read again over the years. Whether you’re a new developer or an experienced practitioner, you’ll come away with fresh insights each time. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.",
        "category": "Tech",
        "available_quantity": 4,
        "image_url": "https://i.ibb.co.com/rRWpn2vk/61d5bdd5bd7b580020c11f3f.jpg"
    },
    {
        "id": 11,
        "title": "1984",
        "author": "George Orwell",
        "description": "Written in 1948, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever. Nominated as one of America’s best-loved novels by PBS’s The Great American Read, 1984 remains the modern standard for negative utopia and a warning against totalitarianism.",
        "category": "Story",
        "available_quantity": 20,
        "image_url": "https://i.ibb.co.com/4Rr2RpDP/s-l400.png"
    },
    {
        "id": 12,
        "title": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "description": "Destined to become a modern classic, Sapiens is a thrilling account of humankind’s extraordinary history—from the Stone Age to the Silicon Age—and our journey from insignificant apes to rulers of the world. Harari examines how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew.",
        "category": "Science",
        "available_quantity": 11,
        "image_url": "https://i.ibb.co.com/YFsVNBLb/sapiens.png"
    }
]

const BookDetailsPage = async ({ params }) => {

    const { id } = await params;

    const book = booksData.find((item) => item.id === parseInt(id));
    console.log(book, 'book');

    if (!book) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-2xl font-bold text-error">Book not found!</h2>
            </div>
        );
    }


    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col lg:flex-row bg-base-100 rounded-md shadow-md overflow-hidden">

                <div className="lg:w-5/12 p-8 md:p-16 flex justify-center items-center">
                    <div className="relative group">
                        <img
                            src={book.image_url}
                            alt={book.title}
                            className="w-full rounded-md shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <BookDetails book={book} />
            </div>
        </div>
    );
};

export default BookDetailsPage;