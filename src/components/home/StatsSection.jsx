import React from 'react';
import { FiUsers, FiBookOpen, FiAward, FiClock } from 'react-icons/fi';
import 'animate.css';

const StatsSection = () => {
    const stats = [
        { id: 1, icon: <FiUsers />, label: "Active Readers", value: "10k+", color: "bg-blue-100 text-blue-600" },
        { id: 2, icon: <FiBookOpen />, label: "Total Books", value: "2,500+", color: "bg-green-100 text-green-600" },
        { id: 3, icon: <FiAward />, label: "Best Authors", value: "150+", color: "bg-purple-100 text-purple-600" },
        { id: 4, icon: <FiClock />, label: "Reading Hours", value: "50k+", color: "bg-orange-100 text-orange-600" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group"
                        >
                            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                            <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 animate__animated animate__bounce bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-content animate__animated animate__fadeInUp">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to start your reading journey?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Explore our vast collection of books across various genres and enhance your knowledge today.
                    </p>
                    <button className="btn btn-secondary btn-lg px-10 rounded-full font-bold shadow-xl">
                        Join Membership
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;