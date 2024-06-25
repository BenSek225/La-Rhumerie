import React from 'react';

const ReservationModal = ({ closeModal }) => {
    return (
        <div className="px-2 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-black p-10 sm:p-20 border-white border-2 shadow-lg w-full sm:w-3/4 sm:h-2.5/3 lg:w-1/2 lg:h-full">
                <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center text-white mb-10">Réserver une table</h2>
                <form>
                    <div className="mb-6 sm:mb-10">
                        <input
                            type="text"
                            required
                            placeholder='Nom*'
                            className="bg-black border-gray-200 border-2 shadow appearance-none w-full lg:py-4 lg:px-4 py-3 px-3 sm:py-6 sm:px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6 sm:mb-10">
                        <input
                            type="email"
                            required
                            placeholder='Email*'
                            className="bg-black lg:py-4 lg:px-4 border-gray-200 border-2 shadow appearance-none w-full py-3 px-3 sm:py-6 sm:px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6 sm:mb-10">
                        <input
                            type="number"
                            required
                            placeholder='Nombre de personne*'
                            className="bg-black lg:py-4 lg:px-4 border-gray-200 border-2 shadow appearance-none w-full py-3 px-3 sm:py-6 sm:px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6 sm:mb-10">
                        <input
                            type="datetime-local"
                            placeholder='Date et heure*'
                            required
                            className="bg-white lg:py-4 lg:px-4 border-gray-200 border-2 shadow appearance-none w-full py-3 px-3 sm:py-6 sm:px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="sm:text-2xl lg:text-xl bg-orange-500 text-white hover:bg-white hover:text-black transition duration-300 lg:py-4 lg:px-4 py-2 px-4 sm:py-6 sm:px-6 focus:outline-none focus:shadow-outline"
                        >
                            Réserver
                        </button>

                        <button
                            type="button"
                            className="sm:text-2xl lg:text-xl text-gray-400 hover:text-orange-500 hover:border-white hover:border-2 lg:py-4 lg:px-4 py-2 px-4 sm:py-6 sm:px-6"
                            onClick={closeModal}
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationModal;
